import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-mint-green">
      <header
        className="h-screen px-32 py-12"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <nav className="flex items-center justify-between w-full">
          <figure className="text-[1.6rem]">
            <Link to="/">Timmesafe</Link>
          </figure>

          <ul className="flex items-center gap-20 text-[1.3rem]">
            <li>
              <Link to="#works">How it works</Link>
            </li>
            <li>
              <Link to="#works">Why Timmesafe</Link>
            </li>
            <li>
              <button>Login</button>
            </li>
            <li>
              <button>Sign Up</button>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}

export default Home;

// Montserrat
