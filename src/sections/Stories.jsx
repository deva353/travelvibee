import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Quote
} from "lucide-react";

const stories = [

  {
    name: "Ananya & Karan",
    trip: "Ladakh",
    text: "The itinerary gave us enough structure to relax without feeling like we were following a checklist."
  },

  {
    name: "Rohan Mehta",
    trip: "Bali",
    text: "The best part was the small local places. It felt nothing like a generic package tour."
  },

  {
    name: "Priya Shah",
    trip: "Japan",
    text: "Every day had one unforgettable moment. That's exactly what I wanted from the trip."
  }

];

function Stories() {

  return (

    <section
      id="stories"
      className="
        px-5
        py-24
        lg:px-8
        lg:py-32
      "
    >

      <div className="mx-auto max-w-7xl">

        <div className="
          flex
          flex-col
          justify-between
          gap-6
          sm:flex-row
          sm:items-end
        ">

          <div>

            <p className="
              text-xs
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#607267]
            ">
              04 · Traveller stories
            </p>

            <h2 className="
              mt-4
              font-display
              text-5xl
              font-extrabold
              tracking-[-0.04em]
              sm:text-7xl
            ">
              Real trips.
              Real stories.
            </h2>

          </div>

          <a
            href="#planner"
            className="
              flex
              items-center
              gap-2
              font-bold
            "
            data-cursor
          >

            Start yours

            <ArrowUpRight size={18} />

          </a>

        </div>

        <div className="
          mt-12
          grid
          gap-5
          md:grid-cols-3
        ">

          {stories.map(
            (story, index) => (

              <motion.article
                key={story.name}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.1
                }}
                className="
                  rounded-[2rem]
                  border
                  border-black/10
                  p-7
                "
              >

                <Quote
                  className="text-[#91aa98]"
                  size={28}
                />

                <p className="
                  mt-8
                  min-h-32
                  text-lg
                  leading-8
                ">
                  "{story.text}"
                </p>

                <div className="
                  mt-8
                  border-t
                  border-black/10
                  pt-5
                ">

                  <p className="font-bold">
                    {story.name}
                  </p>

                  <p className="
                    mt-1
                    text-sm
                    opacity-50
                  ">
                    {story.trip} ·
                    Verified traveller
                  </p>

                </div>

              </motion.article>

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default Stories;