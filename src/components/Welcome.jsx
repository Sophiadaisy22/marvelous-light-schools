import { FaBookOpen, FaUsers, FaShieldAlt } from "react-icons/fa";

// ---- Edit the quick facts here ----
const facts = [
  {
    icon: FaBookOpen,
    title: "Blended curriculum",
    text: "Nigerian and British curricula, taught side by side.",
  },
  {
    icon: FaUsers,
    title: "Small class sizes",
    text: "Focused attention so no child is left behind.",
  },
  {
    icon: FaShieldAlt,
    title: "Safe, secure campus",
    text: "Controlled access, trained staff and a caring pastoral team.",
  },
];

export default function Welcome() {
  return (
    <section aria-labelledby="welcome-title" className="py-20 md:py-28 !pt-0">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 xl:px-10">
        {/* ---------- Top: heading left, paragraphs right ---------- */}
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-24">
          {/* Left: label + heading */}
          <div>
            <span className="mb-4  items-center text-[20px] font-medium tracking-[0.04em] text-ml-blue ">
              <span className="h-[1.5px] w-7 " aria-hidden="true" />
              Welcome
            </span>
            <h2
              id="welcome-title"
              className="text-[clamp(30px,3.4vw,46px)] font-bold leading-[1.14] tracking-[-0.03em] text-ml-blue"
            >
              A family school with a world-class outlook
            </h2>
          </div>

          {/* Right: paragraphs + Head of School */}
          <div className="lg:pt-11">
            <p className="max-w-[58ch] text-[17px] font-light text-muted">
              At Marvelous Light Schools, we believe every child carries a light
              worth nurturing. Our teachers pair a rigorous blended curriculum
              with genuine care, so children grow in knowledge, character and
              confidence.
            </p>
            <p className="mt-5 max-w-[58ch] text-[17px] font-light text-muted">
              We work closely with parents at every stage, from a child's first
              day in Creche to their final exams in SS 3.
            </p>

            {/* Head of School */}
            <div className="mt-8 flex items-center gap-4">
              {/* Replace this circle with an <img> of the Head of School when you have one */}
              <span
                className="size-14 flex-none rounded-full bg-soft"
                aria-hidden="true"
              />
              <div>
                <b className="block font-semibold text-ml-blue">
                  [Head of School name]
                </b>
                <span className="text-sm text-muted">Head of School</span>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Bottom: facts in a row ---------- */}
        <ul className="mt-14 grid gap-8 border-t border-hair pt-10 md:mt-20 md:grid-cols-3 md:gap-0">
          {facts.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex gap-5 md:border-l md:border-hair md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            >
              <span className="grid size-12 flex-none place-items-center rounded-md bg-ml-blue text-ml-yellow">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <b className="block text-[17px] font-semibold text-ml-blue">
                  {title}
                </b>
                <span className="text-[15px] font-light text-muted">
                  {text}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}