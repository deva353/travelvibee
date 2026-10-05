import {
  Compass,
  Instagram,
  Mail,
  MapPin
} from "lucide-react";

function Footer() {

  return (

    <footer className="
      bg-[#111814]
      px-5
      py-12
      text-white
      lg:px-8
    ">

      <div className="
        mx-auto
        grid
        max-w-7xl
        gap-10
        sm:grid-cols-2
        lg:grid-cols-4
      ">

        {/* Brand */}

        <div className="lg:col-span-2">

          <div className="
            flex
            items-center
            gap-3
          ">

            <span className="
              grid
              h-10
              w-10
              place-items-center
              rounded-full
              bg-[#d9ff5b]
              text-[#111814]
            ">

              <Compass size={22} />

            </span>

            <span className="
              font-display
              text-xl
              font-extrabold
            ">
              TravelVibe
            </span>

          </div>

          <p className="
            mt-6
            max-w-md
            leading-7
            text-white/50
          ">
            Curated travel for curious people.
            Go slower, see deeper, come home with
            better stories.
          </p>

        </div>

        {/* Explore */}

        <div>

          <p className="
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-white/30
          ">
            Explore
          </p>

          <div className="
            mt-5
            space-y-3
            text-sm
            text-white/60
          ">

            <a
              href="#destinations"
              className="block hover:text-white"
            >
              Destinations
            </a>

            <a
              href="#experiences"
              className="block hover:text-white"
            >
              Experiences
            </a>

            <a
              href="#planner"
              className="block hover:text-white"
            >
              Trip planner
            </a>

            <a
              href="#stories"
              className="block hover:text-white"
            >
              Stories
            </a>

          </div>

        </div>

        {/* Contact */}

        <div>

          <p className="
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-white/30
          ">
            6362654296
          </p>

          <div className="
            mt-5
            space-y-3
            text-sm
            text-white/60
          ">

            <p className="flex gap-2">

              <Mail size={16} />

              travelvibeee@gmail.com

            </p>

            <p className="flex gap-2">

              <MapPin size={16} />

              Kadiri ,Andhra pradesh

            </p>

            <p className="flex gap-2">

              <Instagram size={16} />

              @travelvibee4

            </p>

          </div>

        </div>

      </div>

      <div className="
        mx-auto
        mt-12
        max-w-7xl
        border-t
        border-white/10
        pt-6
        text-xs
        text-white/30
      ">

        © {new Date().getFullYear()}
        TravelVibe. 

      </div>

    </footer>
  );
}

export default Footer;