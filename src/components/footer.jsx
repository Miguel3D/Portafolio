export default function Footer() {
  return (
    <footer className="w-full px-5 pb-5 md:px-10">
      <div className="flex w-full flex-col items-center justify-center rounded-xl bg-[#1D232A] py-10 text-base">
        <nav className="mb-5">
          <div className="grid grid-flow-col items-center gap-4">
            <a
              href="https://www.linkedin.com/in/miguel-angel-moreno-rivas-8664731a3/"
              title="Ir al perfil de LinkedIn"
              rel="noreferrer noopener"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={25}
                height={25}
                className="t relative -top-[3px] text-white transition delay-100 ease-in-out hover:text-[#910A43]"
              >
                <circle cx={4} cy={4} r={2} fill="currentColor" fillOpacity={0}>
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.15s"
                    values="0;1"
                  ></animate>
                </circle>
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                >
                  <path strokeDasharray={12} strokeDashoffset={12} d="M4 10v10">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.15s"
                      dur="0.2s"
                      values="12;0"
                    ></animate>
                  </path>
                  <path
                    strokeDasharray={12}
                    strokeDashoffset={12}
                    d="M10 10v10"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.45s"
                      dur="0.2s"
                      values="12;0"
                    ></animate>
                  </path>
                  <path
                    strokeDasharray={24}
                    strokeDashoffset={24}
                    d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.65s"
                      dur="0.2s"
                      values="24;0"
                    ></animate>
                  </path>
                </g>
              </svg>
            </a>

            <a
              href="mailto:miguel.amorenori@gmail.com"
              title="Escribir al correo"
              rel="noreferrer noopener"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={25}
                height={25}
                className="text-white transition delay-100 ease-in-out hover:text-[#910A43]"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path
                    strokeDasharray={64}
                    strokeDashoffset={64}
                    d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="64;0"
                    ></animate>
                  </path>
                  <path
                    strokeDasharray={24}
                    strokeDashoffset={24}
                    d="M3 6.5l9 5.5l9 -5.5"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.6s"
                      dur="0.2s"
                      values="24;0"
                    ></animate>
                  </path>
                </g>
              </svg>
            </a>

            <a
              href="https://github.com/Miguel3D"
              title="Ir al perfil de GitHub"
              rel="noreferrer noopener"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={26}
                height={26}
                className="text-white transition delay-100 ease-in-out hover:text-[#910A43]"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path
                    strokeDasharray={32}
                    strokeDashoffset={32}
                    d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.7s"
                      values="32;0"
                    ></animate>
                  </path>
                  <path
                    strokeDasharray={10}
                    strokeDashoffset={10}
                    d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.8s"
                      dur="0.2s"
                      values="10;0"
                    ></animate>
                  </path>
                </g>
              </svg>
            </a>

            {/* <div className="lg:tooltip" data-tip="Escribir a WhatsApp "> */}
            <a
              href="https://wa.me/573118029271"
              title="Escribir a WhatsApp"
              rel="noreferrer noopener"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={26}
                height={26}
                className="text-white transition delay-100 ease-in-out hover:text-[#910A43]"
              >
                <path
                  fill="currentColor"
                  fillOpacity={0}
                  d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="0.6s"
                    dur="0.2s"
                    values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z"
                  ></animate>
                  <set
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s"
                    to={1}
                  ></set>
                </path>
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                >
                  <path
                    strokeDasharray={56}
                    strokeDashoffset={56}
                    d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.6s"
                      values="56;0"
                    ></animate>
                  </path>
                  <path strokeDasharray={2} strokeDashoffset={2} d="M8 11h0.01">
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.9s"
                      dur="0.2s"
                      values="2;0"
                    ></animate>
                  </path>
                  <path
                    strokeDasharray={2}
                    strokeDashoffset={2}
                    d="M12 11h0.01"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="1.2s"
                      dur="0.2s"
                      values="2;0"
                    ></animate>
                  </path>
                  <path
                    strokeDasharray={2}
                    strokeDashoffset={2}
                    d="M16 11h0.01"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="1.5s"
                      dur="0.2s"
                      values="2;0"
                    ></animate>
                  </path>
                </g>
              </svg>
            </a>
            {/* </div> */}
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()} - Miguel Moreno</p>
        </aside>
      </div>
    </footer>
  );
}
