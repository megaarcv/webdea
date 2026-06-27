document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chatBox");
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");

    // Set waktu awal pesan masuk
    document.getElementById("initTime").innerText = getChatTime();

    // Fungsi mendapatkan jam menit saat ini
    function getChatTime() {
        const now = new Date();
        return now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    }

    // Database Jawaban Ahmad AI
    function dapatkanBalasanBot(pesanUser) {
        const text = pesanUser.toLowerCase();

        if (text.includes("halo") || text.includes("hai") || text.includes("p ")) {
            return "Halo juga Dea cantik! Lagi apa nih? 🌸";
        }
        if (text.includes("kangen") || text.includes("rindu")) {
            return "Ciyeee kangen ya? Padahal aku di sini mikirin kamu terus tiap detik tahu! 😳❤️";
        }
        if (text.includes("jalan") || text.includes("main")) {
            return "AYOK! Minggu ini ya? Jangan ngeles lagi, pokoknya aku jemput ganti baju yang rapi! 🚗💨";
        }
        if (text.includes("ganteng")) {
            return "Makasih loh pujiannya, jadi makin sayang kan akunya... 😎❤️";
        }
        if (text.includes("apa kabar") || text.includes("gimana")) {
            return "Kabar baik kalau liat kamu senyum pas baca chat ini. Hehe.";
        }
        if (text.includes("sayang") || text.includes("suka")) {
            return "Aduh jantung aku langsung jedag-jedug baca ini! Mau denger langsung dong pas kita jalan besok 😣❤️";
        }
        if (text.includes("lucu") || text.includes("wkwk") || text.includes("wkwkwk") || text.includes("haha")) {
            return "Nah gitu dong ketawa, makin manis tau kalau senyum begitu. 😍";
        }

        // Jawaban default jika kata kunci tidak cocok
        const balasanAcak = [
            "Eh gimana-gimana? Aku salting nih dichat kamu terus 🤣",
            "Niat banget kan aku bikin ginian? Makanya jalan yuk minggu ini! 😎",
            "Maksudnya gimana tuh? Coba jelasin pas kita ketemu langsung aja nanti.",
            "Kamu ngetik apa aja bebas kok, yang penting ujung-ujungnya kamu mau diajak jalan ya? ❤️"
        ];
        return balasanAcak[Math.floor(Math.random() * balasanAcak.length)];
    }

    // Fungsi Mengirim Pesan
    function kirimPesan() {
        const pesan = userInput.value.trim();
        if (pesan === "") return;

        // 1. Tampilkan pesan user ke layar
        const userBubble = document.createElement("div");
        userBubble.className = "message user-msg";
        userBubble.innerHTML = `<p>${pesan}</p><span class="time">${getChatTime()}</span>`;
        chatBox.appendChild(userBubble);

        // Bersihkan input teks
        userInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;

        // 2. Efek Loading Mengetik Bot (Delay 1 detik agar terasa nyata)
        setTimeout(() => {
            const balasan = dapatkanBalasanBot(pesan);
            const botBubble = document.createElement("div");
            botBubble.className = "message bot-msg";
            botBubble.innerHTML = `<p>${balasan}</p><span class="time">${getChatTime()}</span>`;
            chatBox.appendChild(botBubble);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
    }

    // Event Trigger Klik & Enter
    sendBtn.addEventListener("click", kirimPesan);
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") kirimPesan();
    });
});
