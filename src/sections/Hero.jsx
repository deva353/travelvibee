import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  Play
} from "lucide-react";

function Hero() {

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#111814]
        text-white
      "
    >

      {/* Background */}

      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85"
        alt="Mountain landscape"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-60
        "
      />

      <div className="
        absolute
        inset-0
        bg-[linear-gradient(90deg,rgba(10,17,14,.9),rgba(10,17,14,.38),rgba(10,17,14,.2))]
      " />

      <div className="
        relative
        mx-auto
        flex
        min-h-screen
        max-w-7xl
        items-end
        px-5
        pb-14
        pt-32
        lg:px-8
        lg:pb-20
      ">

        <div className="max-w-4xl">

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="
              mb-6
              text-xs
              font-bold
              uppercase
              tracking-[0.35em]
              text-[#d9ff5b]
            "
          >
            Travel differently · 2026
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 35
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.1
            }}
            className="
              font-display
              text-6xl
              font-extrabold
              leading-[.92]
              tracking-[-0.05em]
              sm:text-8xl
              lg:text-[9.5rem]
            "
          >

            Go where
            <br />

            <span className="text-[#d9ff5b]">
              you feel alive.
            </span>

          </motion.h1>

          <motion.div
            initial={{
              opacity: 0,
              y: 25
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.25
            }}
            className="
              mt-8
              flex
              flex-col
              gap-6
              sm:flex-row
              sm:items-center
            "
          >

            <p className="
              max-w-md
              text-base
              leading-7
              text-white/70
            ">
              Curated escapes, local experiences and
              flexible itineraries for people who would
              rather collect stories than souvenirs.
            </p>

            <div className="flex gap-3">

              <a
                href="#destinations"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#d9ff5b]
                  px-6
                  py-4
                  font-bold
                  text-[#111814]
                "
                data-cursor
              >

                Explore trips

                <ArrowUpRight
                  size={18}
                  className="
                    transition
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </a>

              <a
                href="#stories"
                className="
                  grid
                  h-14
                  w-14
                  place-items-center
                  rounded-full
                  border
                  border-white/25
                "
                data-cursor
              >

                <Play
                  size={18}
                  fill="currentColor"
                />

              </a>

            </div>

          </motion.div>

          <div className="
            mt-14
            flex
            items-center
            gap-3
            text-xs
            uppercase
            tracking-[0.25em]
            text-white/50
          ">

            <ArrowDown size={15} />

            Scroll to explore

          </div>

        </div>

      </div>

      {/* Trending */}

      <div className="
        absolute
        bottom-8
        right-8
        hidden
        max-w-[220px]
        rounded-2xl
        border
        border-white/15
        bg-black/20
        p-4
        backdrop-blur-md
        lg:block
      ">

        <p className="
          text-xs
          uppercase
          tracking-widest
          text-white/50
        ">
          Trending now
        </p>

        <p className="mt-2 font-semibold">
          Ladakh · 7 days · from ₹24,900
        </p>

      </div>

    </section>
  );
}

export default Hero;