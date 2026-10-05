import { useState } from "react";

import {
  ArrowRight,
  CalendarDays,
  MapPinned,
  Users
} from "lucide-react";

function Planner() {

  const [form, setForm] =
    useState({
      from: "",
      destination: "",
      dates: "",
      travellers: "2"
    });

  const [submitted, setSubmitted] =
    useState(false);

  const handleChange = (event) => {

    const {
      name,
      value
    } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));

  };

  const handleSubmit = (event) => {

    event.preventDefault();

    setSubmitted(true);

  };

  return (

    <section
      id="planner"
      className="
        px-5
        py-24
        lg:px-8
        lg:py-32
      "
    >

      <div className="mx-auto max-w-7xl">

        <div className="
          overflow-hidden
          rounded-[2.5rem]
          bg-[#111814]
          p-7
          text-white
          sm:p-10
          lg:p-14
        ">

          <div className="
            grid
            gap-12
            lg:grid-cols-[.9fr_1.1fr]
            lg:items-center
          ">

            <div>

              <p className="
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#d9ff5b]
              ">
                03 · Trip planner
              </p>

              <h2 className="
                mt-5
                font-display
                text-5xl
                font-extrabold
                leading-[.95]
                sm:text-7xl
              ">
                Tell us where
                you're going.
              </h2>

              <p className="
                mt-6
                max-w-md
                leading-7
                text-white/60
              ">
                Start with the basics. We'll turn
                your idea into a practical itinerary
                with stays, experiences and breathing
                room.
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="
                grid
                gap-3
                sm:grid-cols-2
              "
            >

              <Field
                icon={MapPinned}
                label="Starting from"
              >

                <input
                  required
                  name="from"
                  value={form.from}
                  onChange={handleChange}
                  placeholder="Mumbai"
                />

              </Field>

              <Field
                icon={MapPinned}
                label="Destination"
              >

                <input
                  required
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  placeholder="Bali"
                />

              </Field>

              <Field
                icon={CalendarDays}
                label="Travel dates"
              >

                <input
                  required
                  name="dates"
                  value={form.dates}
                  onChange={handleChange}
                  placeholder="10–17 Dec"
                />

              </Field>

              <Field
                icon={Users}
                label="Travellers"
              >

                <select
                  name="travellers"
                  value={form.travellers}
                  onChange={handleChange}
                >

                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>

                </select>

              </Field>

              <button
                type="submit"
                className="
                  group
                  mt-2
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  bg-[#d9ff5b]
                  px-5
                  py-4
                  font-bold
                  text-[#111814]
                  sm:col-span-2
                "
                data-cursor
              >

                {submitted
                  ? "Trip request received ✓"
                  : "Build my trip"}

                <ArrowRight
                  className="
                    transition
                    group-hover:translate-x-1
                  "
                />

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

function Field({
  icon: Icon,
  label,
  children
}) {

  return (

    <label className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-4
    ">

      <span className="
        flex
        items-center
        gap-2
        text-xs
        font-semibold
        uppercase
        tracking-wider
        text-white/40
      ">

        <Icon size={14} />

        {label}

      </span>

      <div className="
        mt-2
        [&_input]:w-full
        [&_input]:bg-transparent
        [&_input]:outline-none
        [&_input]:placeholder:text-white/25
        [&_select]:w-full
        [&_select]:bg-transparent
        [&_select]:outline-none
      ">

        {children}

      </div>

    </label>

  );
}

export default Planner;