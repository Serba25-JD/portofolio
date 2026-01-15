export default function Abouts() {
    const text = [
        'Halo! Saya Jeremi Salvatores Sihotang.',
        'Saya lulusan SMK Swasta Eka Prasetya Medan jurusan Teknik Komputer dan Jaringan (TKJ). Saya memiliki ketertarikan dan pengalaman dalam pengembangan website, pemrograman Python, serta pengelolaan konten digital. Saya menguasai HTML5, CSS3, dan JavaScript, serta mampu membuat tampilan yang responsif dengan Flexbox dan Grid. Saya juga mampu membuat API menggunakan Python Flask dan mengerti teknik web scraping.',
        'Selain itu, saya mahir menggunakan WordPress dengan Elementor dan memahami SEO baik di dalam maupun di luar WordPress. Saya juga terbiasa menggunakan Microsoft Word, Microsoft Excel, Adobe Photoshop, dan Filmora untuk kebutuhan desain dan pengeditan video.',
        'Sebagai nilai tambah, saya mampu mengetik 10 jari dengan lancar, meningkatkan produktivitas saya dalam bekerja. Saya juga telah mengikuti kursus online dari Dicoding dan RevoU Fundamental Course untuk memperdalam kemampuan teknis saya.'
    ];
    return (
        <section id="about" className="container">
            <h2> Tentang Saya </h2>
            {text.map((item, index) => (
                <p key={index}> {item} </p>
            ))}
        </section>
    )
};