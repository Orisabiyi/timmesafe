import { useState } from "react";
import { Link } from "react-router-dom";

function LockToken() {
  const [hidden, setHidden] = useState(false);
  const [beneficiary, setBeneficiary] = useState("");
  const [duration, setDuration] = useState("");
  const [token, setToken] = useState("");
  const [memo, setMemo] = useState("");
  const [error, setError] = useState("");

  const handleHidden = function () {
    setHidden((bool) => !bool);
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!beneficiary) {
      setError("Beneficiary field is required");
      return setTimeout(() => setError(""), 3000);
    }

    if (!duration) {
      setError("Duration field is required");
      return setTimeout(() => setError(""), 3000);
    }

    if (Number(duration) === "NaN") {
      setError("Duration value must be numbers");
      return setTimeout(() => setError(""), 3000);
    }

    if (!token) {
      setError("Token field is required");
      return setTimeout(() => setError(""), 3000);
    }

    if (Number(token) === "NaN") {
      setError("Token value should be a number");
      return setTimeout(() => setError(""), 3000);
    }
  }

  return (
    <section className="flex-1 px-10 py-16 bg-light-gray flex flex-col gap-16 text-dark-gray">
      <nav className="self-end flex items-center gap-8 text-16 relative">
        <button className="border-2 border-mint-green px-8 py-1 rounded-xl">
          <Link to="/dashboard/lock-token">+ New</Link>
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
        onSubmit={handleSubmit}
      >
        <label htmlFor="beneficiary">Beneficiary Wallet Address</label>
        <input
          type="text"
          id="beneficiary"
          className="outline-none mb-1 px-6 py-4 rounded-xl"
          onChange={(e) => setBeneficiary(e.target.value)}
        />
        {error?.includes("Beneficiary") && (
          <p className="text-red-900 text-13 mb-5">{error}</p>
        )}

        <label htmlFor="block-height" className="flex flex-col">
          <span>Lock Duration (in Days)</span>
          <span className="text-13">
            Specify how many days you'd like your tokens to remian locked
          </span>
        </label>
        <input
          type="number"
          id="block-height"
          className="outline-none mb-1 px-6 py-4 rounded-xl"
          onChange={(e) => setDuration(e.target.value)}
        />
        {error?.includes("Duration") && (
          <p className="text-red-900 text-13 mb-5">{error}</p>
        )}

        <label htmlFor="block-height" className="flex flex-col">
          <span>Token to lock</span>
          <span className="text-13">Token value should be in stx</span>
        </label>
        <input
          type="number"
          id="block-height"
          className="outline-none mb-1 px-6 py-4 rounded-xl"
          onChange={(e) => setToken(e.target.value)}
        />

        {error?.includes("Token") && (
          <p className="text-red-900 text-13 mb-5">{error}</p>
        )}

        <label htmlFor="memo" className="flex flex-col">
          <span>Memo</span>
          <span className="text-13">This field is optional</span>
        </label>
        <textarea
          id="memo"
          className="flex-1 outline-none px-6 py-4 mb-5 rounded-xl"
          onChange={(e) => setMemo(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="bg-mint-green py-4 rounded-xl text-18 hover:bg-dark-mint-green transition-all duration-500"
        >
          Lock token
        </button>
      </form>
    </section>
  );
}

export default LockToken;
