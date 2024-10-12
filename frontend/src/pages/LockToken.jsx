import { useState } from "react";

function LockToken() {
  const [hidden, setHidden] = useState(false);
  const handleHidden = function () {
    setHidden((bool) => !bool);
  };

  return (
    <section className="flex-1 px-10 py-16 bg-light-gray flex flex-col gap-16 text-dark-gray">
      <nav className="self-end flex items-center gap-8 text-16 relative">
        <button className="border-2 border-mint-green px-8 py-1 rounded-xl">
          + New
        </button>
        <button onClick={handleHidden}>{`${sessionStorage.address.slice(
          0,
          15
        )}...`}</button>

        {hidden && (
          <ul className="absolute right-1 top-14 border-2 border-mint-green bg-white rounded-xl overflow-hidden">
            <li className="border-b-2 border-mint-green pb-2 px-8 py-4 hover:cursor-pointer hover:bg-off-white">
              Switch Account
            </li>
            <li className="pt-2 px-8 py-4 hover:cursor-pointer hover:bg-off-white">
              Logout
            </li>
          </ul>
        )}
      </nav>
      <form
        action=""
        className="h-full flex flex-col items-stretch gap-3 text-16"
      >
        <label htmlFor="beneficiary">Beneficiary Wallet Address</label>
        <input
          type="text"
          id="beneficiary"
          className="outline-none mb-5 px-6 py-4"
        />

        <label htmlFor="block-height" className="flex flex-col">
          <span>Lock Duration (in Days)</span>
          <span className="text-13">
            Specify how many days you'd like your tokens to remian locked
          </span>
        </label>
        <input
          type="number"
          id="block-height"
          className="outline-none mb-5 px-6 py-4"
        />

        <label htmlFor="block-height" className="flex flex-col">
          <span>Token to lock</span>
          <span className="text-13">Token value should be in stx</span>
        </label>
        <input
          type="number"
          id="block-height"
          className="outline-none mb-5 px-6 py-4"
        />

        <label htmlFor="memo" className="flex flex-col">
          <span>Memo</span>
          <span className="text-13">This field is optional</span>
        </label>
        <textarea
          id="memo"
          className="flex-1 outline-none px-6 py-4"
        ></textarea>
      </form>
    </section>
  );
}

export default LockToken;
