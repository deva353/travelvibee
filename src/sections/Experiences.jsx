import { motion } from "framer-motion";

import {
  Bike,
  Camera,
  Coffee,
  Mountain,
  Waves,
  Utensils
} from "lucide-react";

const experiences = [

  [
    "Slow mornings",
    "Coffee, markets and streets before the crowds.",
    Coffee
  ],

  [
    "Wild trails",
    "Hikes, camps and views you remember for years.",
    Mountain
  ],

  [
    "Ocean days",
    "Surf, snorkel, sail and disappear for a while.",
    Waves
  ],

  [
    "Local food",
    "Small restaurants, cooking classes and street eats.",
    Utensils
  ],

  [
    "Road stories",
    "Scenic drives where the route is the destination.",
    Bike
  ],

  [
    "Photo walks",
    "Golden-hour routes designed for curious eyes.",
    Camera
  ]

];

function Experiences() {

  return (

    <section
      id="experiences"
      className="
        bg-[#d9ff5b]
        px-5
        py-24
        text-[#111814]
        lg:px-8
        lg:py-32
      "
    >

      <div className="mx-auto max-w-7xl">

        <div className="
          grid
          gap-12
          lg:grid-cols-[.8fr_1.2fr]
        ">

          <div>

            <p className="
              text-xs
              font-bold
              uppercase
              tracking-[0.3em]
            ">
              02 · Experiences
            </p>

            <h2 className="
              mt-5
              font-display
              text-5xl
              font-extrabold
              leading-[.95]
              tracking-[-0.04em]
              sm:text-7xl
            ">

              Don't just visit.

              <br />

              <span className="opacity-50">
                Feel the place.
              </span>

            </h2>

          </div>

          <div className="
            grid
            gap-px
            overflow-hidden
            rounded-3xl
            border
            border-black/10
            bg-black/10
            sm:grid-cols-2
          ">

            {experiences.map(
              ([title, text, Icon], index) => (

                <motion.div
                  key={title}
                  initial={{
                    opacity: 0,
                    y: 25
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: index * 0.06
                  }}
                  className="
                    bg-[#d9ff5b]
                    p-7
                    transition
                    hover:bg-white
                  "
                >

                  <Icon
                    size={25}
                    strokeWidth={1.7}
                  />

                  <h3 className="
                    mt-10
                    font-display
                    text-xl
                    font-bold
                  ">
                    {title}
                  </h3>

                  <p className="
                    mt-2
                    max-w-xs
                    text-sm
                    leading-6
                    opacity-65
                  ">
                    {text}
                  </p>

                </motion.div>

              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experiences;