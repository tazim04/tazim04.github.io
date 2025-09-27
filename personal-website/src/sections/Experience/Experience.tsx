import ExpDetails from "./ExpDetails/ExpDetails";

const Experience = () => {
const exps = [
  {
    title: "Software Engineer Intern",
    company: "Natural Resources Canada",
    duration: "May 2025 – Present",
    details: [
      "Built a Python microservice that initializes production tracking and triggers entry-point microservices, serving as the starting point for images in the GeoAI pipeline.",
      "Developed a Python microservice that monitors a PostGIS database to detect images requiring flatfile creation, extracting geospatial data, generating JSON files, uploading them to AWS S3, and updating database records for 1000+ images in under 60 seconds.",
      "Refactored and updated existing microservices to add new features and address changes in requirements.",
      "Optimized GitLab CI/CD workflow and Docker configuration to publish internal Python packages to the GitLab PyPI registry, streamlining dependency management across all services.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Canada Revenue Agency",
    duration: "May 2023 – Sept. 2023, Jan 2024 – Apr. 2024",
    details: [
      "Developed 10+ reusable Angular components that were integrated into a shared component library, enabling teams to efficiently digitalize CRA forms.",
      "Built 5+ Angular pages to showcase the component library, demonstrating functionality and use cases.",
      "Implemented REST APIs in a Java Maven project to validate and transform user inputs for PDF generation.",
      "Wrote JUnit tests on the library’s input validators, identifying issues in over 70% of the validators.",
    ],
  },
  {
    title: "Development Team Lead",
    company: "Software Engineering Student Association",
    duration: "Jan. 2025 – Present",
    details: [
      "Leading a team of 5 developers in building and maintaining the SESA website with Next.js and TypeScript.",
      "Built backend services for the resources page, centralizing 200+ academic resources into a structured, searchable repository, streamlining access and usage for 500+ students.",
      "Developed 5 responsive pages and 20+ reusable components, ensuring consistency with design specifications.",
    ],
  },
  {
    title: "WebMaster",
    company: "University of Ottawa Health and Fitness Society",
    duration: "August 2024 – May 2025",
    details: [
      "Developed and maintained the UOHFS website using Next.js and Tailwind CSS.",
      "Automated real-time updates for the 'Events' page by integrating Google Calendar API with Next.js Server Side Rendering, removing the need for manual updates.",
      "Designed a user-friendly, responsive, and visually appealing website to meet client requirements.",
    ],
  },
];

  return (
    <div className="2xl:w-1/2 md:w-5/6 relative w-11/12 2xl:left-80 md:left-20">
      <h1 className="text-right text-2xl">
        <span className="text-rose-500 glow-text">01.</span> Experience
      </h1>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="bg-gray-300 bg-opacity-5 rounded-lg md:p-7 p-3">
        {exps.map((job, index) => (
          <div key={index} className="mb-6">
            <ExpDetails job={job} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
