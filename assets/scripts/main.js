const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', displayMenu);

function displayMenu() {
    // Toggle menu visibility
    menu.classList.toggle('hidden');
    
    // Menambahkan styling ketika menu ditampilkan
    if (!menu.classList.contains('hidden')) {
        menu.classList.add('absolute', 'top-14', 'w-full', 'left-0', 'bg-blue-900', 'divide-blue-950', 'divide-y-2');
    } else {
        // Menghapus styling ketika menu tersembunyi
        menu.classList.remove('absolute', 'top-14', 'w-full', 'left-0', 'bg-blue-900', 'divide-blue-950', 'divide-y-2');
    }
}

document.getElementById('competitionMenu').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const dropdown = document.getElementById('competitionDropdown');
    if (dropdown.classList.contains('hidden')) {
      dropdown.classList.remove('hidden'); // Show the dropdown
    } else {
      dropdown.classList.add('hidden'); // Hide the dropdown
    }
  });

  // Click Anywhere to Close
window.addEventListener('click', function(event) {
    const dropdown = document.getElementById('competitionDropdown');
    if (!event.target.matches('#competitionMenu, #competitionMenu *')) {
      dropdown.classList.add('hidden');
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

// Objek untuk menyimpan link berdasarkan pilihan cabang
const links = {
  biologi: {
    daftar: "https://forms.gle/3ULWft7J7fJLWk2LA",
    juknis: "xx"
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

