import { motion } from "framer-motion";

import {
  ArrowUpRight,
  MapPin
} from "lucide-react";

const destinations = [

  {
    name: "Ladakh",
    country: "India",
    tag: "High altitude",
    price: "₹24,900",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85"
  },

  {
    name: "Bali",
    country: "Indonesia",
    tag: "Island escape",
    price: "₹39,500",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85"
  },

  {
    name: "Swiss Alps",
    country: "Switzerland",
    tag: "Mountain life",
    price: "₹1,18,000",
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85"
  }

];

function Destinations() {

  return (

    <section
      id="destinations"
      className="
        px-5
        py-24
        lg:px-8
        lg:py-32
      "
    >

      <div className="mx-auto max-w-7xl">

        <motion.div
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
        >

          <p className="
            text-xs
            font-bold
            uppercase
            tracking-[0.3em]
            text-[#607267]
          ">
            01 · Destinations
          </p>

          <h2 className="
            mt-4
            max-w-3xl
            font-display
            text-5xl
            font-extrabold
            leading-[.95]
            tracking-[-0.04em]
            sm:text-7xl
          ">
            Places worth changing
            your plans for.
          </h2>

        </motion.div>

        <div className="
          mt-12
          grid
          gap-5
          md:grid-cols-3
        ">

          {destinations.map(
            (item, index) => (

              <motion.article
                key={item.name}
                initial={{
                  opacity: 0,
                  y: 40
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  amount: 0.2
                }}
                transition={{
                  delay: index * 0.1
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  bg-[#1b2722]
                  text-white
                "
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-[500px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                " />

                <div className="
                  absolute
                  left-6
                  top-6
                  rounded-full
                  bg-white/15
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  backdrop-blur-md
                ">
                  {item.tag}
                </div>

                <div className="
                  absolute
                  bottom-0
                  w-full
                  p-6
                ">

                  <div className="
                    flex
                    items-center
                    gap-1
                    text-xs
                    text-white/60
                  ">

                    <MapPin size={13} />

                    {item.country}

                  </div>

                  <div className="
                    mt-2
                    flex
                    items-end
                    justify-between
                    gap-3
                  ">

                    <div>

                      <h3 className="
                        font-display
                        text-4xl
                        font-bold
                      ">
                        {item.name}
                      </h3>

                      <p className="
                        mt-1
                        text-sm
                        text-white/60
                      ">
                        7 day curated escape ·
                        {item.price}
                      </p>

                    </div>

                    <a
                      href="#planner"
                      className="
                        grid
                        h-12
                        w-12
                        shrink-0
                        place-items-center
                        rounded-full
                        bg-[#d9ff5b]
                        text-[#111814]
                      "
                      data-cursor
                    >

                      <ArrowUpRight
                        size={20}
                      />

                    </a>

                  </div>

                </div>

              </motion.article>

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default Destinations;