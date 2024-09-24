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


// Objek untuk menyimpan link berdasarkan pilihan cabang
const links = {
  // Birru Olympiad
  biologi: {
    daftar: "https://forms.gle/3ULWft7J7fJLWk2LA",
    juknis: "https://drive.google.com/drive/folders/1DRqfZMcQgW-ECqQMfZduBYaVQr-rafgB?usp=drive_link"
  },
  fisika: {
    daftar: "https://forms.gle/meTLMGcmurUkFdEY8",
    juknis: "xx"
  },
  matematika: {
    daftar: "https://forms.gle/gycDdMfJaEwLA1vS8",
    juknis: "xx"
  },
  ips: {
    daftar: "https://forms.gle/pa9T2L5y8gZ6bw7JA",
    juknis: "xx"
  },
  "bahasa-inggris": {
    daftar: "https://forms.gle/TP6KHqp1eeYZDAQD7",
    juknis: "xx"
  },
  // Birru Art
  solosong :{
    daftar: "https://forms.gle/cUeTJUZVeic5irPD6",
    juknis: ""
  },
  tarikreasi :{
    daftar: "https://forms.gle/JXhVi8qj3tMiDW1J8",
    juknis: ""
  },
  desain :{
    daftar: "https://forms.gle/aXxb76dfWGzCgy8Z9",
    juknis: ""
  },
  // Birru Scout
  pbb :{
    daftar: "https://forms.gle/ydeVLCzgANNPsHxq5",
    juknis: ""
  },
  // Birru Linguistic
  storytel :{
    daftar: "https://forms.gle/9o8EEw35BzQxFhX86",
    juknis: ""
  },
  speech :{
    daftar: "https://forms.gle/EjX2rtKM1oYnQden6",
    juknis: ""
  },
  cerpen :{
    daftar: "https://forms.gle/oZTwWWcZuNc3LkoP6",
    juknis: ""
  },
  puisi :{
    daftar: "https://forms.gle/WcSYdVuXKfZhiNc97",
    juknis: ""
  },
  // Romansa Birru
  mtq :{
    daftar: "https://forms.gle/XCHUW7Rg7WfRQwrz9",
    juknis: ""
  },
  pidatoislami :{
    daftar: "https://forms.gle/hxv3tE7sZN1juSiEA",
    juknis: ""
  },
  laguislami :{
    daftar: "https://forms.gle/udW8tniPXHA5YnD56",
    juknis: ""
  },
  tahfizhpa :{
    daftar: "https://forms.gle/WKYT6gFMbjydPfz16",
    juknis: ""
  },
  tahfizhpi :{
    daftar: "https://forms.gle/Uh7ZPVUk8T1cgtZL9",
    juknis: ""
  },
  msq :{
    daftar: "https://forms.gle/D4CurXinUVtvkfTQA",
    juknis: ""
  },
  cerpenislami :{
    daftar: "https://forms.gle/L43jhdmDMRBns8LA8",
    juknis: ""
  },
  posterislami :{
    daftar: "https://forms.gle/BwK6Sv34R8grQxLt7",
    juknis: ""
  },
};

const dropdown = document.getElementById('cabang-lomba');
const btnDaftar = document.getElementById('btn-daftar');
const btnJuknis = document.getElementById('btn-juknis');

// Event listener untuk mengubah link tombol ketika pilihan dropdown berubah
dropdown.addEventListener('change', function () {
  const selectedValue = dropdown.value;

  if (links[selectedValue]) {
    btnDaftar.href = links[selectedValue].daftar;
    btnJuknis.href = links[selectedValue].juknis;
  } else {
    // Jika tidak ada yang dipilih, kembalikan href ke #
    btnDaftar.href = '#';
    btnJuknis.href = '#';
  }
});

// FAQ
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

      