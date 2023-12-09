import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import ArrowUpRightIcon from "@heroicons/react/24/solid";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Features({ setSelectedPage }: Props) {
  return (
    <motion.div
      id="features"
      className="mx-auto px-6 py-22 2xl:py-33"
      onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
    >
      <section className="mb-32 text-center md:text-left px-6">
        <motion.div
          className="grid gap-6 grid-cols-1 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl  dark:text-background">
              Especializações <br />
              <u className="">developer and design</u>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 mb-6 dark:text-secondary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              quas?
            </p>

            <a
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-background"
              onClick={() => setSelectedPage(SelectedPage.Features)}
              href={`#${SelectedPage.Features}`}
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mb-6 md:mb-0 ">
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-lg hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background dark:text-background dark:bg-neutral-900"
              >
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 flex-none stroke-current text-slate-400"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 4.15h22.5l-2 20.5-9.25 4-9.25-4-2-20.5Z"></path>
                  <path d="M20.5 9.15H12v5.5h8.5v6l-4.25 2-4.25-2v-2.5"></path>
                </svg>
                <span className="ml-2.5">HTML</span>
              </a>

              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-lg hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background  dark:text-background dark:bg-neutral-900"
              >
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 flex-none stroke-current text-slate-400"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <defs>
                    <linearGradient
                      id="next-icon-gradient-a"
                      x1="15.125"
                      y1="18.25"
                      x2="24.25"
                      y2="27.375"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".24" stop-color="currentColor"></stop>
                      <stop
                        offset="1"
                        stop-color="currentColor"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      id="next-icon-gradient-b"
                      x1="20.5"
                      y1="11.25"
                      x2="20.5"
                      y2="18.25"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="currentColor"></stop>
                      <stop
                        offset="1"
                        stop-color="currentColor"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path d="M16.25 28.5c6.765 0 12.25-5.485 12.25-12.25S23.015 4 16.25 4 4 9.485 4 16.25 9.485 28.5 16.25 28.5Z"></path>
                  <path
                    d="M12 21.5V12l12.25 14.25"
                    stroke="url(#next-icon-gradient-a)"
                  ></path>
                  <path
                    d="M21.25 12a.75.75 0 1 0-1.5 0v8.17l1.5 1.64V12Z"
                    fill="url(#next-icon-gradient-b)"
                    stroke-width="0"
                  ></path>
                </svg>
                <span className="ml-2.5">Next.js</span>
              </a>

              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-lg hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background  dark:text-background dark:bg-neutral-900"
              >
                <img
                  src="icons8-tailwindcss.png"
                  className="px-2 h-8 dark:brightness-150"
                />
                Tailwind CSS
              </a>

              <a
                href="#"
                target="_blank"
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-lg hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background  dark:text-background dark:bg-neutral-900"
              >
                <img
                  src="javascript.png"
                  className="px-2 h-10 dark:brightness-150"
                />
                Javascript
              </a>
              <a
                href="https://www.figma.com/login"
                target="_blank"
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-lg hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background  dark:text-background dark:bg-neutral-900"
              >
                <img
                  src="figma.png"
                  className="px-2 h-10 dark:brightness-150"
                />
                Figma
              </a>

              <a
                href="https://nodejs.org/en"
                target="_blank"
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-lg hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background  dark:text-background dark:bg-neutral-900"
              >
                <img src="node.png" className="px-2 h-8 dark:brightness-150" />
                Node.js
              </a>
              <a
                href="https://pt-br.react.dev/"
                target="_blank"
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-lg hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background  dark:text-background dark:bg-neutral-900"
              >
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 flex-none stroke-current text-slate-400"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <ellipse cx="16" cy="16" rx="13" ry="5"></ellipse>
                  <ellipse
                    cx="16"
                    cy="16"
                    rx="13"
                    ry="5"
                    transform="rotate(60 16 16)"
                  ></ellipse>
                  <ellipse
                    rx="13"
                    ry="5"
                    transform="matrix(-.5 .86603 .86603 .5 16 16)"
                  ></ellipse>
                  <circle cx="16" cy="16" r="2"></circle>
                </svg>
                <span className="ml-2.5">React</span>
              </a>
              <a
                href="https://sass-lang.com/"
                target="_blank"
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-md hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background  dark:text-background dark:bg-neutral-900"
              >
                <img
                  src="icons8-sass-avatar-48.png"
                  className="px-2 h-10 dark:brightness-150"
                />
                Sass
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
export default Features;
