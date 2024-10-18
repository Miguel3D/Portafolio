import IconVue from "../../assets/img/iconVue.webp";
import IconNuxt from "../../assets/img/iconNuxt.webp";
import IconReact from "../../assets/img/IconReact.webp";
import IconHTML from "../../assets/img/IconHTML.webp";
import IconCSS from "../../assets/img/IconCSS.webp";
import IconJS from "../../assets/img/IconJS.webp";
import IconTs from "../../assets/img/IconTs.png";
import IconTailwind from "../../assets/img/icontailwind.png";
import IconPostman from "../../assets/img/IconPostman.png";
import IconFigma from "../../assets/img/iconFigma.png";
import IconGit from "../../assets/img/IconGit.png";
import IconVercel from "../../assets/img/iconVercel.png";
import IconCloudinary from "../../assets/img/IconCloudinary.png";
import IconNotion from "../../assets/img/IconoNotion.webp";
import IconSlack from "../../assets/img/IconoSlack.webp";

export default function Content03() {
  const data = [
    {
      img: IconVue,
      title: "Vue.js",
      tag: "🎨 Front end",
      experience: "4",
      colorBg: "bg-pink-400/10",
      colorText: "text-pink-400",
      colorBorder: "ring-pink-400/20",
    },
    {
      img: IconNuxt,
      title: "Nuxt.js",
      tag: "🎨 Front end",
      experience: "4",
      colorBg: "bg-pink-400/10",
      colorText: "text-pink-400",
      colorBorder: "ring-pink-400/20",
    },
    {
      img: IconReact,
      title: "React",
      tag: "🎨 Front end",
      experience: "3",
      colorBg: "bg-pink-400/10",
      colorText: "text-pink-400",
      colorBorder: "ring-pink-400/20",
    },
    {
      img: IconHTML,
      title: "HTML",
      tag: "🎨 Front end",
      experience: "4",
      colorBg: "bg-pink-400/10",
      colorText: "text-pink-400",
      colorBorder: "ring-pink-400/20",
    },
    {
      img: IconCSS,
      title: "CSS",
      tag: "🎨 Front end",
      experience: "4",
      colorBg: "bg-pink-400/10",
      colorText: "text-pink-400",
      colorBorder: "ring-pink-400/20",
    },
    {
      img: IconJS,
      title: "Javascript",
      tag: "🎨 Front end",
      experience: "4",
      colorBg: "bg-pink-400/10",
      colorText: "text-pink-400",
      colorBorder: "ring-pink-400/20",
    },
    {
      img: IconTs,
      title: "Typescript",
      tag: "🎨 Front end",
      experience: "2",
      colorBg: "bg-pink-400/10",
      colorText: "text-pink-400",
      colorBorder: "ring-pink-400/20",
    },
    {
      img: IconTailwind,
      title: "Tailwind",
      tag: "🎨 Front end",
      experience: "5",
      colorBg: "bg-pink-400/10",
      colorText: "text-pink-400",
      colorBorder: "ring-pink-400/20",
    },
    {
      img: IconFigma,
      title: "Figma",
      tag: "🎨 Design",
      experience: "3",
      colorBg: "bg-yellow-400/10",
      colorText: "text-yellow-400",
      colorBorder: "ring-yellow-400/20",
    },
    {
      img: IconPostman,
      title: "Postman",
      tag: "🛠️ Testing",
      experience: "4",
      colorBg: "bg-gray-400/10",
      colorText: "text-gray-400",
      colorBorder: "ring-gray-400/20",
    },
    {
      img: IconGit,
      title: "Git",
      tag: "🛠️ Version Control",
      experience: "3",
      colorBg: "bg-blue-400/10",
      colorText: "text-blue-400",
      colorBorder: "ring-blue-400/20",
    },
    {
      img: IconVercel,
      title: "Vercel",
      tag: "☁️ Deployment",
      experience: "4",
      colorBg: "bg-red-400/10",
      colorText: "text-red-400",
      colorBorder: "ring-red-400/20",
    },
    {
      img: IconCloudinary,
      title: "Cloudinary",
      tag: "☁️ Media Management",
      experience: "2",
      colorBg: "bg-green-400/10",
      colorText: "text-green-400",
      colorBorder: "ring-green-400/20",
    },
    {
      img: IconNotion,
      title: "Notion",
      tag: "☁️ Productivity",
      experience: "4",
      colorBg: "bg-orange-400/10",
      colorText: "text-orange-400",
      colorBorder: "ring-orange-400/20",
    },
    {
      img: IconSlack,
      title: "Slack",
      tag: "☁️ Communication",
      experience: "5",
      colorBg: "bg-purple-400/10",
      colorText: "text-purple-400",
      colorBorder: "ring-purple-400/20",
    },
  ];

  return (
    <section className="mx-5 space-y-3 py-4">
      <div className="grid w-full grid-cols-2 gap-11 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((elemento, i) => {
          const experience = parseFloat(elemento.experience);
          const fullStars = Math.floor(experience);
          const hasHalfStar = experience % 1 !== 0;

          return (
            <div
              className="flex h-full w-full flex-col items-center justify-between space-y-2.5 px-2"
              key={i}
            >
              <img
                className="h-full max-h-[70px] w-full max-w-[70px] rounded-full bg-white object-contain object-center outline outline-offset-4 outline-[#ffffff]"
                src={elemento.img}
                width={40}
                height={40}
                alt={`Icono de ${elemento.title}`}
              />

              <h3 className="text-center text-base font-semibold text-white">
                {elemento.title}
              </h3>
              <span
                className={`inline-flex items-center whitespace-nowrap rounded-lg px-2 py-1 text-xs font-medium ring-1 ring-inset ${elemento.colorBg} ${elemento.colorText} ${elemento.colorBorder}`}
              >
                {elemento.tag}
              </span>
              <div className="rating rating-sm">
                {[...Array(5)].map((_, starIndex) => {
                  if (starIndex < fullStars) {
                    return (
                      <input
                        key={starIndex}
                        type="radio"
                        name={`rating-${i}`}
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                    );
                  }
                  if (starIndex === fullStars && hasHalfStar) {
                    return (
                      <input
                        key={starIndex}
                        type="radio"
                        name={`rating-${i}`}
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                    );
                  }
                  return (
                    <input
                      key={starIndex}
                      type="radio"
                      name={`rating-${i}`}
                      className="mask mask-star-2 bg-orange-400"
                    />
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
