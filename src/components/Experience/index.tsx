import { ExperienceType } from "@/app/types";

export const Experience = ({year, title, affiliationName, description}: ExperienceType) => {
    return (
      <main data-aos="fade-up">
        <h2 className="year p-1 text-neutral-400">{year}</h2>
        <h2 className="title p-1 text-gray-900 font-bold">{title}</h2>
        <h2 className="affiliationName p-1 text-neutral-400 italic">{affiliationName}</h2>
        <h2 className="description p-1">
          {description}
        </h2>
      </main>
    );
  };