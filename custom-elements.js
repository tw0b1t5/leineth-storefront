class AppDrawer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <aside class="mdc-drawer app-drawer">
        <div class="mdc-drawer__header">
          <h3 class="mdc-drawer__title">Mail</h3>
          <h6 class="mdc-drawer__subtitle">email@material.io</h6>
        </div>
        <div class="mdc-drawer__content">
          <nav class="mdc-list">
            <a class="mdc-list-item mdc-list-item--activated" href="#" aria-current="page">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">checkroom</i>
              <span class="mdc-list-item__text">Inbox</span>
            </a>
            <a class="mdc-list-item" href="#">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">checkroom</i>
              <span class="mdc-list-item__text">Outgoing</span>
            </a>
            <div class="mdc-list-divider" role="separator"></div>
            <a class="mdc-list-item" href="#">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">checkroom</i>
              <span class="mdc-list-item__text">Accesorios</span>
            </a>
            <a class="mdc-list-item" href="#">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">checkroom</i>
              <span class="mdc-list-item__text">Calzado</span>
            </a>
            <a class="mdc-list-item" href="#">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">checkroom</i>
              <span class="mdc-list-item__text">Tops</span>
            </a>
            <a class="mdc-list-item" href="#">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">checkroom</i>
              <span class="mdc-list-item__text">Pantalones</span>
            </a>
            <a class="mdc-list-item" href="#">
              <span class="mdc-list-item__ripple"></span>
              <i class="material-icons mdc-list-item__graphic" aria-hidden="true">checkroom</i>
              <span class="mdc-list-item__text">Vestidos</span>
            </a>
          </nav>
        </div>
      </aside>
    `
  }
}

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="storefront-footer">
        <div class="mdc-layout-grid">
          <div class="mdc-layout-grid__inner">
            <section class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" id="footer-about">
              <div class="mdc-typography--subtitle1">[Nombre de la marca]</div>
              <p class="mdc-typography--body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, fuga! Incidunt corrupti beatae ad aspernatur cupiditate consectetur dicta repellendus ut explicabo officiis voluptates aperiam laudantium, facilis fuga recusandae veritatis ipsum.</p>
            </section>
            <section class="footer-navigation mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-12-mobile" id="footer-list-1">
              <ul class="mdc-typography--body2">
                <li><a href="#">Enlace 1</a></li>
                <li><a href="#">Enlace 2</a></li>
                <li><a href="#">Enlace 3</a></li>
                <li><a href="#">Enlace 4</a></li>
                <li><a href="#">Enlace 5</a></li>
                <li><a href="#">Enlace 6</a></li>
              </ul>
            </section>
            <section class="footer-navigation mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-12-mobile" id="footer-list-2">
              <ul class="footer-list mdc-typography--body2">
                <li><a href="#">Enlace 1</a></li>
                <li><a href="#">Enlace 2</a></li>
                <li><a href="#">Enlace 3</a></li>
                <li><a href="#">Enlace 4</a></li>
              </ul>
            </section>
            <section class="footer-navigation mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-12-mobile" id="footer-list-3">
              <ul class="footer-list mdc-typography--body2">
                <li><a href="#">Enlace 1</a></li>
                <li><a href="#">Enlace 2</a></li>
                <li><a href="#">Enlace 3</a></li>
                <li><a href="#">Enlace 4</a></li>
                <li><a href="#">Enlace 5</a></li>
              </ul>
            </section>
            <section class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" id="footer-social-links">
              <ul class="footer-social-list">
                <li>
                  <a class="mdc-tooltip--top" id="footer-fb-link" href="#" rel="noreferrer nofollow" data-mdc-tooltip="Facebook">
                    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                      <path d="M13.524 19.608v-7.59h2.547l.382-2.958h-2.93V7.17c0-.856.238-1.44 1.467-1.44h1.566V3.084c-.271-.036-1.2-.117-2.282-.117-2.259 0-3.805 1.379-3.805 3.91V9.06H7.915v2.958h2.554v7.59H1.082A1.082 1.082 0 0 1 0 18.526V1.082C0 .484.484 0 1.082 0h17.444c.597 0 1.082.484 1.082 1.082v17.444c0 .597-.485 1.082-1.082 1.082h-5.002z" fill-rule="evenodd"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a class="mdc-tooltip--top" id="footer-ig-link" href="#" rel="noreferrer nofollow" data-mdc-tooltip="Instagram">
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                      <path d="M9 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.671-.163.42-.358.72-.673 1.035-.315.315-.615.51-1.035.673-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.788 2.788 0 0 1-1.036-.673 2.788 2.788 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052zM9 0C6.556 0 6.25.01 5.29.054 4.33.098 3.676.25 3.104.473A4.412 4.412 0 0 0 1.51 1.51c-.5.5-.809 1.002-1.039 1.594C.25 3.677.098 4.33.054 5.289.01 6.25 0 6.556 0 9s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.594.5.5 1.002.809 1.594 1.039.572.222 1.226.374 2.184.418C6.25 17.99 6.556 18 9 18s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.418a4.412 4.412 0 0 0 1.594-1.039c.5-.5.808-1.002 1.038-1.594.223-.572.375-1.226.419-2.184C17.99 11.75 18 11.444 18 9s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 16.49 1.51c-.5-.5-1.002-.808-1.594-1.038C14.323.25 13.67.098 12.711.054 11.75.01 11.444 0 9 0zm0 4.378a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244zM9 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.884-7.804a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0z" fill-rule="nonzero"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a class="mdc-tooltip--top" id="footer-wpp-link" href="#" rel="noreferrer nofollow" data-mdc-tooltip="WhatsApp">
                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                      <path d="M 15.369 2.635 C 13.672 0.937 11.415 0.001 9.01 0 C 4.054 0 0.022 4.031 0.02 8.986 C 0.019 10.57 0.433 12.117 1.219 13.479 L 0 18 L 4.71 16.887 C 6.023 17.603 7.501 17.98 9.005 17.981 L 9.009 17.981 C 13.963 17.981 17.996 13.949 17.999 8.995 C 18.001 6.592 17.067 4.334 15.369 2.635 Z M 13.408 12.199 C 13.221 12.723 12.304 13.229 11.892 13.266 C 11.479 13.304 11.093 13.452 9.196 12.704 C 6.913 11.804 5.471 9.463 5.359 9.314 C 5.247 9.164 4.442 8.096 4.442 6.991 C 4.442 5.886 5.023 5.342 5.229 5.118 C 5.435 4.893 5.678 4.837 5.828 4.837 C 5.978 4.837 6.128 4.837 6.259 4.843 C 6.419 4.849 6.596 4.857 6.764 5.231 C 6.964 5.675 7.401 6.786 7.456 6.898 C 7.512 7.011 7.55 7.142 7.475 7.292 C 7.401 7.441 7.363 7.535 7.251 7.666 C 7.139 7.798 7.015 7.959 6.915 8.059 C 6.802 8.171 6.685 8.293 6.816 8.518 C 6.947 8.743 7.397 9.478 8.065 10.073 C 8.923 10.838 9.646 11.074 9.871 11.188 C 10.096 11.3 10.227 11.281 10.358 11.131 C 10.489 10.982 10.92 10.476 11.069 10.251 C 11.218 10.026 11.369 10.064 11.575 10.138 C 11.781 10.213 12.885 10.757 13.109 10.869 C 13.334 10.982 13.484 11.038 13.54 11.131 C 13.595 11.224 13.595 11.674 13.408 12.199 Z" fill-rule="nonzero"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a class="mdc-tooltip--top" id="footer-tw-link" href="#" rel="noreferrer nofollow" data-mdc-tooltip="Twitter">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                      <path d="M 24 4.479 C 23.103 4.882 22.148 5.146 21.171 5.264 C 22.204 4.638 22.973 3.66 23.336 2.51 C 22.371 3.089 21.315 3.498 20.211 3.72 C 19.285 2.716 17.983 2.146 16.616 2.146 C 13.897 2.146 11.693 4.373 11.693 7.121 C 11.693 7.51 11.736 7.89 11.82 8.254 C 7.728 8.046 4.099 6.066 1.671 3.058 C 1.232 3.818 1.003 4.68 1.004 5.558 C 1.004 7.283 1.873 8.806 3.195 9.698 C 2.412 9.672 1.647 9.46 0.965 9.075 L 0.965 9.139 C 0.965 11.549 2.661 13.56 4.914 14.017 C 4.188 14.214 3.428 14.244 2.69 14.1 C 3.317 16.077 5.134 17.516 7.29 17.555 C 5.235 19.189 2.609 19.933 0 19.618 C 2.245 21.077 4.868 21.854 7.548 21.853 C 16.603 21.853 21.557 14.272 21.557 7.698 C 21.557 7.482 21.552 7.267 21.543 7.054 C 22.507 6.349 23.34 5.478 24 4.48" fill-rule="evenodd"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a class="mdc-tooltip--top" id="footer-call-link" href="tel:+122333444" data-mdc-tooltip="Llamar">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                      <path d="M 13.614 19.173 L 16.547 16.24 C 16.903 15.884 17.43 15.76 17.907 15.92 C 19.4 16.415 21.013 16.68 22.667 16.68 C 23.4 16.68 24 17.28 24 18.013 L 24 22.667 C 24 23.4 23.4 24 22.667 24 C 10.146 24 0 13.854 0 1.333 C 0 0.6 0.6 0 1.333 0 L 6 0 C 6.734 0 7.333 0.6 7.333 1.333 C 7.333 3 7.601 4.6 8.094 6.093 C 8.247 6.573 8.119 7.098 7.76 7.453 L 4.827 10.386 C 6.76 14.166 9.834 17.24 13.614 19.173 Z" fill-rule="evenodd"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a class="mdc-tooltip--top" id="footer-email-link" href="mailto:example@gmail.com" data-mdc-tooltip="Correo electrónico">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24">
                      <path d="M 2.433 2.434 C 1.321 2.434 0.391 3.202 0.126 4.232 L 11.999 11.673 L 23.88 4.253 C 23.622 3.212 22.686 2.434 21.565 2.434 L 2.433 2.434 Z M 0.042 6.899 L 0.042 19.174 C 0.042 20.493 1.115 21.566 2.433 21.566 L 21.565 21.566 C 22.884 21.566 23.957 20.493 23.957 19.174 L 23.957 6.925 L 11.999 14.391 L 0.042 6.899 Z" fill-rule="evenodd"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </section>
            <section class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" id="footer-bottom">
              <ul class="footer-bottom-links mdc-typography--body2">
                <li>
                  <a href="#">
                    <svg alt="" class="svg-icon" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
                    </svg>
                    Ayuda
                  </a>
                </li>
                <li>
                  <a href="#">Acerca de</a>
                </li>
                <li>
                  <a href="#">Términos</a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </footer>
    `
  }
}

customElements.define('app-drawer', AppDrawer);
customElements.define('app-footer', AppFooter);