import { CgReadme } from "react-icons/cg";
import { TbBrandGoogleHome, TbBriefcase } from "react-icons/tb";
import { IContactContent, IPortoContent, ISideBarContent } from "@/lib/types";
import { GiAtomCore } from "react-icons/gi";
import {
  EsgulIcon,
  FmsPage1,
  HrisPage1,
  JfpuPage1,
  MinePersonalImage,
  MoladinIcon,
  MolaPage1,
  SeraIcon,
} from "@/assets/export";
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function App() {
  const listSideBar: ISideBarContent[] = [
    {
      icon: <TbBrandGoogleHome />,
      onClick: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
    {
      icon: <TbBriefcase />,
      onClick: () => {
        document
          .querySelector("#experience")
          ?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      icon: <CgReadme />,
      onClick: () => {
        document
          .querySelector("#education")
          ?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  const listContactUs: IContactContent[] = [
    {
      icon: <ImGithub className="text-4xl" />,
      name: "Github",
      detail: "github.com/ridoNev1",
      url: "https://github.com/ridoNev1",
    },
    {
      icon: <SiLinkedin className="text-4xl" />,
      name: "Linked In",
      detail: "linkedin.com/in/rido-maulana-solihin",
      url: "https://www.linkedin.com/in/rido-maulana-solihin",
    },
    {
      icon: <FaInstagram className="text-4xl" />,
      name: "Instagram",
      detail: "instagram.com/rido_uwoo",
      url: "https://www.instagram.com/rido_uwoo/",
    },
  ];

  const listPorto: IPortoContent[] = [
    {
      image: FmsPage1,
      name: "Astra FMS",
      detail:
        "is a platform that helps organizations manage and coordinate work vehicles from a central information system to ensure the optimal utilization of assets, track vehicles in real time, and enhance safety and efficiency. These systems are particularly useful for companies that operate fleets of vehicles such as trucks, buses, or cars, enabling them to reduce operational costs, monitor driver performance, and comply with regulations",
      onClick: () => {},
    },
    {
      image: MolaPage1,
      name: "Moladin Website",
      detail:
        "A platform for buying and selling cars that empowers small-scale agents and dealers by leveraging technology to simplify transaction processes and deliver a better customer experience.",
      onClick: () => {},
    },
    {
      image: JfpuPage1,
      name: "JFPU",
      detail:
        "Used for various purposes, such as proposal submissions for credit adjustment, job promotion, and more. Tech: React TypeScript, Express JS.",
      onClick: () => {},
    },
    {
      image: HrisPage1,
      name: "Hris Dashboard",
      detail:
        "Developed and set up an HR management application, including employee management, roles, and organizational structure. Built using React JS with Material UI.",
      onClick: () => {},
    },
  ];

  return (
    <section className="bg-main min-h-screen w-screen">
      <div className="max-w-[1380px] m-auto">
        <div className="grid grid-cols-[80px,7fr,3fr] gap-12 pt-8">
          <div className="relative">
            <div className="fixed w-20 flex min-h-[94vh] py-6 text-white text-3xl gap-8 flex-col items-center bg-main_dark rounded-full">
              {listSideBar.map((el, indx) => (
                <button
                  key={indx}
                  onClick={el.onClick}
                  className="p-2 rounded-full glow-effect transition-all ease-in"
                >
                  {el.icon}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="w-full h-[330px] gradient_bg rounded-3xl px-6 grid grid-cols-[4fr,2fr]">
              <div className="flex items-center text-white px-6">
                <div className="relative">
                  <GiAtomCore className="absolute text-9xl opacity-10 right-0 top-0 rotate-180" />
                  <h3 className="mb-1 poppins-font text-3xl font-semibold">
                    RIDO MAULANA
                  </h3>
                  <p className="max-w-max rounded-full font-medium mb-4 text-lg text-white/80">
                    Software Engineer
                  </p>
                  <p>
                    As a Front-End Engineer, I have recently worked on creating
                    digital logistics and transportation solutions. As part of
                    my job, I oversee the development and integration of user
                    interfaces and am frequently tasked with integrating and
                    testing intricate new features...{" "}
                    <span className="text-main_dark font-medium cursor-pointer">
                      Read More
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-button_hover/20 rounded-2xl h-full relative">
                  <img
                    src={MinePersonalImage}
                    alt="mine image"
                    className="rounded-2xl absolute h-[320px] -left-3 -bottom-3 object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl mt-16 font-bold monse-font text-white mb-6">
                Portofolio
              </h2>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full max-w-4xl"
              >
                <CarouselContent>
                  {listPorto.map((el, index) => (
                    <CarouselItem key={index}>
                      <div className="bg-main_dark p-6 rounded-xl flex gap-6 overflow-hidden">
                        <img
                          src={el.image}
                          alt="moladin-page1"
                          className="rounded-xl w-72 object-cover"
                        />
                        <div>
                          <div className="text-white space-y-2 mt-4">
                            <p className="text-xl font-semibold">{el.name}</p>
                            <p className="text-ellipsis line-clamp-3 text-white/75">
                              {el.detail}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <span></span>
                            <button
                              className="glow-effect bg-button_hover mt-6 transition-all ease-in py-2 px-6 text-sm rounded-full text-main_dark font-medium"
                              onClick={el.onClick}
                            >
                              View More
                            </button>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4" />
                <CarouselNext className="-right-4" />
              </Carousel>
            </div>
            <div className="mb-10">
              <h2
                id="experience"
                className="text-3xl mt-16 font-bold monse-font text-white mb-6"
              >
                Experience
              </h2>
              <div className="p-4 bg-main_dark rounded-2xl text-white grid grid-cols-[1fr,6fr] gap-6">
                <img src={SeraIcon} alt="sera-icons" />
                <div className="space-x-1">
                  <p className="font-semibold">Frontend Developer</p>
                  <p className="text-white/70 text-sm text-ellipsis line-clamp-1 max-w-56">
                    PT. Serasi Autoraya · Fulltime
                  </p>
                  <p className="text-white/50 text-sm text-ellipsis line-clamp-1 max-w-56">
                    Mar 2023 - Saat ini
                  </p>
                  <p className="text-white/50 text-sm text-ellipsis line-clamp-1 max-w-56">
                    Jakarta, Indonesia · Hybrid
                  </p>
                  <ul className="text-white/70 text-sm list-disc pl-5 mt-6">
                    <li>
                      Developed digital logistics and transportation solutions,
                      focusing on creating efficient and user-friendly
                      interfaces.
                    </li>
                    <li>
                      Oversaw the end-to-end process of UI development and
                      integration in a collaborative team environment.
                    </li>
                    <li>
                      Specialized in integrating and testing complex features
                      Applied expertise in micro frontend architecture to
                      enhance the scalability and flexibility of the developed
                      solutions.
                    </li>
                    <li>
                      Implemented map integration specifically designed for
                      heavy vehicle routes, showcasing a keen understanding of
                      geospatial technologies.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-main_dark mt-6 rounded-2xl text-white grid grid-cols-[1fr,6fr] gap-6">
                <div className="flex justify-center">
                  <img
                    src={MoladinIcon}
                    alt="sera-icons"
                    className="w-16 h-16 rounded-lg"
                  />
                </div>
                <div className="space-x-1">
                  <p className="font-semibold">
                    Software Engineer II - Frontend
                  </p>
                  <p className="text-white/70 text-sm text-ellipsis line-clamp-1 max-w-56">
                    Moladin · Fulltime
                  </p>
                  <p className="text-white/50 text-sm text-ellipsis line-clamp-1 max-w-56">
                    Apr 2022 - Feb 2023
                  </p>
                  <p className="text-white/50 text-sm text-ellipsis line-clamp-1 max-w-56">
                    Jakarta, Indonesia · Remote
                  </p>
                  <ul className="text-white/70 text-sm list-disc pl-5 mt-6">
                    <li>
                      I am a part of the Marketplace team responsible for the
                      development of the moladin.tech website, with a primary
                      focus on Micro Frontend using React JS.
                    </li>
                    <li>
                      Contributed to sprint planning, prioritising backlogs to
                      meet new demands.
                    </li>
                    <li>
                      Contribute to creating a unique and captivating user
                      experience, ensuring that each developed feature not only
                      functions optimally but also delivers an outstanding
                      visual appeal.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between">
                <span></span>
                <button className="glow-effect bg-button_hover mt-6 transition-all ease-in py-2 px-6 text-sm rounded-full text-main_dark font-medium">
                  View More
                </button>
              </div>
            </div>
            <div className="mb-10">
              <h2
                id="education"
                className="text-3xl mt-16 font-bold monse-font text-white mb-6"
              >
                Education
              </h2>
              <div className="p-4 bg-main_dark rounded-2xl text-white grid grid-cols-[1fr,6fr] gap-6">
                <div className="flex justify-center">
                  <img
                    src={EsgulIcon}
                    alt="sera-icons"
                    className="w-16 h-16 rounded-lg"
                  />
                </div>
                <div className="space-x-1">
                  <p className="font-semibold">Universitas Esa Unggul</p>
                  <p className="text-white/70 text-sm text-ellipsis line-clamp-1 max-w-56">
                    Gelar Sarjana, Informatika
                  </p>
                  <p className="text-white/50 text-sm text-ellipsis line-clamp-1 max-w-56">
                    Mar 2023 - Mar 2026
                  </p>
                  <ul className="text-white/70 text-sm list-disc pl-5 mt-6">
                    <li>
                      I'm currently pursuing a Bachelor's degree in Computer
                      Science. My journey in the world of Information Technology
                      has been an exciting exploration of problem-solving and
                      creativity.
                    </li>
                    <li>
                      I've delved into a range of subjects, from algorithms to
                      database management, gaining a solid foundation in the
                      core principles of computer science.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between">
                <span></span>
                <button className="glow-effect bg-button_hover mt-6 transition-all ease-in py-2 px-6 text-sm rounded-full text-main_dark font-medium">
                  View More
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="fixed">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold monse-font text-white mb-6">
                  Contact
                </h2>
                {listContactUs.map((el, indx) => (
                  <div
                    key={indx}
                    className="bg-main_dark grid text-white grid-cols-[1fr,4fr,.5fr] gap-2 p-4 rounded-2xl"
                  >
                    <div className="flex items-center justify-center">
                      {el.icon}
                    </div>
                    <div className="space-x-1">
                      <p className="font-semibold text">{el.name}</p>
                      <p className="text-white/70 text-sm text-ellipsis line-clamp-1 max-w-56">
                        {el.detail}
                      </p>
                    </div>
                    <div
                      className="flex items-center justify-center cursor-pointer"
                      onClick={() => window.open(el.url, "_blank")?.focus()}
                    >
                      <IoIosArrowForward className="text-xl" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="fixed space-y-4 mt-10 w-[360px]">
                <h2 className="text-3xl font-bold monse-font text-white mb-6">
                  Skill
                </h2>
                <div>
                  <div className="p-6 rounded-2xl  gradient_bg flex flex-wrap gap-2">
                    <div className="py-2 px-4 rounded-full bg-[#FFFDC3] text-main_dark font-medium">
                      Sofware Management
                    </div>
                    <div className="py-2 px-4 rounded-full bg-[#FFFDC3] text-main_dark font-medium">
                      Next JS
                    </div>
                    <div className="py-2 px-4 rounded-full bg-[#FFFDC3] text-main_dark font-medium">
                      Tailwind CSS
                    </div>
                    <div className="py-2 px-4 rounded-full bg-[#FFFDC3] text-main_dark font-medium">
                      Antd
                    </div>
                    <div className="py-2 px-4 rounded-full bg-[#FFFDC3] text-main_dark font-medium">
                      Micro Frontend
                    </div>
                    <div className="py-2 px-4 rounded-full bg-[#FFFDC3] text-main_dark font-medium">
                      Node JS
                    </div>
                    <div className="py-2 px-4 rounded-full bg-[#FFFDC3] text-main_dark font-medium">
                      Express
                    </div>
                    <div className="py-2 px-4 rounded-full bg-[#FFFDC3] text-main_dark font-medium">
                      Realtime Database
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
