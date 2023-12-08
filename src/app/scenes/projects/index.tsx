import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section className="py-36 px-6">
      <motion.div className="mx-auto">
        <div className="text-center ">
          <h1 className=" mt-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Projects
          </h1>
          <p className="mt-6 text-lg mb-32 leading-8 text-gray-600 lg:px-32">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            nesciunt similique inventore alias corrupti sunt blanditiis, soluta
            laborum. Ut cum dolorum corporis reiciendis? Laboriosam ratione odit
            quisquam eius? Laudantium, dicta!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 px-2 mt-16 gap-4">
            <div className="bg-gray-500">
              <img src="gym.png" alt="" />
            </div>
            <div className="px-8">
              <span className="flex justify-end mb-6 text-md font-semibold  text-gray-600">
                Gym app
              </span>
              <h1 className="text-xl mb-6 font-bold tracking-tight text-gray-900 sm:text-2xl">
                EVOGYM
              </h1>
              <p className="mt-6 text-md text-gray-600">
                A página principal apresenta uma visão geral da academia,
                destacando os serviços oferecidos, depoimentos de clientes e
                informações de contato. Além disso, foi implementado um
                formulário de inscrição intuitivo, aproveitando as
                funcionalidades do React Hooks Form para gerenciar o estado e as
                validações de forma eficaz.
              </p>
              <div className="flex mt-8">
                <img src="next.js.png" className="h-8" />
                <span className="mt-1">Next.js</span>

                <img src="next.js.png" className="h-8" />
                <span className="mt-1">Next.js</span>
              </div>
              <div className="flex mt-8 gap-4">
                <a
                  href="https://gym-typescript-mu.vercel.app/"
                  target="_blank"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Live preview
                </a>
                <a
                  className="rounded-md bg-background px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-md hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
                  href="https://github.com/luiznwz/gym-typescript"
                  target="_blank"
                >
                  Get this code <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="">
              <span className="flex justify-start mb-6 text-md font-semibold mt-20 text-gray-600 ">
                News app
              </span>
              <h1 className="text-xl mb-6 font-bold tracking-tight text-gray-900 sm:text-2xl">
                WEBPAGE
              </h1>
              <p className="mt-6 text-md text-gray-600">
                A página de notícias é uma plataforma web dinâmica e responsiva,
                construída com JavaScript para garantir uma experiência
                interativa aos usuários com Secao de Novidades e Navegacao
                Intuitiva . O layout moderno e estilizado foi criado utilizando
                SCSS, proporcionando uma aparência elegante e agradável.
              </p>
              <div className="flex mt-8">
                <img src="next.js.png" className="h-8" />

                <img src="next.js.png" className="h-8" />
              </div>
              <div className="flex mt-8 gap-4">
                <a
                  href="https://webpage-luiznwz.vercel.app/"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Live preview
                </a>
                <a
                  href="https://github.com/luiznwz/webpage"
                  className="rounded-md bg-background px-3.5 py-2.5 text-sm font-semibold text-gray-500 drop-shadow-md hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
                >
                  Get this code <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-20 bg-gray-500 ">
              <img src="webpage.png" alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
