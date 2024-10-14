function ViewLockTokens() {
  return (
    <section className="flex-1 px-10 py-16 bg-light-gray flex flex-col text-dark-gray">
      <ul className="flex flex-col gap-4 w-full text-13">
        {[...Array(11)].map((_, i) => (
          <li key={i} className="flex gap-4 border-b-mint-green border-b-2 p-4">
            <span>
              <b className="font-medium">Beneficiary:</b>{" "}
              {sessionStorage.address}
            </span>
            <span>|</span>
            <span>
              <b className="font-medium">Token Locked:</b> 2000 stx
            </span>

            <button className="ml-auto bg-dark-mint-green text-white w-10 h-10 rounded-full flex items-center justify-center">
              +
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ViewLockTokens;
