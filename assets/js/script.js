function createBubble() {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");

    // Ukuran acak
    const size = Math.random() * 40 + 30; // 30 - 70 px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Posisi horizontal (left: 0% - 100%)
    const left = Math.random() * 100;
    bubble.style.left = `${left}%`;

    // Posisi vertical awal (bottom per 10%)
    const step = 10;
    const maxSteps = 10;
    const stepIndex = Math.floor(Math.random() * maxSteps); // 0 - 9
    const bottom = step * stepIndex;
    bubble.style.bottom = `${bottom}%`;

    // Masukkan ke container
    document.querySelector(".bubble-container").appendChild(bubble);

    // Hapus setelah 5 detik
    setTimeout(() => {
      bubble.remove();
    }, 5000);
  }

  // Interval buat bubble tiap 500ms
  setInterval(createBubble, 700);