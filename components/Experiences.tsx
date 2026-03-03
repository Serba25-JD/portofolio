import Image from "next/image";
import { experiences } from "@/public/js/experiences";

type ExperienceProps = {
    image: string;
    name: string;
    width: number;
    height: number;
};

function Experience({image, name, width, height}: ExperienceProps) {
    return (
        <figure className="flex-shrink-0">
            <Image src={image} width={width} height={height} alt={name} priority className="w-xl rounded-md shadow-md" />
            <figcaption className="font-normal text-base mt-5"> {name} </figcaption>
        </figure>
    )
}

export default function Experiences() {
    return (
        <section className="px-5 md:px-10 py-10 text-center">
            <h2 className="font-poppins font-bold text-lg border-r-10 border-l-10 border-accent rounded-md shadow-md p-2"> Pengalaman Saya </h2>
            <div className="flex flex-nowrap gap-5 overflow-x-auto scroll-smooth w-full p-5">
                {experiences.map(experience => (
                    <Experience key={experience.name} {...experience } />
                ))}
            </div>
        </section>
    )
}