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
      className="mx-auto px-6 py-22"
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
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl ">
              Especializações <br />
              <u className="">developer and design</u>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 mb-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe,
              quas?
            </p>

            <a
              className="text-sm font-semibold leading-6 text-gray-900"
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
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-md hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
              >
                <img
                  src="Next.js.png"
                  className="px-2 h-8 dark:brightness-150"
                />
                Next.js
              </a>

              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-md hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
              >
                <img
                  src="icons8-typescript-48.png"
                  className="px-2 h-10 dark:brightness-150"
                />
                Typescript
              </a>

              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-md hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
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
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-md hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
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
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-md hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
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
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-md hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
              >
                <img src="node.png" className="px-2 h-8 dark:brightness-150" />
                Node.js
              </a>
              <a
                href="https://pt-br.react.dev/"
                target="_blank"
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-md hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
              >
                <img
                  src="react-08.png"
                  className="px-2 h-8 dark:brightness-150"
                />
                React
              </a>
              <a
                href="https://sass-lang.com/"
                target="_blank"
                className="flex bg-background  items-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-md hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
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
