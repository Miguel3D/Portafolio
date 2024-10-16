export default function Content02() {
  const data = [
    {
      img: "",
      name: "landing page",
      description:
        "Desarrollé la landing page principal de la plataforma, enfocada en brindar una experiencia clara y atractiva para los nuevos usuarios y clientes potenciales.",
      url: "https://www.komercia.co/",
      tag: ["Vue.js", "Javascript", "Vuex", "Router", "Tailwind"],
    },
    {
      img: "",
      name: "Link Komercia",
      description:
        "Creé una herramienta similar a Linktree para los clientes de Komercia, que les permite centralizar sus enlaces importantes en una página única y personalizable. Este proyecto se desarrolló principalmente con Vue.js y JavaScript.",
      url: "",
      tag: ["Vue.js", "Javascript", "Vuex", "Router", "Tailwind"],
    },
    {
      img: "",
      name: "Helpdesk",
      description:
        "Desarrollé el sistema de soporte técnico, donde los clientes pueden acceder a artículos y guías que resuelven dudas y problemas comunes. Este proyecto fue una pieza clave para mejorar la experiencia de usuario y reducir la carga en el equipo de soporte.",
      url: "",
      tag: ["Vue.js", "Javascript", "Vuex", "Router", "Tailwind"],
    },
    {
      img: "",
      name: "Checkout de Tiendas",
      description:
        "Implementé el flujo de checkout en las tiendas en línea de nuestros clientes, permitiendo a los usuarios finalizar sus compras de forma eficiente y segura. Mi rol incluyó la integración con plataformas de pago y la optimización de la interfaz de usuario para mejorar la conversión.",
      url: "",
      tag: ["Vue.js", "Javascript", "Vuex", "Router", "Tailwind"],
    },
    {
      img: "",
      name: "Panel de Control de Tiendas",
      description:
        "Fui responsable del desarrollo del panel de administración, donde los propietarios de las tiendas pueden gestionar todos los aspectos relacionados con sus tiendas (productos, pedidos, configuración, etc.). Este panel fue implementado con Vue.js y JavaScript para asegurar un código más robusto y mantenible.",
      url: "",
      tag: ["Vue.js", "Javascript", "Vuex", "Router", "Tailwind"],
    },
    {
      img: "",
      name: "Login y Administración de Tiendas",
      description:
        "Implementé el sistema de login para el acceso seguro al panel de administración. También trabajé en una herramienta interna para Komercia que permitía al equipo de soporte y administración gestionar las tiendas desde el backend, utilizando Vue.js con JavaScript.",
      url: "",
      tag: ["Vue.js", "Javascript", "Vuex", "Router", "Tailwind"],
    },
    {
      img: "",
      name: "Visualizador de Tiendas Online",
      description:
        "Desarrollé un visualizador de tiendas online para que los clientes pudieran ver una vista previa de sus tiendas en función de la información y configuración que suben al panel de administración. Utilicé Nuxt.js con JavaScript para optimizar el rendimiento y SEO de las tiendas.",
      url: "",
      tag: ["Nuxt.js", "Javascript", "Vuex", "Router", "Tailwind"],
    },
    {
      img: "",
      name: "Super admin",
      description:
        "Fui responsable del desarrollo del supper, donde soporte gestionaba las tiendas (información, membresía, referidos, cupones, etc.). Este super fue implementado con Vue.js y TypeScript para asegurar un código más robusto y mantenible.",
      url: "",
      tag: ["Vue.js", "Typescript", "Vuex", "Router", "Tailwind"],
    },
  ];

  return (
    <section className="mx-1 space-y-3 py-4">
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
                      className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20"
                      key={j}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
