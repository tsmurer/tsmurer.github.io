export function loadNavbar() {
    console.log('loading navbar');
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = `
        <nav class="navbar">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      `;
    }
}
//# sourceMappingURL=navbar.js.map