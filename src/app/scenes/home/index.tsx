import React from "react";
import { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="bg-background">
      <motion.div
        className="relative isolate px-6 pt-14 lg:px-8"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 md:-top-80"
          aria-hidden="true"
        ></div>
        <motion.div
          className="mx-auto py-32 sm:py-56 lg:py-56"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Looking for jobs available.
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Contact Me <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Front End Typescript Developer
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 lg:px-32">
              Desenvolvedor Front-end com experiência em React.js, Next.js,
              Redux, JavaScript, TypeScript, Styled Components, Material UI e
              consumo de APIs REST. Apaixonado pelo desenvolvimento de
              componentes reutilizáveis. Também possui experiência em projetos
              gerenciados por Metodologias Ágeis. Cursando em Ciencia da
              Computação.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Download CV
              </a>
              <a
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => setSelectedPage(SelectedPage.Features)}
                href={`#${SelectedPage.Features}`}
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-20 text-3xl flex justify-start gap-4 py-3 lg:mx-8">
            <a href="https://github.com/luiznwz" target="_blank">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/luizrenan/" target="_blank">
              <AiFillLinkedin />
            </a>
          </div>
        </motion.div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        {/** LINKS REDE */}
      </motion.div>
    </section>
  );
};

export default Home;
