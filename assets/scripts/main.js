const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const competitionMenu = document.getElementById('competitionMenu');
const competitionDropdown = document.getElementById('competitionDropdown');
const sidebarCompetitionMenu = document.getElementById('sidebarCompetitionMenu');
const sidebarCompetitionDropdown = document.getElementById('sidebarCompetitionDropdown');

    // Fungsi untuk membuka sidebar
    function openSidebar() {
      sidebar.classList.remove('translate-x-full');
      overlay.classList.remove('hidden');
    }

    // Fungsi untuk menutup sidebar
    function closeSidebar() {
      sidebar.classList.add('translate-x-full');
      overlay.classList.add('hidden');
      // Tutup dropdown yang terbuka di sidebar
      sidebarCompetitionDropdown.classList.add('hidden');
    }

    // Toggle sidebar saat menu hamburger diklik
    hamburgerMenu.addEventListener('click', function(event) {
      event.stopPropagation(); // Mencegah propagasi event
      if (sidebar.classList.contains('translate-x-full')) {
        openSidebar();
      } else {
        closeSidebar();
      }
    });

    // Menutup sidebar saat overlay diklik
    overlay.addEventListener('click', closeSidebar);

    // Mencegah klik di dalam sidebar agar tidak menutup sidebar
    sidebar.addEventListener('click', function(event) {
      event.stopPropagation();
    });

    // Toggle dropdown menu di desktop
    competitionMenu.addEventListener('click', function(event) {
      event.preventDefault(); // Mencegah perilaku default anchor
      competitionDropdown.classList.toggle('hidden');
    });

    // Toggle dropdown menu di sidebar
    sidebarCompetitionMenu.addEventListener('click', function(event) {
      event.preventDefault(); // Mencegah perilaku default button
      sidebarCompetitionDropdown.classList.toggle('hidden');
    });

    // Klik di mana saja untuk menutup dropdown di desktop
    window.addEventListener('click', function(event) {
      // Untuk dropdown desktop
      if (!event.target.closest('#competitionMenu')) {
        competitionDropdown.classList.add('hidden');
      }
    });

    //Menutup sidebar dengan tombol Esc
    window.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeSidebar();
        competitionDropdown.classList.add('hidden');
      }
    });
// Animasi Count dengan Increment yang Berbeda
let valueDisplays = document.querySelectorAll(".num");
let interval = 2000; // Durasi total animasi dalam milidetik

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val").replace(/[^0-9]/g, '')); // Hapus format dan ambil hanya angka
  let increment = endValue < 1000 ? 1 : Math.ceil(endValue / 100); // Jika endValue kurang dari 1000, increment = 1, jika tidak, gunakan pembagi 100
  let duration = interval / (endValue / increment); // Durasi setiap update
  let counter = setInterval(function() {
    startValue += increment;
    if (startValue > endValue) startValue = endValue; // Pastikan tidak melebihi endValue
    valueDisplay.textContent = startValue.toLocaleString("id-ID");
    if (startValue >= endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// Timeline Lomba
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if(entry.isIntersecting){
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.1 });

  items.forEach(item => {
      observer.observe(item);
  });
});

// Fungsi untuk menambah kelas 'visible' ketika elemen masuk viewport
function onScroll() {
  const items = document.querySelectorAll('.timeline-item');
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      item.classList.add('visible');
    }
  });
}

// Event listener untuk scroll
window.addEventListener('scroll', onScroll);

var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          this.parentElement.classList.toggle("active");

          var pannel = this.nextElementSibling;

          if (pannel.classList.contains("hidden")) {
            pannel.classList.remove("hidden");
          } else {
            pannel.classList.add("hidden");
          }
        });
  }
// Objek untuk menyimpan link berdasarkan pilihan cabang
// Link Juknis umum
const juknisOlym = "https://drive.google.com/drive/folders/1DRqfZMcQgW-ECqQMfZduBYaVQr-rafgB?usp=drive_link";
const juknisArt = "https://drive.google.com/drive/folders/1QLgMlBAhjlq2uV5MqIwup3WlmIHu_xN1?usp=drive_link"
const juknisScout = "https://drive.google.com/drive/folders/1afTQj9qD3Hz-RpBltu7rt9Z8tVo4DksZ?usp=drive_link"
const juknisLing = "https://drive.google.com/drive/folders/1tZlFAbSMxvEKlQFU6u2R6cF_K4pVwH3V?usp=drive_link"
const juknisRB = "https://drive.google.com/drive/folders/1pdVzMNm3TfnbLZeoNIqyzPEkSgSWUiwY?usp=drive_link"

// Birru Olympiad data
const links = {
  biologi: {
    daftar: "https://forms.gle/3ULWft7J7fJLWk2LA",
    juknis: juknisOlym 
  },
  fisika: {
    daftar: "https://forms.gle/meTLMGcmurUkFdEY8",
    juknis: juknisOlym 
  },
  matematika: {
    daftar: "https://forms.gle/gycDdMfJaEwLA1vS8",
    juknis: juknisOlym
  },
  ips: {
    daftar: "https://forms.gle/pa9T2L5y8gZ6bw7JA",
    juknis: juknisOlym 
  },
  "bahasa-inggris": {
    daftar: "https://forms.gle/TP6KHqp1eeYZDAQD7",
    juknis: juknisOlym
  },
  // Birru Art
  solosong :{
    daftar: "https://forms.gle/cUeTJUZVeic5irPD6",
    juknis: juknisArt
  },
  tarikreasi :{
    daftar: "https://forms.gle/JXhVi8qj3tMiDW1J8",
    juknis: juknisArt
  },
  desain :{
    daftar: "https://forms.gle/aXxb76dfWGzCgy8Z9",
    juknis: juknisArt
  },
  // Birru Scout
  pbb :{
    daftar: "https://forms.gle/ydeVLCzgANNPsHxq5",
    juknis: juknisScout
  },
  // Birru Linguistic
  storytel :{
    daftar: "https://forms.gle/9o8EEw35BzQxFhX86",
    juknis: juknisLing
  },
  speech :{
    daftar: "https://forms.gle/EjX2rtKM1oYnQden6",
    juknis: juknisLing
  },
  cerpen :{
    daftar: "https://forms.gle/oZTwWWcZuNc3LkoP6",
    juknis: juknisLing,
    karyaling: "https://forms.gle/HyBbXs8jpfmQPii27"
  },
  puisi :{
    daftar: "https://forms.gle/WcSYdVuXKfZhiNc97",
    juknis: juknisLing,
    karyaling: "https://forms.gle/ejjwXjS6XaUTjfxv7"
  },
  // Romansa Birru
  mtq :{
    daftar: "https://forms.gle/XCHUW7Rg7WfRQwrz9",
    juknis: juknisRB,
    karyaerbe: "https://forms.gle/Yup2E6aJwefWJRPr9",
  },
  pidatoislami :{
    daftar: "https://forms.gle/hxv3tE7sZN1juSiEA",
    juknis: juknisRB,
    karyaerbe: "https://forms.gle/KVRxPbWGqwEd26QEA"
  },
  laguislami :{
    daftar: "https://forms.gle/udW8tniPXHA5YnD56",
    juknis: juknisRB,
    karyaerbe: "https://forms.gle/Mwvd27mXmRtMVMqU6"
  },
  tahfizhpa :{
    daftar: "https://forms.gle/WKYT6gFMbjydPfz16",
    juknis: juknisRB
  },
  tahfizhpi :{
    daftar: "https://forms.gle/Uh7ZPVUk8T1cgtZL9",
    juknis: juknisRB
  },
  msq :{
    daftar: "https://forms.gle/D4CurXinUVtvkfTQA",
    juknis: juknisRB,
    karyaerbe: "https://forms.gle/sGftBZCGAk3m21Ti8"
  },
  cerpenislami :{
    daftar: "https://forms.gle/L43jhdmDMRBns8LA8",
    juknis: juknisRB,
    karyaerbe: "https://forms.gle/rJyRmZZ8qKs5aoam8"
  },
  posterislami :{
    daftar: "https://forms.gle/BwK6Sv34R8grQxLt7",
    juknis: juknisRB,
    karyaerbe: "https://forms.gle/b49LPzdy89g2vvBg8"
  },
};

const dropdown = document.getElementById('cabang-lomba');
const btnDaftar = document.getElementById('btn-daftar');
const btnJuknis = document.getElementById('btn-juknis');
const btnKaryaerbe = document.getElementById('btn-karyaerbe');
const btnKaryaling = document.getElementById('btn-karyaling');

dropdown.addEventListener('change', function () {
  const selectedValue = dropdown.value;

  if (links[selectedValue]) {
    btnDaftar.href = links[selectedValue].daftar;
    btnJuknis.href = links[selectedValue].juknis;
    if (links[selectedValue].karyaling) {
      btnKaryaling.href = links[selectedValue].karyaling;
      btnKaryaling.style.display = "block"; // Tampilkan tombol
    } else {
      btnKaryaling.href = '#';
      btnKaryaling.style.display = "none"; // Sembunyikan jika tidak ada URL
    }
  } else {
    btnDaftar.href = '#';
    btnJuknis.href = '#';
    btnKaryaling.style.display = "none";
  }
});

dropdown.addEventListener('change', function () {
  const selectedValue = dropdown.value;

  if (links[selectedValue]) {
    btnDaftar.href = links[selectedValue].daftar;
    btnJuknis.href = links[selectedValue].juknis;
    if (links[selectedValue].karyaerbe) {
      btnKaryaerbe.href = links[selectedValue].karyaerbe;
      btnKaryaerbe.style.display = "block"; // Tampilkan tombol
    } else {
      btnKaryaerbe.href = '#';
      btnKaryaerbe.style.display = "none"; // Sembunyikan jika tidak ada URL
    }
  } else {
    btnDaftar.href = '#';
    btnJuknis.href = '#';
    btnKaryaerbe.style.display = "none";
  }
});

// Event listener untuk mengubah link tombol ketika pilihan dropdown berubah
dropdown.addEventListener('change', function () {
  const selectedValue = dropdown.value;

  if (links[selectedValue]) {
    btnDaftar.href = links[selectedValue].daftar;
    btnJuknis.href = links[selectedValue].juknis;
    btnKaryaerbe.href = links[selectedValue].karyaerbe;
    btnKaryaling.href = links[selectedValue].karyaling;
  } else {
    // Jika tidak ada yang dipilih, kembalikan href ke #
    btnDaftar.href = '#';
    btnJuknis.href = '#';
    btnKaryaerbe.href = '#';
    btnKaryaling.href = '#';
  }
});