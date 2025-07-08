import { useState } from 'react';

export default function Sidebar() {
  const [inactive, setInactive] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const toggleSidebar = (e) => {
    e.preventDefault();
    setInactive(!inactive);
  };

  const toggleSubMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div id="sidebar" className={inactive ? 'inactive' : ''}>
      <div className="inner">

        {/* Search */}
        <section id="search" className="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="Search" />
          </form>
        </section>

        {/* Menu */}
        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li><a href="index.html">Homepage</a></li>
            <li><a href="generic.html">Generic</a></li>
            <li><a href="elements.html">Elements</a></li>

            <li className={openMenus[1] ? 'active' : ''}>
              <span className="opener" onClick={() => toggleSubMenu(1)}>Submenu</span>
              <ul>
                <li><a href="#">Lorem Dolor</a></li>
                <li><a href="#">Ipsum Adipiscing</a></li>
                <li><a href="#">Tempus Magna</a></li>
                <li><a href="#">Feugiat Veroeros</a></li>
              </ul>
            </li>

            <li><a href="#">Etiam Dolore</a></li>
            <li><a href="#">Adipiscing</a></li>

            <li className={openMenus[2] ? 'active' : ''}>
              <span className="opener" onClick={() => toggleSubMenu(2)}>Another Submenu</span>
              <ul>
                <li><a href="#">Lorem Dolor</a></li>
                <li><a href="#">Ipsum Adipiscing</a></li>
                <li><a href="#">Tempus Magna</a></li>
                <li><a href="#">Feugiat Veroeros</a></li>
              </ul>
            </li>

            <li><a href="#">Maximus Erat</a></li>
            <li><a href="#">Sapien Mauris</a></li>
            <li><a href="#">Amet Lacinia</a></li>
          </ul>
        </nav>

        {/* Section with mini-posts */}
        <section>
          <header className="major">
            <h2>Ante interdum</h2>
          </header>
          <div className="mini-posts">
            <article>
              <a href="#" className="image"><img src="images/pic07.jpg" alt="" /></a>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
            <article>
              <a href="#" className="image"><img src="images/pic08.jpg" alt="" /></a>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
            <article>
              <a href="#" className="image"><img src="images/pic09.jpg" alt="" /></a>
              <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
            </article>
          </div>
          <ul className="actions">
            <li><a href="#" className="button">More</a></li>
          </ul>
        </section>

        {/* Section Get in touch */}
        <section>
          <header className="major">
            <h2>Get in touch</h2>
          </header>
          <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
          <ul className="contact">
            <li className="icon solid fa-envelope"><a href="mailto:information@untitled.tld">information@untitled.tld</a></li>
            <li className="icon solid fa-phone">(000) 000-0000</li>
            <li className="icon solid fa-home">
              1234 Somewhere Road #8254<br />
              Nashville, TN 00000-0000
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer id="footer">
          <p className="copyright">
            &copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.
          </p>
        </footer>

      </div>

      {/* Toggle Sidebar Button */}
      <a href="#" className="toggle" onClick={toggleSidebar} aria-label="Toggle Sidebar">&#9776;</a>
    </div>
  );
}
