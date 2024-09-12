const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', displayMenu);

//function displayMenu() {
    // Toggle menu visibility
    menu.classList.toggle('hidden');
    
    // Menambahkan styling ketika menu ditampilkan
    if (!menu.classList.contains('hidden')) {
        menu.classList.add('absolute', 'top-14', 'w-full', 'left-0', 'bg-blue-900', 'divide-blue-950', 'divide-y-2');
    } else {
        // Menghapus styling ketika menu tersembunyi
        menu.classList.remove('absolute', 'top-14', 'w-full', 'left-0', 'bg-blue-900', 'divide-blue-950', 'divide-y-2');
    }
//}
