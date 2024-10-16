// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import { useState } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import Content from "./components/content";

import Footer from "./components/footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex h-full w-full items-start justify-center overflow-y-auto bg-[#16191D]">
      <div className="flex h-screen w-full max-w-[900px] flex-col items-center justify-between space-y-5">
        <div className="flex w-full flex-col items-center justify-start">
          <Header />
          <Banner />
        </div>
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;

// Colores
// letra blanco
// Letra GRIS: #868e96
// fondo: #16191D
// fondo hover: #212529
// tags: #495057
