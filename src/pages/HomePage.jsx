import AboutImage from "../assets/images/about.svg";
import Proyek1 from "../assets/images/proyek-1.webp";
import Projek1 from "../assets/images/projek1.png";
import FotoPorto from "../assets/images/Filzah.png";

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              Hello! <span>I'm Filzah</span> &#x1F44B; &#x1F31F;
            </h1>
            <p className="text-base/8 mb-7">
              As an Informatics Engineering student with a strong interest in
              full-stack development, frontend development plays a crucial role
              in my learning journey. It involves creating user interfaces and
              experiences using HTML, CSS, and JavaScript. I'll also explore
              modern frameworks like React, Angular, or Vue.js to build dynamic
              applications. Understanding good UI/UX principles and ensuring
              responsiveness across devices is key. Additionally, knowing how to
              integrate with the backend, like working with APIs and data
              management, will be vital in fullstack development. My passion for
              continuous learning will help me master frontend skills and become
              a skilled developer.
            </p>
            <a
              href="https://drive.google.com/drive/folders/18WJJ1tnLSFQ0vHBxIh266Mw5eL4isTMJ"
              target="_blank"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4
            text-white shadow rounded-full"
            >
              See my cv <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img
              src={FotoPorto}
              alt="Foto Porto"
              className="md:w-full w-[400px] mx-auto md:m-0"
            />
          </div>
        </div>

        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center gap-20 md:pt-20 pt-32"
          id="about"
        >
          <div className="box md:order-1 order-2">
            <img
              src={AboutImage}
              alt="About Image"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto"
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">
              My{" "}
              <span className="font-bold text-sky-400 underline">Honors </span> &#x1F947;
            </h1>
            <p className="text-base/loose">
              <ul>
                <li>
                  1. TOP 13 Best Student in MIPA 2023 (SMA Negeri 1 Surakarta)
                </li>
                <li>
                  2. Silver Medals POSN Math Competition 2022 (Pekan Olimpiade
                  Sains Nasional )
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="service pt-32" id="work">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Work Experience &#x1F477;
          </h1>
          <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                MKI SMA Negeri 1 Surakarta
                <br />
                2020-2021
              </h3>
              <ul className="text-white text-base/loose">
                <li>
                  1. Actively participated in various religious and social
                  activities organized by MKI.
                </li>
                <li>
                  2. Assisted in organizing community service programs and
                  spiritual events.
                </li>
                <li>
                  3. Engaged in team discussions to promote values of unity and
                  leadership.
                </li>
              </ul>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Information Centric Networking (ICN) 2024
              </h3>
              <ul className="text-white text-base/loose">
                <li>
                  1. Conducted network performance analysis and simulations
                  using GNS3.
                </li>
                <li>2. Designed and implemented network infrastructure.</li>
                <li>
                  3. Collaborated with team members to research and develop
                  solutions for network optimization.
                </li>
              </ul>
            </div>
            <div className="box bg-sky-400 rounded-lg shadow p-4">
              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                Rekognisi Kegiatan Mahasiswa 2024
              </h3>
              <ul className="text-white text-base/loose">
                <li>
                  1. Collaborated with a team to develop a website for Sisir
                  Village.
                </li>
                <li>2. Designed and implemented a user-friendly website.</li>
                <li>
                  3. Engaged in problem-solving and teamwork to ensure the
                  website met community needs effectively.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="proyek pt-32" id="proyek">
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
            Projects &#128187;
          </h1>
          <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-white">
              <img
                src={Projek1}
                alt="Proyek Image"
                className="w-full h-[220px]"
              />
              <h3 className="text-xl font-bold  mt-6 mb-2">
                Makan Yuk Website
              </h3>
              <p className="text-base/loose">
                Makan Yuk is a web application designed to help users find food
                recommendations based on their preferences. Built with React, it
                integrates Fake API to handle operations like POST, GET, PUT,
                and DELETE for managing food data. The app features state
                management for smooth interactions, responsive design for all
                devices, and error handling. It is deployed on free hosting
                platforms use Github ensuring easy public access.
              </p>
              
              <a 
                href="https://zeoyjeoy.github.io/Freepass-FE-2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-sky-400 text-white rounded-lg hover:bg-blue-300 transition-colors duration-300"
              >
                See My Website
              </a>
              <br />
              <a
                href="https://github.com/Zeoyjeoy/Freepass-FE-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-sky-400 text-white rounded-lg hover:bg-blue-300 transition-colors duration-300"
              >
                Github Code
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
