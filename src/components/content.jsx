import Content01 from "./_items/content01";
import Content02 from "./_items/content02";
import Content03 from "./_items/content03";

export default function Content() {
  return (
    <main>
      <div className="w-full px-5 md:px-10">
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Información"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content rounded-box border-base-300 bg-base-100 py-3 md:px-6 md:py-6"
          >
            <Content01 />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Proyectos"
          />
          <div
            role="tabpanel"
            className="tab-content rounded-box border-base-300 bg-base-100 py-3 md:px-6 md:py-6"
          >
            <Content02 />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Habilidades"
          />
          <div
            role="tabpanel"
            className="tab-content rounded-box border-base-300 bg-base-100 py-3 md:px-6 md:py-6"
          >
            <Content03 />
          </div>
        </div>
      </div>
    </main>
  );
}
