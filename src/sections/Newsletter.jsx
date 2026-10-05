import { useState } from "react";
import { ArrowRight } from "lucide-react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="px-5 pb-24 lg:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#e8e5dc] px-7 py-14 text-[#111814] sm:px-12 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-50">
              05 · Travel notes
            </p>

            <h2 className="mt-4 font-display text-5xl font-extrabold leading-none sm:text-6xl">
              Get the places worth knowing.
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex rounded-2xl bg-white p-2"
          >
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-4 outline-none"
            />

            <button
              type="submit"
              className="grid h-12 w-12 place-items-center rounded-xl bg-[#111814] text-white"
            >
              <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {submitted && (
          <p className="mt-5 text-sm font-semibold">
            You're on the list. Watch your inbox.
          </p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;