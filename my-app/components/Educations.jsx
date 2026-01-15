'use client';
import { useState } from "react";
import Image from "next/image";

function Education({ school, major }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure onClick={() => setOpen(!open)}>
        <Image src={open ? "/assets/image/svg-icon/chevron-up.svg" : "/assets/image/svg-icon/chevron-down.svg"} width={24} height={24} alt="toggle" priority />
        <figcaption>{school}</figcaption>
      </figure>

      {open && (
        <div className="extra-dropdown">
          <p>{major}</p>
        </div>
      )}
    </>
  );
}

export default function Educations() {
  return (
    <section id="educations" className="container">
      <h2> Pendidikan Saya </h2>
       <Education school="SMK Swasta Eka Prasetya" major="Teknik Komputer Jaringan" />
       <Education school="Universitas Pembangunan Pancabudi" major="S1 Teknologi Informasi" />
    </section>
  )
}