import "./About.css";

const About = () => {
  return (
    <div className="2xl:w-1/2 md:w-5/6 w-11/12 relative 2xl:right-80 md:right-20">
      <h1 className="text-left text-2xl">
        <span className="text-rose-500 glow-text">00.</span> About Me
      </h1>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="bg-gray-300 bg-opacity-5 rounded-lg md:p-7 p-5 grid md:grid-cols-4 grid-cols-1 md:gap-x-8 gap-y-8 md:gap-y-0">
        <div className="md:border-r border-r-0 md:border-b-0 border-b pb-6 border-gray-500 md:pe-6 pe-0 col-span-3">
          <p className="md:text-base text-sm leading-relaxed">
            Hi, my name is Tazim Khan! I'm a Software Engineering student at
            the{" "}
            <span className="text-rose-500 font-bold">
              University of Ottawa
            </span>
            , with a strong focus on backend development, systems architecture,
            and building reliable software. Through internships at the{" "}
            <span className="text-rose-500 font-bold">
              Canada Revenue Agency
            </span>
            {" "}and{" "}
            <span className="text-rose-500 font-bold">
              Natural Resources Canada
            </span>
            , I've worked on production systems and learned how to design
            scalable solutions within collaborative teams.
            <br />
            <br />
            Beyond internships, I've also supported student communities through
            freelance-style work, serving as the{" "}
            <span className="text-rose-500 font-bold">Development Team Lead</span> for the
            uOttawa Software Engineering Student Association
            and{" "}
            <span className="text-rose-500 font-bold">Lead Developer</span> for
            the University of Ottawa's Health and Fitness Society. Across
            professional, academic, and club projects, I enjoy turning ideas
            into well-structured systems and taking on challenges that help me
            grow as an engineer.
            <br />
            <br />
            <div className="mb-3">My technical experties:</div>
            <ul className="list-disc list-inside grid grid-cols-1 gap-y-1 marker:text-rose-500 text-indent">
              <li>
                <span className="font-bold">Backend:</span> Spring Boot, Flask, FastAPI, Node.js, Express.js
              </li>
              <li>
                <span className="font-bold">Frontend:</span> React, Angular,
                Next.js
              </li>
              <li>
                <span className="font-bold">Languages:</span>{" "}
                Java, Kotlin, Python, JavaScript/TypeScript, C, C++, C#
              </li>
              <li>
                <span className="font-bold">Databases:</span> MySQL, PostgreSQL,
                MongoDB, Firebase
              </li>
              <li>
                <span className="font-bold">Tools:</span> Git, GitHub, GitLab, Docker, AWS, GCP, Postman
              </li>
            </ul>
          </p>
        </div>
        <div className="flex items-center justify-center md:col-span-1 col-span-full">
          <img
            src="./linkedin.jpg"
            alt="Tazim Khan"
            className="w-full max-w-xs rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
