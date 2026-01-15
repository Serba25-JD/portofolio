import Image from "next/image";
import { experiences } from "@/public/assets/js/experiences";

function Experience({image, name, width, height}) {
    return (
        <figure>
            <Image src={image} width={width} height={height} alt={name} priority/>
            <figcaption> {name} </figcaption>
        </figure>
    )
}

export default function Experiences() {
    return (
         <section id="experiences" className="container" >
            <h2> Pengalaman Saya </h2>
            {experiences.map(experience => (
                <Experience key={experience.name} {...experience } />
            ))}
         </section>
    )
}

