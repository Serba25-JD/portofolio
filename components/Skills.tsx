import { skills } from "@/public/js/skills";
import Image from "next/image";

type SkillProps = {
    image: string;
    name: string;
}

function Skill({image, name}: SkillProps) {
    return (
        <figure className="flex flex-col gap-3 items-center justify-center">
            <Image src={image} alt={name} width={800} height={800} priority className="rounded-md shadow-md p-2" />
            <figcaption className="font-medium text-base"> {name} </figcaption>
        </figure>
    )
}

export default function Skills() {
    return (
        <section className="flex flex-col gap-5 text-center justify-center border-l-2 border-accent pl-5 rounded-md">
            <h2 className="font-poppins font-bold text-lg border-r-10 border-l-10 border-accent rounded-md shadow-md p-2"> Keahlian Saya </h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
                {skills.map(skill => (
                    <Skill key={skill.name} {...skill} />
                ))}
            </div>
        </section>
    )
}