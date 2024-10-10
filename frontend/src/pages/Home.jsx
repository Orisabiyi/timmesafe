import { Link } from "react-router-dom";
import secureIcon from "../assets/secure.svg";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

function Home() {
  return (
    <main className="container mx-auto text-dark-gray">
      <header
        className="flex flex-col items-center justify-between h-screen px-40 py-16"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <nav
          className="flex items-center justify-between w-full"
          style={{ fontWeight: "500" }}
        >
          <figure className="text-16" style={{ fontWeight: "600" }}>
            <Link to="/">Timmesafe</Link>
          </figure>

          <ul className="flex items-center gap-20 text-13">
            <li>
              <HashLink to="#how-it-works">How it works</HashLink>
            </li>
            <li>
              <HashLink to="#why">Why Timmesafe</HashLink>
            </li>
            <li>
              <button>Login</button>
            </li>
            <li>
              <button>Sign Up</button>
            </li>
          </ul>
        </nav>

        <section
          className="flex items-center justify-center gap-32 h-5/6"
          style={{ fontWeight: "700" }}
        >
          <div className="w-1/2">
            <h1 className="mb-6 leading-tight text-32">
              Time-Locked Wallet For Secure Token Storage
            </h1>
            <p className="mb-12 text-18" style={{ fontWeight: "500" }}>
              Lock your tokens until a specific block height, ensuring security
              and flexibility
            </p>
            <button
              className="py-4 transition-all duration-200 rounded-full px-14 bg-dark-mint-green text-16 text-off-white hover:border-gray hover:border-2"
              style={{ fontWeight: "500" }}
            >
              Get Started
            </button>
          </div>

          <figure className="w-1/2">
            <img
              src={secureIcon}
              alt="an icon for security"
              className="object-cover w-full h-full"
            />
          </figure>
        </section>
      </header>

      <section id="how-it-works" className="px-40 py-16">
        <h1
          className="mb-20 leading-tight text-32"
          style={{ fontWeight: "600" }}
        >
          How Timmesafe Works
        </h1>

        <div className="flex items-stretch justify-between gap-14">
          <article className="flex flex-col justify-center w-1/3 gap-4 p-8 bg-light-gray rounded-2xl">
            <h2
              className="flex items-start justify-start gap-8 text-18"
              style={{ fontWeight: "500" }}
            >
              <span>1</span>
              <span>Set Your Unlock Block Height</span>
            </h2>
            <p className="leading-tight text-16">
              Choose a future block height to lock your tokens securely
            </p>
          </article>

          <article className="flex flex-col justify-center w-1/3 gap-4 p-8 bg-light-gray rounded-2xl">
            <h2
              className="flex items-start justify-start gap-8 text-18"
              style={{ fontWeight: "500" }}
            >
              <span>2</span>
              <span>Send Tokens</span>
            </h2>
            <p className="leading-tight text-16">
              Anyone can send tokens to your time-locked wallet
            </p>
          </article>

          <article className="flex flex-col justify-center w-1/3 gap-4 p-8 bg-light-gray rounded-2xl">
            <h2
              className="flex items-start justify-start gap-8 text-18"
              style={{ fontWeight: "500" }}
            >
              <span>3</span>
              <span>Claim your tokens</span>
            </h2>
            <p className="leading-tight text-16">
              When the block height is reached, your tokens unlock, ready for
              withdraw or transfer
            </p>
          </article>
        </div>
      </section>

      <section className="px-40 py-16">
        <h1
          className="mb-20 leading-tight text-32"
          style={{ fontWeight: "600" }}
        >
          Why Choose Timmesafe
        </h1>
      </section>
    </main>
  );
}

export default Home;

// Montserrat
