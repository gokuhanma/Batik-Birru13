module.exports = {
    content: [
        './index.html', 
        './pages/about.html',
        './pages/olympiad.html',
        './pages/art.html',
        './pages/linguistic.html',
        './pages/rb.html',
        './pages/scout.html',
    ],
    theme: {
        extend: {
            fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            lexend: ['Lexend', 'sans-serif'],
            berkshire: ['Berkshire Swash', 'cursive'],
            lato : ['Lato', 'sans-serif']
            },
            colors: {
                'greentheme': '#88ff5a',
            }
        }
    }
}