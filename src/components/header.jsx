export default function Header() {
  return (
    <header className="flex w-full flex-row justify-end px-2 py-5">
      <div className="flex items-center space-x-2">
        <label className="swap swap-flip text-xl">
          <input type="checkbox" />

          {/* <div className="swap-on"> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            aria-hidden="true"
            viewBox="0 0 36 36"
          >
            <path
              fill="#FBD116"
              d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z"
            />
            <path fill="#22408C" d="M0 18h36v7H0z" />
            <path
              fill="#CE2028"
              d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-2H0v2z"
            />
          </svg>
          {/* </div> */}
          {/* <div className="swap-off"> */}
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              aria-hidden="true"
              viewBox="0 0 36 36"
            >
              <path
                fill="#B22334"
                d="M35.445 7C34.752 5.809 33.477 5 32 5H18v2h17.445zM0 25h36v2H0zm18-8h18v2H18zm0-4h18v2H18zM0 21h36v2H0zm4 10h28c1.477 0 2.752-.809 3.445-2H.555c.693 1.191 1.968 2 3.445 2zM18 9h18v2H18z"
              />
              <path
                fill="#EEE"
                d="M.068 27.679c.017.093.036.186.059.277.026.101.058.198.092.296.089.259.197.509.333.743L.555 29h34.89l.002-.004a4.22 4.22 0 0 0 .332-.741 3.75 3.75 0 0 0 .152-.576c.041-.22.069-.446.069-.679H0c0 .233.028.458.068.679zM0 23h36v2H0zm0-4v2h36v-2H18zm18-4h18v2H18zm0-4h18v2H18zM0 9zm.555-2-.003.005L.555 7zM.128 8.044c.025-.102.06-.199.092-.297a3.78 3.78 0 0 0-.092.297zM18 9h18c0-.233-.028-.459-.069-.68a3.606 3.606 0 0 0-.153-.576A4.21 4.21 0 0 0 35.445 7H18v2z"
              />
              <path fill="#3C3B6E" d="M18 5H4a4 4 0 0 0-4 4v10h18V5z" />
              <path
                fill="#FFF"
                d="m2.001 7.726.618.449-.236.725L3 8.452l.618.448-.236-.725L4 7.726h-.764L3 7l-.235.726zm2 2 .618.449-.236.725.617-.448.618.448-.236-.725L6 9.726h-.764L5 9l-.235.726zm4 0 .618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L9 9l-.235.726zm4 0 .618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L13 9l-.235.726zm-8 4 .618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L5 13l-.235.726zm4 0 .618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L9 13l-.235.726zm4 0 .618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L13 13l-.235.726zm-6-6 .618.449-.236.725L7 8.452l.618.448-.236-.725L8 7.726h-.764L7 7l-.235.726zm4 0 .618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L11 7l-.235.726zm4 0 .618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L15 7l-.235.726zm-12 4 .618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L3 11l-.235.726zM6.383 12.9 7 12.452l.618.448-.236-.725.618-.449h-.764L7 11l-.235.726h-.764l.618.449zm3.618-1.174.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L11 11l-.235.726zm4 0 .618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L15 11l-.235.726zm-12 4 .618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L3 15l-.235.726zM6.383 16.9 7 16.452l.618.448-.236-.725.618-.449h-.764L7 15l-.235.726h-.764l.618.449zm3.618-1.174.618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L11 15l-.235.726zm4 0 .618.449-.236.725.617-.448.618.448-.236-.725.618-.449h-.764L15 15l-.235.726z"
              />
            </svg> */}
          {/* </div> */}
        </label>
        <label className="swap swap-rotate">
          <input type="checkbox" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="swap-on h-10 w-10 fill-current text-white transition delay-75 ease-in-out hover:text-[#868e96]"
          >
            <g fill="currentColor" fillOpacity={0}>
              <path d="M15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate
                  id="lineMdMoonRisingFilledLoop0"
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.7s;lineMdMoonRisingFilledLoop0.begin+6s"
                  dur="0.4s"
                  values="0;1"
                ></animate>
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="lineMdMoonRisingFilledLoop0.begin+2.2s"
                  dur="0.4s"
                  values="1;0"
                ></animate>
              </path>
              <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="lineMdMoonRisingFilledLoop0.begin+3s"
                  dur="0.4s"
                  values="0;1"
                ></animate>
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="lineMdMoonRisingFilledLoop0.begin+5.2s"
                  dur="0.4s"
                  values="1;0"
                ></animate>
              </path>
              <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="lineMdMoonRisingFilledLoop0.begin+0.4s"
                  dur="0.4s"
                  values="0;1"
                ></animate>
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="lineMdMoonRisingFilledLoop0.begin+2.8s"
                  dur="0.4s"
                  values="1;0"
                ></animate>
              </path>
              <path d="M20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="lineMdMoonRisingFilledLoop0.begin+3.4s"
                  dur="0.4s"
                  values="0;1"
                ></animate>
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="lineMdMoonRisingFilledLoop0.begin+5.6s"
                  dur="0.4s"
                  values="1;0"
                ></animate>
              </path>
            </g>
            <path
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
              transform="translate(0 22)"
            >
              <animateMotion
                fill="freeze"
                calcMode="linear"
                dur="0.6s"
                path="M0 0v-22"
              ></animateMotion>
            </path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="swap-off h-10 w-10 fill-current text-white transition delay-75 ease-in-out hover:text-[#868e96]"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path
                strokeDasharray={2}
                strokeDashoffset={2}
                d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
              >
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="1.2s"
                  dur="0.2s"
                  values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                ></animate>
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
                d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
              >
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="1.4s"
                  dur="0.2s"
                  values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                ></animate>
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="1.4s"
                  dur="0.2s"
                  values="2;0"
                ></animate>
              </path>
              <animateTransform
                attributeName="transform"
                dur="30s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              ></animateTransform>
            </g>
            <g fill="currentColor">
              <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  dur="0.4s"
                  values="1;0"
                ></animate>
              </path>
              <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.2s"
                  dur="0.4s"
                  values="1;0"
                ></animate>
              </path>
            </g>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
            >
              <set
                fill="freeze"
                attributeName="opacity"
                begin="0.6s"
                to={0}
              ></set>
            </path>
            <mask id="lineMdMoonToSunnyOutlineLoopTransition0">
              <circle cx={12} cy={12} r={12} fill="#fff"></circle>
              <circle cx={12} cy={12} r={8}>
                <animate
                  fill="freeze"
                  attributeName="r"
                  begin="0.6s"
                  dur="0.4s"
                  values="8;4"
                ></animate>
              </circle>
              <circle cx={18} cy={6} r={12} fill="#fff">
                <animate
                  fill="freeze"
                  attributeName="cx"
                  begin="0.6s"
                  dur="0.4s"
                  values="18;22"
                ></animate>
                <animate
                  fill="freeze"
                  attributeName="cy"
                  begin="0.6s"
                  dur="0.4s"
                  values="6;2"
                ></animate>
                <animate
                  fill="freeze"
                  attributeName="r"
                  begin="0.6s"
                  dur="0.4s"
                  values="12;3"
                ></animate>
              </circle>
              <circle cx={18} cy={6} r={10}>
                <animate
                  fill="freeze"
                  attributeName="cx"
                  begin="0.6s"
                  dur="0.4s"
                  values="18;22"
                ></animate>
                <animate
                  fill="freeze"
                  attributeName="cy"
                  begin="0.6s"
                  dur="0.4s"
                  values="6;2"
                ></animate>
                <animate
                  fill="freeze"
                  attributeName="r"
                  begin="0.6s"
                  dur="0.4s"
                  values="10;1"
                ></animate>
              </circle>
            </mask>
            <circle
              cx={12}
              cy={12}
              r={10}
              mask="url(#lineMdMoonToSunnyOutlineLoopTransition0)"
              opacity={0}
              fill="currentColor"
            >
              <animate
                fill="freeze"
                attributeName="r"
                begin="0.6s"
                dur="0.4s"
                values="10;6"
              ></animate>
              <set
                fill="freeze"
                attributeName="opacity"
                begin="0.6s"
                to={1}
              ></set>
            </circle>
          </svg>
        </label>
      </div>
    </header>
  );
}
