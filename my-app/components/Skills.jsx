import Image from "next/image";
import { skills } from "@/public/assets/js/skills";

function Skill({ icon, name }) {
  return (
    <figure>
      <Image src={icon} width={48} height={48} alt={name} priority />
      <figcaption> {name} </figcaption>
    </figure>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="container">
      <h2> Keahlian Saya </h2>
       <div id="skills-container">
         {skills.map(skill => (
            <Skill key={skill.name} {...skill} />
          ))}
       </div>
    </section>
  )
};