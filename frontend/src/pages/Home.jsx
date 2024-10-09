import { Link } from "react-router-dom";
import secureIcon from "../assets/secure.svg";

function Home() {
  return (
    <main className="container mx-auto">
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
              <Link to="#works">How it works</Link>
            </li>
            <li>
              <Link to="#why">Why Timmesafe</Link>
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
            <h1 className="text-[3.2rem] leading-tight mb-6">
              Time-Locked Wallet For Secure Token Storage
            </h1>
            <p className="text-[1.8rem] mb-6" style={{ fontWeight: "500" }}>
              Lock your tokens until a specific block height, ensuring security
              and flexibility
            </p>
            <button>Get Started</button>
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
    </main>
  );
}

export default Home;

// Montserrat
