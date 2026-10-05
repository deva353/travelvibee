import { useState } from "react";

import {
  Compass,
  Menu,
  Moon,
  Sun,
  X
} from "lucide-react";

const links = [
  ["Destinations", "#destinations"],
  ["Experiences", "#experiences"],
  ["Planner", "#planner"],
  ["Stories", "#stories"]
];

function Navbar({
  dark,
  setDark
}) {

  const [open, setOpen] =
    useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">

      <nav className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        px-5
        py-6
        lg:px-8
      ">

        {/* Logo */}

        <a
          href="#home"
          className="
            flex
            items-center
            gap-3
          "
          data-cursor
        >

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
            text-white
          ">
            TravelVibe
          </span>

        </a>

        {/* Desktop Navigation */}

        <div className="
          hidden
          items-center
          gap-8
          md:flex
        ">

          {links.map(
            ([label, href]) => (

              <a
                key={label}
                href={href}
                className="
                  text-sm
                  font-semibold
                  text-white/75
                  transition
                  hover:text-white
                "
                data-cursor
              >
                {label}
              </a>

            )
          )}

          {/* Theme */}

          <button
            onClick={() =>
              setDark(!dark)
            }
            className="
              rounded-full
              border
              border-white/20
              p-2
              text-white
            "
            data-cursor
          >

            {dark ? (
              <Sun size={17} />
            ) : (
              <Moon size={17} />
            )}

          </button>

          <a
            href="#planner"
            className="
              rounded-full
              bg-white
              px-5
              py-3
              text-sm
              font-bold
              text-[#111814]
            "
            data-cursor
          >
            Plan a trip
          </a>

        </div>

        {/* Mobile */}

        <div className="
          flex
          items-center
          gap-2
          md:hidden
        ">

          <button
            onClick={() =>
              setDark(!dark)
            }
            className="
              rounded-full
              border
              border-white/20
              p-2
              text-white
            "
          >

            {dark ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}

          </button>

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="
              rounded-full
              border
              border-white/20
              p-2
              text-white
            "
          >

            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}

          </button>

        </div>

      </nav>

      {/* Mobile Menu */}

      {open && (

        <div className="
          mx-4
          rounded-3xl
          bg-[#111814]/95
          p-5
          md:hidden
        ">

          {links.map(
            ([label, href]) => (

              <a
                key={label}
                href={href}
                onClick={() =>
                  setOpen(false)
                }
                className="
                  block
                  border-b
                  border-white/10
                  py-4
                  text-white
                "
              >
                {label}
              </a>

            )
          )}

          <a
            href="#planner"
            onClick={() =>
              setOpen(false)
            }
            className="
              mt-4
              block
              rounded-full
              bg-[#d9ff5b]
              px-5
              py-3
              text-center
              font-bold
              text-[#111814]
            "
          >
            Plan a trip
          </a>

        </div>

      )}

    </header>
  );
}

export default Navbar;