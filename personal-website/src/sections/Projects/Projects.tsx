import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      title: "Ottawa CrimeLens",
      description:
        "A full-stack distributed system designed to analyze Ottawa crime data across spatial grids and surface anomalous activity patterns. Consists of many microservices for data ingestion, processing, and anomaly detection, utilizing AWS services for scalability and reliability.",
      technologies: [
        "Spring Boot (Java)",
        "Python (Scklearn, Pandas)",
        "React",
        "TypeScript",
        "AWS (ECS, S3, Step Functions, EventBridge)"
      ],
      thumbnail: "./projects/ottawaCrimeLens.png",
      link: "https://www.ottawacrimelens.ca/",
      source: "https://github.com/tazim04/Ottawa-Crime-Lens",
    },
    {
      title: "TalentSync",
      description:
        "Built a Chrome extension that uses Llama 3 to score resumes against job listings, enhancing job search. Designed a serverless architecture with AWS Lambda, S3, and API Gateway for scalable scraping and matching via Playwright and Groq, securing endpoints with Google OAuth and Cognito.",
      technologies: [
        "React",
        "TypeScript",
        "Python",
        "Groq (Llama 3)",
        "AWS (Lambda, S3, ECR, Cognito)",
      ],
      thumbnail: "./projects/talentSync.jpeg",
      link: "https://chromewebstore.google.com/detail/talentsync/odkpmfccegfdcekejlolmopnlhnpfebm",
      source: "https://github.com/tazim04/Talent-Sync",
    },
    {
      title: "TeeChat",
      description:
        "Developed a real-time chat application with 25 monthly active users, enabling seamless instant messaging. Used MongoDB and Socket.IO for real-time data management, securing passwords with one-way hashing, and implemented a complete JWT flow for secure sessions.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "Socket.IO",
        "MongoDB",
        "AWS EC2",
      ],
      thumbnail: "./projects/TeeChat.jpg",
      link: "https://www.teechat.chat/",
    },
    {
      title: "SESA Website",
      description:
        "Leading a team of developers to build and maintain the Software Engineering Student Association (SESA) website with Next.js and TypeScript. Implemented backend services for a resources page centralizing 200+ academic resources and developed reusable components aligned with Figma designs.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase (PostgreSQL)", "Drizzle ORM"],
      thumbnail: "./projects/sesa.png",
      link: "https://sesa-aegl.ca",
      source: "https://github.com/uOttawaSESA/sesa-website",
    },
    {
      title: "UOHFS Website",
      description:
        "Developed and maintained the University of Ottawa Health and Fitness Society website using Next.js and Tailwind CSS. Automated real-time updates for the 'Events' page using Google Calendar API.",
      technologies: ["Next.js", "Tailwind CSS", "Google Calendar API"],
      thumbnail: "./projects/uohfs.png",
      link: "https://uohfs-website.vercel.app/",
    },
    {
      title: "StudySync",
      description:
        "Collaborated in a team of 5 to develop a School Team Creation System with Spring Boot and Angular. Designed and implemented backend using Spring Boot with secure JPAs, DAOs, and REST APIs, and led schema design with PostgreSQL for robust persistence.",
      technologies: ["Angular", "Spring Boot (Kotlin)", "PostgreSQL", "Docker"],
      thumbnail: "./projects/studySync.png",
      link: "https://github.com/tazim04/studysync",
    },
    {
      title: "Talk Box",
      description:
        "Collaborated to develop a Talk Box device using a Raspberry Pi and C# (.NET) to enable nonverbal users with limited motor control to communicate effectively.",
      technologies: ["C# (.NET)", "Raspberry Pi (Linux)"],
      thumbnail: "./projects/talkBox.jpeg",
      link: "https://www.linkedin.com/posts/tazim-khan_im-happy-to-share-this-talk-and-music-box-activity-7136521162288689152-5lyW?utm_source=share&utm_medium=member_desktop",
      source: "https://github.com/tazim04/TalkBox",
    },
  ];

  return (
    <div className="2xl:w-1/2 md:w-5/6 w-11/12 relative 2xl:right-80 md:right-20">
      <h1 className="text-left text-2xl">
        <span className="text-rose-500 glow-text">02.</span> Projects
      </h1>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="bg-gray-300 bg-opacity-5 rounded-lg p-7">
        {projects.map((proj, index) => (
          <div key={index} className="mb-6">
            <Project project={proj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
