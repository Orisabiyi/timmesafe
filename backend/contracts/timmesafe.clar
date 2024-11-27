;; title: Lock-contract for dave
;; version: 1.0
;; summary: Token locking mechanism with beneficiary claims
;; description: Smart contract for locking STX tokens with time-based release to beneficiaries

;; constants
(define-constant ERR-NOT-AUTHORIZED (err u401))
(define-constant ERR-NOT-FOUND (err u404))
(define-constant ERR-INVALID-DURATION (err u400))
(define-constant ERR-TRANSFER-FAILED (err u500))
(define-constant ERR-LOCK-NOT-COMPLETE (err u403))

;; data vars
(define-constant contract-owner tx-sender)
(define-data-var block-duration uint u0)
(define-data-var lock-id uint u1)
(define-data-var period uint u0)

;; data maps
(define-map stamp-funds 
    {sender: principal, lock-id: uint} 
    {
        beneficiary: principal,
        duration: uint,
        amount: uint,
        start-height: uint,
        lock-id: uint
    }
)

(define-map stamp-history 
    {hinge: principal} 
    {
        beneficiary: principal,
        memo: (optional (string-ascii 256)),
        lock-id: uint,
        duration: uint,
        money: uint
    }
)

;; private functions
(define-private (is-lock-complete? (sender principal) (lock_id uint)) 
    (match (map-get? stamp-funds {sender: sender, lock-id: lock_id})
        entry (>= block-height (+ (get start-height entry) (get duration entry)))
        false
    )
)

;; public functions
(define-public (lock-funds (beneficiary principal) (duration uint) (amount uint) (memo (optional (string-ascii 256))))
    (let
        (
            (current-id (var-get lock-id))
            (next-id (+ current-id u1))
        )
        ;; Asserts that tx-sender is authorized
        (asserts! (is-eq contract-owner tx-sender) ERR-NOT-AUTHORIZED)
        
        ;; Asserts that the duration is greater than 0
        (asserts! (> duration u0) ERR-INVALID-DURATION)

        ;; Transfer tokens to contract
        (try! (stx-transfer? amount tx-sender (as-contract tx-sender)))

        ;; Update lock ID
        (var-set lock-id next-id)

        ;; Map set the stamp-funds entry
        (map-set stamp-funds 
            {sender: tx-sender, lock-id: current-id} 
            {
                beneficiary: beneficiary,
                duration: duration,
                amount: amount,
                start-height: block-height,
                lock-id: next-id
            }
        )
        
        ;; Map set the history
        (ok (map-set stamp-history 
            {hinge: tx-sender} 
            {
                beneficiary: beneficiary,
                memo: memo,
                lock-id: next-id,
                duration: duration,
                money: amount
            }))
    )
)

(define-read-only (get-locked-amount (sender principal) (lock_id uint))
    (match (map-get? stamp-funds {sender: sender, lock-id: lock_id})
        entry (ok (get amount entry))
        ERR-NOT-FOUND
    )
)

(define-read-only (get-locked-details (sender principal) (lock_id uint))
    (match (map-get? stamp-funds {sender: sender, lock-id: lock_id})
        entry (ok entry)
        ERR-NOT-FOUND
    )
)

(define-public (claim-locked-token (locker principal) (lock_id uint)) 
    (let
        (
            (locker-record (unwrap! (map-get? stamp-funds {sender: locker, lock-id: lock_id}) ERR-NOT-FOUND))
            (amount (get amount locker-record))
            (beneficiary (get beneficiary locker-record))
        )
        ;; Assert that the transaction sender is the beneficiary
        (asserts! (is-eq tx-sender beneficiary) ERR-NOT-AUTHORIZED)
        
        ;; Assert the lock has completed its timespan
        (asserts! (is-lock-complete? locker lock_id) ERR-LOCK-NOT-COMPLETE)
        
        ;; Transfer tokens to beneficiary
        (try! (as-contract (stx-transfer? amount tx-sender beneficiary)))
        
        (ok true)
    )
)