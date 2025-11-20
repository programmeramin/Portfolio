"use client";

import { FaArrowRight } from "react-icons/fa";

export default function FeaturedProjects() {
  const projects = [
    {
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvocal.media%2Fjournal%2Fweb-application-development-process-by-egeneus-co&psig=AOvVaw0a1aMc1S1rqwsKQDZN4hwP&ust=1763483350579000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJC2sMvN-ZADFQAAAAAdAAAAABAE",
      title: "NextSkill (LMS)",
      desc: "An interactive learning platform with live classes, course search & filtering, and student enrollment system.",
      tags: [
        "Next.js",
        "Tailwind",
        "Shadcn UI",
        "Acerternity UI",
        "Resend",
        "Payment",
        "Motion",
        "Three.js",
        "Recharts",
      ],
    },
    {
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.geeksforgeeks.org%2Fblogs%2Ftop-open-source-projects-for-web-developers%2F&psig=AOvVaw0a1aMc1S1rqwsKQDZN4hwP&ust=1763483350579000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJC2sMvN-ZADFQAAAAAdAAAAABAR",
      title: "NextCode (Software Agency)",
      desc: "A professional portfolio website for a software agency, featuring services, project showcases, and client feedback.",
      tags: ["Next.js", "Tailwind", "Resend", "Three.js", "Framer"],
    },
    {
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheninehertz.com%2Fblog%2Fbest-ideas%2Fweb-app-ideas&psig=AOvVaw0a1aMc1S1rqwsKQDZN4hwP&ust=1763483350579000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJC2sMvN-ZADFQAAAAAdAAAAABAK",
      title: "Business Mail USA (News Portal)",
      desc: "A dynamic business news portal providing real-time updates and financial insights with CMS integration.",
      tags: ["Next.js", "Tailwind", "Server Actions", "Zod", "React Hook Form"],
    },
  ];

  return (
    <>
      <div className="w-full py-20 dark:bg-[#0B1120] text-white">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-center dark:text-gray-400 text-gray-800 text-md font-medium mt-2 mb-12">
          Here are some of my recent projects that showcase my skills and
          expertise
        </p>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 px-6">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-xl border border-transparent hover:border-blue-400 transition-all 
            duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 transform duration-800 hover:scale-105"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="text-gray-400 text-sm mt-2 mb-4">{item.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#1F2937] text-gray-300 rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className=" bg-gradient-to-r via-purple-700 px-5 py-2 r to-pink-600 from-indigo-700 hover:via-purple-900 hover:from-indigo-800 hover:to-pink-800 transform transition hover:scale-105 duration-500 text-white rounded-lg flex items-center gap-2 mx-auto">
            View All Projects <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
