import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container">
      <header class="header">
        <section class="hero">
          <figure class="hero--image">
            <img
              src="https://res.cloudinary.com/gusram/image/upload/c_scale,w_105/v1678249548/gusramirez_t3xcj7.webp"
              alt="gus ramirez photo"
              class="image"
            />
          </figure>
          <h1 class="hero--title">Gus Ramírez</h1>

          <h2 class="hero--subtitle">Front End Engineer</h2>

          <p class="hero--description">
            Hey there! I'm a seasoned Frontend Engineer with over 3 years of
            hands-on experience in web app development. I thrive on crafting
            dynamic and user-friendly client-side applications. My proficiency
            extends to not only JavaScript, but also can work with Java with
            Spring Boot, and I've even dabbled in Go to build some backend
            services. At Aplazo, I'm dedicated to enhancing our front-end web
            applications and improving the Developer Experience. In addition to
            deepening my expertise in Jenkins and Nx for an elevated CI/CD
            process, I'm actively involved in Java and Go tasks to optimize data
            hydration services for our front-end applications.
          </p>
        </section>
      </header>

      <main class="main">
        <section class="social-media">
          <nav class="nav">
            <ul class="nav__items">
              <li class="nav__item">
                <a
                  href="https://github.com/gusramirez-aplazo"
                  class="nav__link"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li class="nav__item">
                <a
                  href="https://www.linkedin.com/in/gustavo-cesar-ramirez/"
                  class="nav__link"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li class="nav__item">
                <a
                  href="https://mnf.red/gusramirez"
                  class="nav__link"
                  target="_blank"
                >
                  CV
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  `,
  styles: [],
})
export default class HomeComponent {}
