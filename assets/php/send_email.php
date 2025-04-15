<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari formulir
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);

    // Email tujuan
    $to = "asukasehat@gmail.com";
    $subject = "Pesan dari Kontak Form";
    $message = "Nama: $name\nEmail: $email\nHandphone: $phone";
    $headers = "From: $email";

    // Kirim email
    if (mail($to, $subject, $message, $headers)) {
        echo "Pesan Anda telah terkirim!";
    } else {
        echo "Terjadi kesalahan saat mengirim pesan.";
    }
} else {
    echo "Metode permintaan tidak valid.";
}
?>