import Image from "next/image";

export default function Project() {
    return (
        <section className="px-5 md:px-10 py-10 text-center">
            <h2 className="font-poppins font-bold text-lg border-r-10 border-l-10 border-accent rounded-md shadow-md p-2"> Design Grafis </h2>
            <div className="flex gap-5 p-5 flex-col">
                <div className="flex flex-nowrap gap-2 overflow-x-auto scroll-smooth min-w-3xs">
                    <Image src={"/image/project/project-1.webp"} alt="Project-Design-Grafis" width={1080} height={1440} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md" />
                    <Image src={"/image/project/project-2.webp"} alt="Project-Design-Grafis" width={1080} height={1440} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md" />
                </div>
                <div className="flex flex-nowrap gap-2 overflow-x-auto scroll-smooth min-w-3xs">
                    <Image src={"/image/project/project-3.jpg"} alt="Project-Design-Grafis" width={5906} height={1181} priority className="flex-shrink-0 w-full rounded-md shadow-md" />
                </div>
                <div className="flex flex-nowrap gap-2 overflow-x-auto scroll-smooth min-w-3xs">
                    <Image src={"/image/project/project-7.jpg"} alt="Project-Design-Grafis" width={1483} height={373} priority className="flex-shrink-0 w-full rounded-md shadow-md" />
                </div>
                <div className="flex flex-nowrap gap-2 overflow-x-auto scroll-smooth min-w-3xs">
                    <Image src={"/image/project/project-4.jpg"} alt="Project-Design-Grafis" width={2362} height={1181} priority className="flex-shrink-0 w-full rounded-md shadow-md" />
                </div>
                <div className="flex flex-nowrap gap-2 overflow-x-auto scroll-smooth min-w-3xs">
                    <Image src={"/image/project/project-5.jpg"} alt="Project-Design-Grafis" width={4962} height={7017} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md" />
                    <Image src={"/image/project/project-8.jpg"} alt="Project-Design-Grafis" width={4724} height={6693} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md" />
                </div>
                <div className="flex flex-nowrap gap-2 overflow-x-auto scroll-smooth min-w-3xs">
                    <Image src={"/image/project/project-6.jpg"} alt="Project-Design-Grafis" width={1200} height={2000} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md" />
                    <Image src={"/image/project/project-9.jpg"} alt="Project-Design-Grafis" width={750} height={1334} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md" />
                    <Image src={"/image/project/project-10.jpg"} alt="Project-Design-Grafis" width={750} height={1334} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md" />
                </div>
            </div>
        </section>
    )
}