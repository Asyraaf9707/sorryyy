// Ganti "lagu.mp3" dengan link atau nama fail lagu kau
var lagu = new Audio("lagu.mp3"); 

function lari(btn) {
     // Dia cuma jadi absolute BILA mouse sentuh je
    btn.style.position = "absolute";
    
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}
var lagu = new Audio("lagu.mp3");

function maafDiterima() {
    // 1. Main lagu
    lagu.play();
    lagu.loop = true;

    // 2. Tukar Gambar & Ayat Utama
    document.getElementById('gambar-utama').src = "pelukan.gif";
    document.getElementById('ayat').innerHTML = "Terima kasihhh Alyaa!❤️";

    // 3. Tunjukkan Ayat Tambahan
    var extra = document.getElementById('pesan-tambahan');
    extra.innerHTML = "Janji jangan marah-marah lagi tau! nnt cepat tua. hehehe";
    extra.style.display = "block"; // Bagi dia muncul

    // 4. Sorok butang & Zoom gambar
    document.querySelector('.bekas-butang').style.display = "none";
    document.getElementById('gambar-utama').style.transform = "scale(1.2)";
}
