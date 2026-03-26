import Image from "next/image";

export default function Project() {
    return (
        <section className="px-5 md:px-10 py-10 text-center flex flex-col gap-2">
            <div className="flex flex-col">
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
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="font-poppins font-bold text-lg border-r-10 border-l-10 border-accent rounded-md shadow-md p-2"> Design Logo </h2>
                <div className="flex gap-5 flex-col">
                    <div className="flex gap-2 flex-wrap justify-center md:flex-nowrap">
                        <div className="flex flex-nowrap gap-2 overflow-x-auto scroll-smooth min-w-3xs flex-col">
                            <Image src={"/image/project/logo-paroki.png"} alt="Project-Design-Logo" width={4758} height={1269} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md bg-white p-2" />
                            <Image src={"/image/project/logo-paroki-kaos.jpg"} alt="Project-Design-Logo" width={500} height={500} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md bg-white p-2" />
                        </div>
                        <article className="bg-foreground p-2 rounded-md text-left">
                            <h2 className="font-poppins font-medium text-sm"> Visual Identity Concept: 111 Anniversary Paroki St. Antonius dari Padua Medan </h2>
                            <p className="font-medium text-sm"> Filosofi Logo: </p>
                            <ul className="list-decimal ml-5 font-medium text-sm">
                                <li> Dua simbol tangan memberi dan menerima, melambangkan pengingat akan kerendahan hati serta menyambut sebagai bentuk kepedulian sosial. </li>
                                <li> Angka 111 didekonstruksi menjadi tiga pilar vertikal yang melambangkan pondasi iman yang kokoh dengan bentuk tegak lurus yang dibentuk sebagai pilar yang melambangkan persaudaraan dalam keberagaman. </li>
                                <li> Bentuk Hati melambangkan persaudaraan, solidaritas, dan kasih kepada sesama, sama seperti Tuhan yang sangat mengasihi kita. </li>
                            </ul>
                            <p className="font-medium text-sm"> Makna Warna: </p>
                            <ul className="flex flex-col gap-1 mt-1">
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#FFF8F0] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Putih Krem: Melambangkan kemurnian, pengampunan, damai sejahtera, dan terang kasih Tuhan. </p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#C08552] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Cokelat Caramel: Melambangkan kerendahan hati, kesederhanaan hidup, kedewasaan iman, dan kedekatan manusia dengan Tuhan. </p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#8C5A3C] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Cokelat Tua: Melambangkan kerendahan hati, kestabilan iman, kesederhanaan hidup, dan kedewasaan rohani. </p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#4B2E2B] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Cokelat Gelap: Melambangkan kerendahan hati yang dalam, pertobatan, keteguhan iman, dan kehidupan rohani yang serius serta sederhana. </p>
                                </li>
                            </ul>
                        </article>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-center md:flex-nowrap">
                        <div className="flex flex-nowrap gap-2 overflow-x-auto scroll-smooth min-w-3xs flex-col">
                            <Image src={"/image/project/logo-imprexxive.png"} alt="Project-Design-Logo" width={1200} height={1200} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md bg-white p-2" />
                            <Image src={"/image/project/logo-imprexxive-kaos.png"} alt="Project-Design-Logo" width={1200} height={1200} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md bg-white p-2" />
                        </div>
                        <article className="bg-foreground p-2 rounded-md text-left">
                            <h2 className="font-poppins font-medium text-sm"> Visual Identity Concept: Angkatan 2024 KemenKumHamImipas </h2>
                            <p className="font-medium text-sm"> Filosofi Logo: </p>
                            <ul className="list-decimal ml-5 font-medium text-sm">
                                <li> Lingkaran: Memberikan perlindungan, keamanan, dan kesatuan, yang melambangkan komitmen untuk menjaga keamanan Negara dan melindungi masyarakat. </li>
                                <li> Siluet Peta Indonesia: Diambil dari kata Nusantara yang di gambar untuk merepresentasikan wilayah Indonesia dalam bentuk datar. </li>
                                <li> Tiga Pilar: Diambil dari Kemenkumham yang dibagi menjadi 3 Kementerian yaitu : Kementerian Hukum, Kementerian HAM, dan Kementerian Imigrasi dan Pemasyarakatan (Kemenimipas). </li>
                                <li> Pilar 1 (Kiri): Dari sisi Imigrasi dilihat seperti pintu gerbang yang diartikan sebagai penjaga pintu gerbang Negara dan dari sisi Polsuspas diartikan sebagai penjaga ketertiban, keamanan, dan pembinaan masyarakat. </li>
                                <li> Pilar 2 (Tengah): Melambangkan HAM, dengan garis vertikal membentuk sudut keatas menggambarkan bahwa segala sesuatu tindakan  haruslah berpatokan pada Ketuhanan yang Maha Esa dan garis horizontal dibawah menggambarkan Hak Asasi Manusia yang sama rata tanpa membedakan. </li>
                                <li> Pilar 3 (Kanan): Melambangkan Hukum tidak pernah memihak, setiap perbuatan akan ditimbang berat ringannya sebelum hukuman dijatuhkan. Tidak ada si kaya dan si miskin atau penguasa dan rakyat kecil semuanya apabila melakukan perbuatan melawan hukum akan mendapatkan perlakuan yang adil sesuai timbangan perbuatan yang dilakukan. </li>
                                <li> Dua Garis Tegak Lurus: Mempunyai makna demokrasi dan keadilan untuk mewujudkan kesejahteraan bangsa Indonesia. </li>
                                <li> Setiap Kementerian harus bertumpu pada Pancasila, UUD (Undang - Undang Dasar), NKRI (Negara Kesatuan Republik Indonesia), dan Bhineka Tunggal Ika, yang merupakan 4 Pilar Kebangsaan Indonesia, melalui 4 garis tegak lurus yang ada pada masing  -masing pilar. </li>
                                <li> Tali: Memberikan kekuatan dan stabilitas yang memiliki peran dalam menjadi perantara dengan jarak atau perbedaan. </li>
                            </ul>
                            <p className="font-medium text-sm"> Makna Warna: </p>
                            <ul className="flex flex-col gap-1 mt-1">
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#06213e] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Biru Tua: Sebagai dasar warna logo menjadi simbol profesionalisme dan kehandalan. </p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#880808] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Merah Darah: Memberikan kesan energi dan semangat yang penuh semangat juang dan keberanian. </p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#f0c05e] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Soft Orange: Melambangkan ketenangan dan kehangatan dalam sebuah hubungan. </p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#ffffff] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Putih: Memberikan kesan kehangatan dan ketulusan. </p>
                                </li>
                            </ul>
                        </article>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-center md:flex-nowrap">
                        <div className="flex flex-nowrap gap-2 overflow-x-auto scroll-smooth min-w-3xs flex-col">
                            <Image src={"/image/project/logo-cf-youth.png"} alt="Project-Design-Logo" width={1200} height={1200} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md bg-white p-2" />
                            <Image src={"/image/project/logo-cf-youth-kaos.png"} alt="Project-Design-Logo" width={1200} height={1200} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md bg-white p-2" />
                        </div>
                        <article className="bg-foreground p-2 rounded-md text-left">
                            <h2 className="font-poppins font-medium text-sm"> Visual Identity Concept: Youth Calvary Family </h2>
                            <p className="font-medium text-sm"> Filosofi Logo: </p>
                            <ul className="list-decimal ml-5 font-medium text-sm">
                                <li> Berbentuk segitiga dari tengah keatas melambangkan  Tritunggal Bapa, Putra, dan Roh Kudus yang memiliki kedudukan, kemuliaan, kuasa dan esensi yang sama. </li>
                                <li> Lingkaran ditengah mencerminkan kesatuan dan kebersamaan yang tidak terputus yang dapat menunjukkan dinamika keluarga yang terus berkembang dan mendukung satu sama lain. </li>
                                <li> Api melambangkan semangat yang terus menyala, membangkitkan semangat rohani yang berapi-api dalam melayani Tuhan dan sesama serta memberitakan injil kepada sesama. Bertumbuh dalam iman dan menjadi pribadi yang serupa dengan Kristus. Api juga dikaitkan dengan roh kudus. </li>
                                <li> Logo ini merupakan design abstrak modern yang terinspirasi oleh elemen api, dengan mengusung bentuk lengkung dinamis yang menyerupai aliran energi atau percikan semangat. Elemen utama terdiri dari kurva yang berlapis menyatu, membentuk siluet abstrak yang terasa bergerak dan hidup dengan arah api yang menjulang ke atas sebagai simbol optimis. </li>
                            </ul>
                            <p className="font-medium text-sm"> Makna Warna: </p>
                            <ul className="flex flex-col gap-1 mt-1">
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#A61301] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Merah Maroon: Memberikan makna kepercayaan diri dan kehangatan. </p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#FCD8B8] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Pastel: Menambahkan kesan ketenangan. </p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#FB8239] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Orange: Melambangkan semangat, kreativitas, dan kebahagiaan. </p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#E75710] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Orange Tua: Menggambarkan bentuk elegan, kuat, dan keberanian. </p>
                                </li>
                            </ul>
                        </article>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-center md:flex-nowrap">
                        <div className="flex flex-nowrap gap-2 overflow-x-auto scroll-smooth min-w-3xs flex-col">
                            <Image src={"/image/project/logo-green-cycle.png"} alt="Project-Design-Logo" width={2000} height={2000} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md bg-white p-2" />
                            <Image src={"/image/project/logo-green-cycle-kaos.png"} alt="Project-Design-Logo" width={1200} height={1200} priority className="flex-shrink-0 max-w-xs rounded-md shadow-md bg-white p-2" />
                        </div>
                        <article className="bg-foreground p-2 rounded-md text-left">
                            <h2 className="font-poppins font-medium text-sm"> Visual Identity Concept: Green Cycle </h2>
                            <p className="font-medium text-sm"> Filosofi Logo: </p>
                            <ul className="list-decimal ml-5 font-medium text-sm">
                                <li> Daun: Tumbuh dari tanah, sama seperti nama “Green Cycle” yang tumbuh dari niat baik untuk menjaga bumi. Mewakili kehidupan, pertumbuhan, dan kesegaran juga sebagai pembersihan. </li>
                                <li> Tetesan: Menunjukkan keberanian untuk memulai limbah, menghadapi sisi “kotor” untuk menghasilkan sesuatu yang bersih dan juga bermanfaat. Melambangkan sumber bahan utama yang berasal dari minyak jelantah. </li>
                                <li> Dua Daun: Melambangkan "Recycle" disesuaikan dengan bentuk dari konsep daur ulang yang berbentuk lingkaran. </li>
                            </ul>
                            <p className="font-medium text-sm"> Makna Warna: </p>
                            <ul className="flex flex-col gap-1 mt-1">
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#e6b65c] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Orange: Terinspirasi dari warna minyak jelantah alami yang sudah dipakai, memancarkan kehangatan, kejujuran, dan energi positif. </p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#4caf50] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Hijau Klasik: Bermakna keberlanjuntan dan kehidupan baru. </p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#bee5a0] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Hijau Muda: Warna yang lembut memberikan kesan alami, muda, dan harapan baru. </p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <div className="bg-[#000000] w-[100px] h-[40px] rounded-md flex-none"></div>
                                    <p className="font-medium text-sm flex-1"> Hitam: Memberikan kesan profesionalisme, ketegasan, dan kepercayaan </p>
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}