import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

import "animate.css";

import secureIcon from "../assets/secure.svg";
import LinkedIn from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

import secure from "../assets/secure.png";
import flexible from "../assets/flexible.png";
import decentralized from "../assets/decentralized.png";

import { useEffect } from "react";
import { useState } from "react";

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(function () {
    window.onload = function () {
      setLoaded(true);
    };
  }, []);

  return (
    <>
      <main className="container mx-auto text-dark-gray overflow-hidden">
        <header
          className="flex flex-col items-center justify-between h-screen px-40 py-16"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <nav
            className={`flex items-center justify-between w-full ${
              loaded ? "animate__animated animate__zoomIn" : ""
            }`}
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
                <HashLink to="#why-choose-timmesafe">Why Timmesafe</HashLink>
              </li>
              <li>
                <button>Login</button>
              </li>
              <li>
                <button
                  className="py-4 transition-all duration-200 rounded-full px-14 bg-dark-mint-green text-16 text-off-white hover:bg-opacity-40"
                  style={{ fontWeight: "500" }}
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </nav>

          <section
            className="flex items-center justify-center gap-32 h-5/6"
            style={{ fontWeight: "700" }}
          >
            <div
              className={`w-1/2 ${
                loaded ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <h1 className="mb-6 leading-tight text-32">
                Time-Locked Wallet For Secure Token Storage
              </h1>
              <p className="mb-12 text-18" style={{ fontWeight: "500" }}>
                Lock your tokens until a specific block height, ensuring
                security and flexibility
              </p>
              <button
                className="py-4 transition-all duration-200 rounded-full px-14 bg-dark-mint-green text-16 text-off-white hover:bg-opacity-40"
                style={{ fontWeight: "500" }}
              >
                Get Started
              </button>
            </div>

            <figure
              className={`w-1/2 ${
                loaded ? "animate__animated animate__fadeInRight" : ""
              }`}
            >
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

          <div className="flex flex-col items-stretch justify-between gap-14">
            <article className="flex flex-col justify-center gap-2 p-12 bg-light-gray">
              <h2
                className="flex items-start justify-start gap-4 text-25"
                style={{ fontWeight: "500" }}
              >
                <span>1</span>
                <span>Set Your Unlock Block Height</span>
              </h2>
              <p className="leading-tight text-18">
                Choose a future block height to lock your tokens securely
              </p>
            </article>

            <article className="flex flex-col justify-center gap-2 p-12 bg-light-gray">
              <h2
                className="flex items-start justify-start gap-4 text-25"
                style={{ fontWeight: "500" }}
              >
                <span>2</span>
                <span>Send Tokens</span>
              </h2>
              <p className="leading-tight text-18">
                Anyone can send tokens to your time-locked wallet
              </p>
            </article>

            <article className="flex flex-col justify-center gap-2 p-12 bg-light-gray">
              <h2
                className="flex items-start justify-start gap-4 text-25"
                style={{ fontWeight: "500" }}
              >
                <span>3</span>
                <span>Claim your tokens</span>
              </h2>
              <p className="leading-tight text-18">
                When the block height is reached, your tokens unlock, ready for
                withdraw or transfer
              </p>
            </article>
          </div>
        </section>

        <section className="px-40 py-16" id="why-choose-timmesafe">
          <h1
            className="mb-20 leading-tight text-32"
            style={{ fontWeight: "600" }}
          >
            Why Choose Timmesafe
          </h1>

          <ul className="grid grid-cols-2 justify-between gap-16">
            <li className="bg-light-gray bg-opacity-45 py-24 px-16 flex items-center gap-8 rounded-3xl">
              <div className="w-[15rem]">
                <img
                  src={secure}
                  alt=""
                  className="w-full h-full object-cover block"
                />
              </div>

              <article className="flex flex-col">
                <span className="text-32" style={{ fontWeight: "500" }}>
                  Secure
                </span>
                <span
                  className="text-18 leading-none"
                  style={{ fontWeight: "400" }}
                >
                  Token are safely secure until the set time
                </span>
              </article>
            </li>

            <li className="bg-light-gray bg-opacity-45 py-24 px-16 flex items-center gap-8 rounded-3xl">
              <div className="w-[15rem]">
                <img
                  src={decentralized}
                  alt=""
                  className="w-full h-full object-cover block"
                />
              </div>

              <article className="flex flex-col">
                <span className="text-32" style={{ fontWeight: "500" }}>
                  Decentralized
                </span>
                <span
                  className="text-18 leading-none"
                  style={{ fontWeight: "400" }}
                >
                  Built on blockchain for transparency and trust
                </span>
              </article>
            </li>

            <li className="bg-light-gray bg-opacity-45 py-24 px-16 flex items-center gap-8 rounded-3xl translate-x-1/2 col-span-2 w-1/2">
              <div className="w-[15rem]">
                <img
                  src={flexible}
                  alt=""
                  className="w-full h-full object-cover block"
                />
              </div>

              <article className="flex flex-col">
                <span className="text-32" style={{ fontWeight: "500" }}>
                  Flexible
                </span>
                <span
                  className="text-18 leading-none"
                  style={{ fontWeight: "400" }}
                >
                  Easily transfer ownership or claim your tokens at the right
                  time.
                </span>
              </article>
            </li>
          </ul>
        </section>
      </main>
      <footer
        className="bg-light-gray flex flex-col items-center justify-center gap-8 px-40 py-16"
        style={{ fontWeight: "500" }}
      >
        <figure className="text-32">
          <Link to="/">Timmesafe</Link>
        </figure>

        <ul className="flex items-center justify-center gap-4 text-16">
          <li>
            <Link to="https://x.com/@d_orisabiyi" className="block h-16 w-16">
              <img
                src={twitter}
                alt="twitter icon for @d_orisabiyi"
                className="w-full h-full inline-block"
              />
            </Link>
          </li>
          <Link
            to="https://www.linkedin.com/in/orisabiyi"
            className="block h-12 w-12"
          >
            <img
              src={LinkedIn}
              alt="linkedin icon for orisabiyi-david"
              className="w-full h-full inline-block"
            />
          </Link>
        </ul>
      </footer>
    </>
  );
}

export default Home;

// Montserrat
