const navbarnav = document.querySelector(".navbar-nav");
//ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};
//click diluar sidebare untuk close nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  const modalDesc = document.getElementById("modalDesc");
  const closeModal = document.getElementsByClassName("close")[0];

  document.querySelectorAll(".gallery img").forEach((img) => {
    img.addEventListener("click", function () {
      modal.classList.add("show");
      modal.style.display = "flex";
      setTimeout(() => {
        modal.classList.add("fade-in");
      }, 10); // Sedikit delay agar transisi terlihat lebih smooth
      modalImg.src = this.src;
      captionText.innerText = this.alt || "Judul tidak tersedia";
      modalDesc.innerText = "Deskripsi gambar akan ditampilkan di sini.";
    });
  });

  closeModal.onclick = function () {
    modal.classList.remove("fade-in");
    setTimeout(() => {
      modal.classList.remove("show");
      modal.style.display = "none";
    }, 300);
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.classList.remove("fade-in");
      setTimeout(() => {
        modal.classList.remove("show");
        modal.style.display = "none";
      }, 300);
    }
  };
});
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  const modalDesc = document.getElementById("modalDesc");
  const closeModal = document.getElementsByClassName("close")[0];

  // Daftar deskripsi untuk setiap gambar
  const descriptions = {
    "LKTIN BFUB 24 2022":
      "Lomba Karya Tulis Ilmiah Nasional edisi ke-24 yang diadakan oleh BFUB Universitas Pendidikan Indonesia (UPI) tahun 2022.",
    "TID 2023":
      "Thailand Inventors’ Day, kompetisi inovasi tingkat internasional di Thailand.",
    "IID 2023": "Indonesia Inventors Day 2023 yang berlangsung di Bali.",
    "LKTIN BFUB 25 2023":
      "Lomba Karya Tulis Ilmiah Nasional edisi ke-25 yang diselenggarakan oleh Universitas Pendidikan Indonesia (UPI) pada tahun 2023.",
    "ESSAY MSI ACEH 2023":
      "Kompetisi Esai MSI (Masyarakat Sejarah Indonesia) Aceh yang berlangsung pada tahun 2023.",
    "JDIE 2024": "Japan Design & Invention Expo 2024 di Jepang.",
    "IID 2024": "Indonesia Inventors Day 2024 yang berlangsung di Bali.",
  };

  document
    .querySelector(".gallery")
    .addEventListener("click", function (event) {
      if (event.target.tagName === "IMG") {
        modal.classList.add("show");
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("fade-in"), 10);

        modalImg.src = event.target.src;
        captionText.innerText = event.target.alt || "Judul tidak tersedia";
        modalDesc.innerText =
          descriptions[event.target.alt] || "Deskripsi belum tersedia.";
      }
    });

  // Event listener untuk tombol close dan klik di luar modal
  function closeModalFunction() {
    modal.classList.add("fade-out");
    setTimeout(() => {
      modal.classList.remove("show", "fade-in", "fade-out");
      modal.style.display = "none";
    }, 300);
  }

  closeModal.onclick = closeModalFunction;
  window.onclick = function (event) {
    if (event.target === modal) closeModalFunction();
  };
});
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var images = document.querySelectorAll(".achievement-img");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var modalDesc = document.getElementById("modalDesc");
  var span = document.getElementsByClassName("close")[0];

  images.forEach((img) => {
    img.onclick = function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      modalDesc.innerHTML = "Deskripsi dari " + this.alt;
      modal.classList.add("show"); // Tambahkan class show
    };
  });

  // Tutup modal saat klik tombol close
  span.onclick = function () {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300); // Tunggu animasi selesai sebelum menyembunyikan modal
  };

  // Tutup modal saat klik di luar modal-content
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    }
  };
});
