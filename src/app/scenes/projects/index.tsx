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

function Projects({ setSelectedPage }: Props) {
  return (
    <div className="mx-auto px-8 py-22">
      <section className="mb-32 text-center md:text-left px-6">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
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
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mb-6 md:mb-0 ">
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
              <div className="flex bg-secondary  items-center py-5 border-2  rounded-lg">
                <img
                  src="Next.js.png"
                  className="px-2 h-8 dark:brightness-150"
                />
                <h4 className=" text-sm leading-8 text-gray-600">Next.js</h4>
              </div>

              <div className="flex bg-secondary items-center py-3 border-2  rounded-lg">
                <img
                  src="icons8-typescript-48.png"
                  className="px-2 h-10 dark:brightness-150"
                />
                <h4 className=" text-sm leading-8 text-gray-600">Typescript</h4>
              </div>

              <div className="flex bg-secondary items-center py-3 border-2  rounded-lg">
                <img
                  src="icons8-tailwindcss.png"
                  className="px-2 h-8 dark:brightness-150"
                />
                <h4 className=" text-sm leading-8 text-gray-600">
                  Tailwind CSS
                </h4>
              </div>

              <div className="flex bg-secondary items-center py-3 border-2  rounded-lg">
                <img
                  src="javascript.png"
                  className="px-2 h-10 dark:brightness-150"
                />
                <h4 className=" text-sm leading-8 text-gray-600">Javascript</h4>
              </div>
              <div className="flex bg-secondary items-center py-3 border-2  rounded-lg">
                <img
                  src="figma.png"
                  className="px-2 h-10 dark:brightness-150"
                />
                <h4 className=" text-sm leading-8 text-gray-600">Figma</h4>
              </div>

              <div className="flex bg-secondary items-center py-3 border-2 rounded-lg">
                <img src="node.png" className="px-2 h-8 dark:brightness-150" />
                <h4 className=" text-sm leading-8 text-gray-600">Node.js</h4>
              </div>
              <div className="flex bg-secondary items-center py-5 border-2 rounded-lg">
                <img
                  src="react-08.png"
                  className="px-2 h-8 dark:brightness-150"
                />
                <h4 className=" text-sm leading-8 text-gray-600">React</h4>
              </div>
              <div className="flex bg-secondary items-center py-3 border-2 rounded-lg">
                <img
                  src="icons8-sass-avatar-48.png"
                  className="px-2 h-10 dark:brightness-150"
                />
                <h4 className=" text-sm leading-8 text-gray-600">Sass</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Projects;
