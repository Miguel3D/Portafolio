import imagen from "../assets/img/gifBanner.webp";
import imagenPerfile from "../assets/img/perfil.jpg";

export default function Banner() {
  return (
    <>
      <div>
        <div className="relative mb-24">
          <img
            className="max-h-[250px] rounded-xl object-cover"
            src={imagen}
            width={900}
            height={250}
            alt="ImgBanner"
          />
          <img
            className="absolute -bottom-16 left-10 max-h-[150px] max-w-[150px] rounded-full object-cover outline outline-offset-2 outline-[#ffffff]"
            src={imagenPerfile}
            width={150}
            height={150}
            alt="imagenPerfile"
          />
        </div>
        <div className="space-y-3 px-10">
          <h2 className="mb-5 text-3xl font-bold text-white">
            Miguel Angel Moreno Rivas
          </h2>
          <p className="text-base font-medium text-white">
            Ingeniero de sistemas - Frontend Developer 💻
          </p>
          <p className="text-base font-normal leading-7 text-white">
            Durante los últimos 5 años, he tenido el privilegio de trabajar como
            desarrollador en una empresa de comercio electrónico, donde he sido
            responsable de crear, diseñar, liderar proyectos y brindar soporte a
            todo el entorno digital. Mi día a día implica utilizar tecnologías
            como Vue.js, Nuxt.js, React, así como los lenguajes de programación
            JavaScript y TypeScript. Esta experiencia me ha permitido crecer
            profesionalmente, liderar equipos y enfrentar desafíos emocionantes
            en el mundo del desarrollo web y de aplicaciones.
          </p>
        </div>
        <div className="flex flex-row items-start space-x-5 px-10 py-5">
          <div className="flex flex-row space-x-1 text-[#868e96]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
            >
              <mask id="lineMdBriefcaseCheckFilled0">
                <g
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path
                    fill="#fff"
                    fillOpacity={0}
                    strokeDasharray={64}
                    strokeDashoffset={64}
                    d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="0.9s"
                      dur="0.5s"
                      values="0;1"
                    ></animate>
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="64;0"
                    ></animate>
                  </path>
                  <path
                    strokeDasharray={16}
                    strokeDashoffset={16}
                    d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.7s"
                      dur="0.2s"
                      values="16;0"
                    ></animate>
                  </path>
                  <path
                    fill="#000"
                    fillOpacity={0}
                    stroke="none"
                    d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"
                  >
                    <set
                      fill="freeze"
                      attributeName="fill-opacity"
                      begin="1.4s"
                      to={1}
                    ></set>
                  </path>
                  <path
                    strokeDasharray={10}
                    strokeDashoffset={10}
                    d="M16 19l1.75 1.75l3.75 -3.75"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="1.4s"
                      dur="0.2s"
                      values="10;0"
                    ></animate>
                  </path>
                </g>
              </mask>
              <rect
                width={24}
                height={24}
                fill="currentColor"
                mask="url(#lineMdBriefcaseCheckFilled0)"
              ></rect>
            </svg>
            <p className="text-base">Disponible</p>
          </div>
          <a
            href="../../public/CV_Miguel_Angel_Moreno_FrontEnd_2024.pdf"
            download="CV_Miguel_Angel_Moreno_FrontEnd_2024.pdf"
            className="flex flex-row space-x-1 text-[#868e96] transition delay-100 ease-in-out hover:text-[#910A43]"
            title="Descargar CV Miguel Moreno"
            rel="noreferrer noopener"
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
            <p className="text-base">Descargar CV</p>
          </a>
          <div className="flex flex-row space-x-1 text-[#868e96]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
            >
              <circle
                cx={12}
                cy={9}
                r={2.5}
                fill="currentColor"
                fillOpacity={0}
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.5s"
                  dur="0.15s"
                  values="0;1"
                ></animate>
              </circle>
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z"
              >
                <animate
                  fill="freeze"
                  attributeName="d"
                  dur="0.4s"
                  keyTimes="0;0.7;1"
                  values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"
                ></animate>
                <animateTransform
                  attributeName="transform"
                  dur="3s"
                  keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"
                ></animateTransform>
              </path>
            </svg>
            <p className="text-base"> Bogotá, Colombia</p>
          </div>
        </div>
      </div>
    </>
  );
}
