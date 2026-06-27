document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const m1 = document.getElementById("mission1");
    const m2 = document.getElementById("mission2");
    const m3 = document.getElementById("mission3");
    const analysis = document.getElementById("analysis");
    const final = document.getElementById("finalMission");
    const popup = document.getElementById("successPopup");

    // Jalankan Misi Pertama
    document.getElementById("startMission").addEventListener("click", () => {
        intro.classList.add("hidden");
        m1.classList.remove("hidden");
    });

    // Pindah Misi
    document.querySelector(".correct").addEventListener("click", () => {
        m1.classList.add("hidden");
        m2.classList.remove("hidden");
    });

    document.querySelector(".correct2").addEventListener("click", () => {
        m2.classList.add("hidden");
        m3.classList.remove("hidden");
    });

    document.querySelector(".correct3").addEventListener("click", () => {
        m3.classList.add("hidden");
        analysis.classList.remove("hidden");
        startTerminal();
    });

    // Efek Tombol Menghindar (Wrong Buttons)
    const moveButtons = document.querySelectorAll(".moveBtn");
    moveButtons.forEach(btn => {
        const moveRandomly = () => {
            const x = Math.random() * (window.innerWidth - btn.clientWidth - 50);
            const y = Math.random() * (window.innerHeight - btn.clientHeight - 50);
            btn.style.position = "fixed";
            btn.style.left = `${x}px`;
            btn.style.top = `${y}px`;
        };
        btn.addEventListener("mouseover", moveRandomly);
        btn.addEventListener("click", moveRandomly);
    });

    // Efek Mengetik di Terminal Analisa
    function startTerminal() {
        const text = [
            "> Mengumpulkan data jawaban...",
            "> Menganalisa tingkat keniatan web ini...",
            "> Mendeteksi detak jantung pembuat web...",
            "> Hasil: Ahmad fix naksir Dea Adelia. ❤",
            "> Membuka berkas rahasia final..."
        ];
        let line = 0;
        let charIdx = 0;
        const terminal = document.getElementById("terminalText");

        function type() {
            if (line < text.length) {
                if (charIdx < text[line].length) {
                    terminal.innerHTML += text[line].charAt(charIdx);
                    charIdx++;
                    setTimeout(type, 30);
                } else {
                    terminal.innerHTML += "<br>";
                    line++;
                    charIdx = 0;
                    setTimeout(type, 800);
                }
            } else {
                setTimeout(() => {
                    analysis.classList.add("hidden");
                    final.classList.remove("hidden");
                }, 1500);
            }
        }
        type();
    }

    // Tombol "GAK MAU" Menghindar di Bagian Akhir
    const noBtn = document.getElementById("noBtn");
    noBtn.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth - 50);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight - 50);
        noBtn.style.position = "fixed";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // Jawaban Sukses (MAU)
    document.getElementById("yesBtn").addEventListener("click", () => {
        popup.style.display = "block";
        
        // Ganti nomor WhatsApp di bawah ini dengan nomor Anda (format internasional tanpa '+')
        const nomorWA = "6281234567890"; 
        const pesan = encodeURIComponent("Misi Selesai Ahmad! Aku mau kok diajak jalan minggu ini 😳❤");
        
        setTimeout(() => {
            window.location.href = `https://whatsapp.com{nomorWA}&text=${pesan}`;
        }, 3000);
    });
});
