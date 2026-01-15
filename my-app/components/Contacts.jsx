'use client';
import { useState } from "react";
import Image from "next/image";

const contactLeftData = [
    { text: 'jeremi.salvatores@gmail.com', src: '/assets/image/svg-icon/mail.svg' },
    { text: 'Medan, Sumatera Utara', src: '/assets/image/svg-icon/map-pin.svg' },
    { text: '0851 5624 6765', src: '/assets/image/svg-icon/phone.svg' },
];

const contactRightData = [
    { id: 'name', type: 'text', placeholder: 'Nama', minLength: 3, required: true, src: '/assets/image/svg-icon/user.svg' },
    { id: 'email', type: 'email', placeholder: 'Email', pattern: '^[a-zA-Z0-9._%+-]+@gmail\\.com$', required: true, src: '/assets/image/svg-icon/mail.svg' },
    { id: 'phone', type: 'tel', placeholder: 'No. Handphone', pattern: '^(\\+62|62|0)8[1-9][0-9]{7,10}$', required: true, src: '/assets/image/svg-icon/phone.svg' },
    { id: 'message', type: 'textarea', placeholder: 'Pesan', minLength: 10, required: true, src: '/assets/image/svg-icon/message-circle.svg' },
];

export default function Contacts() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [alert, setAlert] = useState({ show: false, text: '' });

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const validateInput = (item) => {
        const value = form[item.id].trim();
        if (item.required && !value) return false;
        if (item.minLength && value.length < item.minLength) return false;
        if (item.pattern) {
            let regex = new RegExp(item.pattern);
            if (!regex.test(value)) return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cleanPhone = form.phone.replace(/\s|-/g, '');
        const tempForm = { ...form, phone: cleanPhone };

        const allValid = contactRightData.every(item => {
            const value = tempForm[item.id].trim();
            if (item.required && !value) return false;
            if (item.minLength && value.length < item.minLength) return false;
            if (item.pattern) {
                let regex = new RegExp(item.pattern);
                if (!regex.test(value)) return false;
            }
            return true;
        });

        if (!allValid) {
            setAlert({ show: true, text: 'Harap isi semua kolom dengan benar.' });
            return;
        }
        const textMsg = `Halo, saya ingin menghubungi:\n\nNama: ${form.name}\nEmail: ${form.email}\nHandphone: ${form.phone}\nPesan: ${form.message}`;
        const encodedMessage = encodeURIComponent(textMsg);
        const phoneNumber = cleanPhone.replace(/\D/g, '');
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
            setTimeout(() => {
                window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
            }, 2000);
        } else {
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        }
        setAlert({ show: true, text: 'Berhasil dikirim!' });
        setForm({ name: '', email: '', phone: '', message: '' });
    };
    return (
        <>
        <section id="contact" className="container" >
            <h2>Kontak Saya</h2>
            <div className="contact-container">
                <div id="contact-content-left" className="contact-content">
                    {contactLeftData.map(item => (
                        <figure key={item.text}>
                            <Image src={item.src} width={24} height={24} alt="icon" />
                            <figcaption>{item.text}</figcaption>
                        </figure>
                    ))}
                </div>

                <div id="contact-content-right" className="contact-content">
                    {contactRightData.map(item => (
                        <div className="content-contact-right-group" key={item.id}>
                            <Image src={item.src} width={24} height={24} alt="icon" />
                            {item.type === 'textarea' ? (
                                <textarea id={item.id} placeholder={item.placeholder} minLength={item.minLength} required={item.required} value={form[item.id]} onChange={handleChange} />
                            ) : (
                                <input id={item.id} type={item.type} placeholder={item.placeholder} pattern={item.pattern} minLength={item.minLength} required={item.required} value={form[item.id]} onChange={handleChange} />
                            )}
                        </div>
                    ))}

                    <button type="submit" className="btn" onClick={handleSubmit}>
                        Kirim
                    </button>
                </div>
            </div>
        </section>

        {alert.show && (
            <div className="alert-container" id="alert">
                <div className="alert-content">
                    <p>{alert.text}</p>
                    <button type="button" onClick={() => setAlert({ show: false, text: '' })}>
                        Keluar
                    </button>
                </div>
            </div>
        )}
        </>
    );
}
