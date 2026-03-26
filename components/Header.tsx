import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-foreground flex gap-2 justify-between px-5 md:px-10 py-5 border-b-2 border-accent shadow-md flex-wrap rounded-b-lg">
            <div className="flex-1 flex flex-col gap-5">
                <h1 className="font-poppins font-bold text-lg"> Portofolio - Junior Programmer </h1>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined"> contact_phone </span>
                    <a href="tel:+6285156246765" className="font-medium text-base" target="_blank"> +62 851-5624-6765 </a>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined"> contact_mail </span>
                    <a href="mailto:jeremi.salvatores@gmail.com" className="font-medium text-base" target="_blank"> jeremi.salvatores@gmail.com </a>
                </div>
                <div className="flex gap-2">
                    <div>
                        <a href="https://www.instagram.com/je.onlyone_" target="_blank">
                            <Image src="/image/svg/instagram.svg" alt="Instagram" width={800} height={800} priority className="w-7 h-auto" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/Serba25-JD" target="_blank">
                            <Image src="/image/svg/github.svg" alt="Github" width={800} height={800} priority className="w-7 h-auto" />
                        </a>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1r66oI16m0Ofppsh8YSkCT2v_Df5JbaSv/preview" className="p-2 bg-background text-center font-bold text-base rounded-lg shadow-lg w-45" target="_blank"> Curriculum Vitae </a>
            </div>
            <div className="flex-none">
                <Image src="/image/main/profile.webp" alt="Portofolio - Junior Programmer Jeremi Salvatores Sihotang" width={651} height={1156} priority className="w-3xs md:w-40 h-auto rounded-md shadow-md"/>
            </div>
        </header>
    )
}