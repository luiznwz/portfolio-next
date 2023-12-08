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
        <div className="text-center  ">
          <h1 className=" mt-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Projects
          </h1>
          <p className="mt-6 text-lg mb-32 leading-8 text-gray-600 lg:px-32">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            nesciunt similique inventore alias corrupti sunt blanditiis, soluta
            laborum. Ut cum dolorum corporis reiciendis? Laboriosam ratione odit
            quisquam eius? Laudantium, dicta!
          </p>
          <div className="grid grid-cols-1  lg:grid-cols-2 px-2 mt-16 gap-4">
            <div className="bg-cover bg-fixed">
              <img className="shadow-md" src="gym.png" alt="" />
            </div>
            <div className="px-8">
              <span className="flex justify-end mb-6 mt-5 text-md font-semibold  text-gray-600">
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
              <div className="flex items-center mt-8">
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
                <span className="ml-2.5 text-gray-600 mr-8">React</span>

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
                <span className="ml-2.5 text-gray-600">Next.js</span>
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
                  View on GitHub <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-20 ">
              <img src="webpage.png" alt="" />
            </div>
            <div className="px-8">
              <span className="flex justify-end mb-6 mt-5 text-md font-semibold lg:mt-20 text-gray-600 ">
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
              <div className="flex mt-8 items-center">
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
                <span className="ml-2.5 mr-8 text-gray-600">React</span>

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
                <span className="ml-2.5 text-gray-600">Next.js</span>
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
                  View on GitHub <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
