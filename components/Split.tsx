import Educations from "./Educations";
import Skills from "./Skills";

export default function Split() {
    return (
        <section className="px-5 md:px-10 py-10 grid grid-cols-2 gap-5 items-start">
            <Educations />
            <Skills />
        </section>
    )
}