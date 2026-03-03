export default function Educations() {
    return (
        <section className="flex flex-col gap-5 text-center justify-center">
            <h2 className="font-poppins font-bold text-lg border-r-10 border-l-10 border-accent rounded-md shadow-md p-2"> Pendidikan Saya </h2>
            <div className="flex flex-col gap-2 md:flex-row">
                <div className="text-left border-l-10 p-2 border-accent rounded-md shadow-md bg-foreground flex-1">
                    <h3 className="font-bold text-base"> Universitas Pembangunan Pancabudi </h3>
                    <p className="font-medium text-base"> S1 - Teknologi Informasi </p>
                    <p className="font-medium text-base"> 2025 - Now </p>
                </div>
                <div className="text-left border-l-10 p-2 border-accent rounded-md shadow-md bg-foreground flex-1">
                    <h3 className="font-bold text-base"> SMK Swasta Eka Prasetya </h3>
                    <p className="font-medium text-base"> Teknik Komputer dan Jaringan </p>
                    <p className="font-medium text-base"> 2016 - 2018 </p>
                </div>
            </div>
        </section>
    )
}