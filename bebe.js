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

