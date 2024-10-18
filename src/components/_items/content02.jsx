import { useState } from "react";

import P01Imagen1 from "../../assets/img/proyectos/img1.webp";
import P02Imagen2 from "../../assets/img/proyectos/img2.webp";
import P02Imagen3 from "../../assets/img/proyectos/img3.webp";
import P01Imagen4 from "../../assets/img/proyectos/img4.webp";
import P01Imagen5 from "../../assets/img/proyectos/img5.webp";
import P01Imagen6 from "../../assets/img/proyectos/img6.webp";
import P01Imagen7 from "../../assets/img/proyectos/img7.webp";
import P01Imagen8 from "../../assets/img/proyectos/img8.webp";
import P01Imagen9 from "../../assets/img/proyectos/img9.webp";
import P01Imagen10 from "../../assets/img/proyectos/img10.webp";
import P01Imagen11 from "../../assets/img/proyectos/img11.webp";
import P01Imagen12 from "../../assets/img/proyectos/img12.webp";
import P01Imagen13 from "../../assets/img/proyectos/img13.webp";
import P01Imagen14 from "../../assets/img/proyectos/img14.webp";
import P01Imagen15 from "../../assets/img/proyectos/img15.webp";
import P01Imagen16 from "../../assets/img/proyectos/img16.webp";
import P01Imagen17 from "../../assets/img/proyectos/img17.webp";
import P01Imagen18 from "../../assets/img/proyectos/img18.webp";

export default function Content02() {
  const data = [
    {
      id: "landing_page",
      img: [P01Imagen1, P02Imagen2, P02Imagen3],
      name: "Landing page",
      description:
        "Desarrollé la landing page principal de la plataforma, enfocada en brindar una experiencia clara y atractiva para los nuevos usuarios y clientes potenciales.",
      url: "https://www.komercia.co/",
      tag: ["Vue.js", "Javascript", "Vuex", "Router", "Tailwind"],
    },
    {
      id: "link_komercia",
      img: [P01Imagen4],
      name: "Link Komercia",
      description:
        "Creé una herramienta similar a Linktree para los clientes de Komercia, que les permite centralizar sus enlaces importantes en una página única y personalizable. Este proyecto se desarrolló principalmente con Vue.js y JavaScript.",
      url: "https://www.linki.ink/komercia",
      tag: ["Vue.js", "Javascript", "Vuex", "Router", "Tailwind"],
    },
    {
      id: "Helpdesk",
      img: [P01Imagen5, P01Imagen6],
      name: "Helpdesk",
      description:
        "Desarrollé el sistema de soporte técnico, donde los clientes pueden acceder a artículos y guías que resuelven dudas y problemas comunes. Este proyecto fue una pieza clave para mejorar la experiencia de usuario y reducir la carga en el equipo de soporte.",
      url: "https://ayuda.komercia.co/komercia",
      tag: ["Vue.js", "Javascript", "Vuex", "Router", "Tailwind"],
    },
    {
      id: "checkout_tiendas",
      img: [P01Imagen7, P01Imagen8, P01Imagen9],
      name: "Checkout de Tiendas",
      description:
        "Implementé el flujo de checkout en las tiendas en línea de nuestros clientes, permitiendo a los usuarios finalizar sus compras de forma eficiente y segura. Mi rol incluyó la integración con plataformas de pago y la optimización de la interfaz de usuario para mejorar la conversión.",
      url: "",
      tag: ["Vue.js", "Javascript", "Vuex", "Router", "Tailwind"],
    },
    {
      id: "panel",
      img: [P01Imagen10, P01Imagen11],
      name: "Panel de Control de Tiendas",
      description:
        "Fui responsable del desarrollo del panel de administración, donde los propietarios de las tiendas pueden gestionar todos los aspectos relacionados con sus tiendas (productos, pedidos, configuración, etc.). Este panel fue implementado con Vue.js y JavaScript para asegurar un código más robusto y mantenible.",
      url: "",
      tag: ["Vue.js", "Javascript", "Vuex", "Router", "Tailwind"],
    },
    {
      id: "login",
      img: [P01Imagen12, P01Imagen13, P01Imagen14],
      name: "Login y Administración de Tiendas",
      description:
        "Implementé el sistema de login para el acceso seguro al panel de administración. También trabajé en una herramienta interna para Komercia que permitía al equipo de soporte y administración gestionar las tiendas desde el backend, utilizando Vue.js con JavaScript.",
      url: "https://login.komercia.co/registrarse?l=es&c=co",
      tag: ["Vue.js", "Javascript", "Vuex", "Router", "Tailwind"],
    },
    {
      id: "Visualizador",
      img: [P01Imagen15, P01Imagen16, P01Imagen17],
      name: "Visualizador de Tiendas Online",
      description:
        "Desarrollé un visualizador de tiendas online para que los clientes pudieran ver una vista previa de sus tiendas en función de la información y configuración que suben al panel de administración. Utilicé Nuxt.js con JavaScript para optimizar el rendimiento y SEO de las tiendas.",
      url: "https://www.komercia.co/tiendas?c=co",
      tag: ["Nuxt.js", "Javascript", "Vuex", "Router", "Tailwind"],
    },
    {
      id: "super",
      img: [P01Imagen18],
      name: "Super admin",
      description:
        "Fui responsable del desarrollo del supper, donde soporte gestionaba las tiendas (información, membresía, referidos, cupones, etc.). Este super fue implementado con Vue.js y TypeScript para asegurar un código más robusto y mantenible.",
      url: "",
      tag: ["Vue.js", "Typescript", "Vuex", "Router", "Tailwind"],
    },
  ];

  const [likes, setLikes] = useState(Array(data.length).fill(false));

  const handleClick = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] = !updatedLikes[index];
    setLikes(updatedLikes);
  };

  return (
    <section className="space-y-3 py-4">
      <div className="gap-15 grid w-full grid-cols-1">
        {data.map((elemento, i) => {
          return (
            <div
              className="flex w-full cursor-pointer flex-col items-start space-y-2.5 rounded-lg px-4 py-2 transition delay-75 ease-in-out hover:bg-[#212529]"
              key={i}
            >
              <h3 className="text-base font-semibold text-white">
                {elemento.name}
              </h3>
              <p className="text-sm text-[#868e96]">{elemento.description}</p>
              <div className="flex w-full flex-row items-center space-x-1">
                {elemento.tag.map((tag, j) => {
                  return (
                    <span
                      className="inline-flex items-center rounded-lg bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                      key={j}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              <div className="carousel w-full pt-10 md:pt-5">
                {elemento.img.map((img, index) => {
                  const isFirst = index === 0;
                  const isLast = index === elemento.img.length - 1;

                  return (
                    <div
                      id={`slide_${elemento.id}_${index}`}
                      className="carousel-item relative w-full"
                      key={index}
                    >
                      <img
                        src={img}
                        className="w-full rounded-lg object-contain transition ease-in-out"
                        alt={`Imagen ${index}`}
                      />
                      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a
                          href={
                            isFirst
                              ? undefined
                              : `#slide_${elemento.id}_${index - 1}`
                          }
                          className={`btn btn-circle btn-active ${isFirst ? "btn-disabled" : ""}`}
                          title="Imagen anterior"
                          rel="noreferrer noopener"
                        >
                          ❮
                        </a>
                        <a
                          href={
                            isLast
                              ? undefined
                              : `#slide_${elemento.id}_${index + 1}`
                          }
                          className={`btn btn-circle btn-active ${isLast ? "btn-disabled" : ""}`}
                          title="Imagen siguiente"
                          rel="noreferrer noopener"
                        >
                          ❯
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex w-full items-center justify-end space-x-2 pt-3 md:pt-1">
                {elemento.url !== "" && (
                  <a
                    href={elemento.url}
                    className="text-[#868e96] transition delay-100 ease-in-out hover:text-[#910A43]"
                    title="Ir al proyecto"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeDasharray={28}
                        strokeDashoffset={28}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 6l2 -2c1 -1 3 -1 4 0l1 1c1 1 1 3 0 4l-5 5c-1 1 -3 1 -4 0M11 18l-2 2c-1 1 -3 1 -4 0l-1 -1c-1 -1 -1 -3 0 -4l5 -5c1 -1 3 -1 4 0"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.6s"
                          values="28;0"
                        ></animate>
                      </path>
                    </svg>
                  </a>
                )}
                <svg
                  className={`text-[#868e96] transition-transform duration-200 ease-in-out active:scale-125 ${likes[i] ? "text-red-600" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  onClick={() => handleClick(i)}
                >
                  <path
                    fill="currentColor"
                    fillOpacity={0}
                    d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="0.7s"
                      dur="0.5s"
                      values="0;1"
                    ></animate>
                  </path>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray={32}
                    strokeDashoffset={32}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.7s"
                      values="32;0"
                    ></animate>
                  </path>
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
