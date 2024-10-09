<template>
  <main class="resume">
    <!-- start of resume__left -->
    <div class="resume__left">
      <h1 class="resume__header-name">IJAY MANGILI</h1>

      <div class="sections">
        <div class="section section--about">
          <div class="section__header">
            <span class="section__header-icon">
              <i class="icon-circle-user"></i>
            </span>
            <h2 class="section__header-title">About Me</h2>
          </div>

          <div class="section__body section__item">
            As a Full Stack web developer with over 3 years of experience, I am passionate about
            learning, problem-solving, and delivering high-quality work. I believe in continuous
            growth and have taken various online courses to expand my skill set. My dedication to
            staying up-to-date with industry trends has allowed me to make a significant impact in
            the projects I've been involved in.
          </div>
        </div>

        <div class="section section--work">
          <div class="section__header">
            <span class="section__header-icon">
              <i class="icon-briefcase"></i>
            </span>
            <h2 class="section__header-title">Work Experience</h2>
          </div>

          <div class="enumeration section__item section__item--extended">
            <div class="enumeration__row">
              <p class="enumeration__heading">TheChalkboard Inc.</p>
              <span class="enumeration__subtitle">Nov 2023 — Present</span>
            </div>

            <div class="enumeration__row">
              <span class="enumeration__subheading">Intermediate Web Developer</span>
              <p class="enumeration__subtitle">Pasig City, Metro Manila</p>
            </div>

            <ul class="enumeration__description">
              <li class="enumeration__description-item">DevOps and AWS Cloud Management</li>
              <li class="enumeration__description-item">
                Developed, deployed, and maintained an Attendance Monitoring System based on token
                handshakes.
              </li>

              <!-- <li class="enumeration__description-item">
                Enhancing team efficiency and collaboration by automating deployments, streamlining
                project management, and working effectively with cross-functional team members.
              </li>
              <li class="enumeration__description-item">
                Continuously improving code quality and maintainability by implementing design
                patterns, best practices, and staying up-to-date with industry trends.
              </li> -->
            </ul>
          </div>

          <div class="enumeration section__item section__item--extension">
            <div class="enumeration__row">
              <span class="enumeration__subheading">
                Associate Web Developer
                <span class="enumeration__subheading-sub">| Jun 2021 — Sep 2023</span>
              </span>
            </div>

            <ul class="enumeration__description">
              <!-- <li class="enumeration__description-item">
                Prior to promotion, I generally had the same responsibilities
              </li> -->

              <li class="enumeration__description-item">
                Full-stack web development with Vue and Laravel.
              </li>
              <li class="enumeration__description-item">
                Developed, deployed and maintained a Learning Management System (LMS) platform and
                Customer Relationship Management (CRM) dashboard.
              </li>
              <li class="enumeration__description-item">
                Database management, including writing scripts and optimizing performance.
              </li>
              <li class="enumeration__description-item">
                Enhancing team efficiency and collaboration by automating deployments through
                Bitbucket pipelines.
              </li>
            </ul>
          </div>

          <div class="enumeration section__item">
            <div class="enumeration__row">
              <p class="enumeration__heading">PLDT</p>
              <p class="enumeration__subtitle">Jan 2020 — Mar 2020</p>
            </div>

            <div class="enumeration__row">
              <p class="enumeration__subheading">On-The-Job Trainee</p>
              <p class="enumeration__subtitle">Baguio, Benguet</p>
            </div>

            <ul class="enumeration__description">
              <li class="enumeration__description-item">
                My experience here can be summed up into
                <i>customer experience</i>
                . But I also partook in a mix of other basic-level work.
              </li>
            </ul>
          </div>
        </div>

        <div class="section section--education">
          <div class="section__header">
            <span class="section__header-icon">
              <i class="icon-graduation-cap"></i>
            </span>
            <h2 class="section__header-title">Education</h2>
          </div>

          <div class="enumeration section__item">
            <div class="enumeration__row">
              <p class="enumeration__heading">University of Baguio</p>
              <p class="enumeration__subtitle">May 2020 (2013 — 2020)</p>
            </div>

            <div class="enumeration__row">
              <p class="enumeration__subheading">BS Computer Engineering</p>
              <p class="enumeration__subtitle">Baguio, Benguet</p>
            </div>
          </div>
        </div>

        <div class="section section--awards">
          <div class="section__header">
            <span class="section__header-icon">
              <i class="icon-scroll"></i>
            </span>
            <h2 class="section__header-title">Certifications</h2>
          </div>

          <div class="enumeration section__item">
            <div class="enumeration__row">
              <p class="enumeration__heading">Certificate</p>
              <p class="enumeration__subtitle">Feb 2024</p>
            </div>

            <div class="enumeration__row">
              <p class="enumeration__subheading">IELTS General Training Band 8</p>
              <p class="enumeration__subtitle">IELTS</p>
            </div>
          </div>

          <div class="enumeration section__item course-certificate">
            <div class="enumeration__row">
              <p class="enumeration__heading">Certificate of Completion</p>
              <p class="enumeration__subtitle">July 2024</p>
            </div>

            <div class="enumeration__row">
              <p class="enumeration__subheading">Docker Mastery</p>
              <p class="enumeration__subtitle">Udemy</p>
            </div>
          </div>

          <div class="enumeration section__item course-certificate">
            <div class="enumeration__row">
              <p class="enumeration__heading">Certificate of Completion</p>
              <p class="enumeration__subtitle">Feb 2023</p>
            </div>

            <div class="enumeration__row">
              <p class="enumeration__subheading">Complete Vue Developer</p>
              <p class="enumeration__subtitle">Udemy</p>
            </div>
          </div>

          <div class="enumeration section__item course-certificate">
            <div class="enumeration__row">
              <p class="enumeration__heading">Certificate of Completion</p>
              <p class="enumeration__subtitle">Nov 2022</p>
            </div>

            <div class="enumeration__row">
              <p class="enumeration__subheading">Advanced CSS and SASS</p>
              <p class="enumeration__subtitle">Udemy</p>
            </div>
          </div>

          <div class="enumeration section__item course-certificate">
            <div class="enumeration__row">
              <p class="enumeration__heading">Certificate of Completion</p>
              <p class="enumeration__subtitle">July 2022</p>
            </div>

            <div class="enumeration__row">
              <p class="enumeration__subheading">Professional Java Developer</p>
              <p class="enumeration__subtitle">Udemy</p>
            </div>
          </div>

          <div class="enumeration section__item course-certificate">
            <div class="enumeration__row">
              <p class="enumeration__heading">Certificate of Completion</p>
              <p class="enumeration__subtitle">Aug 2020</p>
            </div>

            <div class="enumeration__row">
              <p class="enumeration__subheading">Full Stack Web Developer</p>
              <p class="enumeration__subtitle">Udemy</p>
            </div>
          </div>

          <div class="enumeration section__item award">
            <div class="enumeration__row">
              <p class="enumeration__heading">Certificate of Recognition</p>
              <p class="enumeration__subtitle">Mar 2019</p>
            </div>

            <div class="enumeration__row">
              <p class="enumeration__subheading">1st place in Robotics Sumobot Competition</p>
              <p class="enumeration__subtitle">University of Baguio</p>
            </div>

            <ul class="enumeration__description">
              <li class="enumeration__description-item enumeration__description-item--no-border">
                Robotics Sumobot Competition during the 8th Brainwave at the School of Information
                Technology, University of Baguio.
              </li>
            </ul>
          </div>

          <div class="enumeration section__item award">
            <div class="enumeration__row">
              <p class="enumeration__heading">Certificate of Recognition</p>
              <p class="enumeration__subtitle">Mar 2019</p>
            </div>

            <div class="enumeration__row">
              <p class="enumeration__subheading">Champion in Quiz Bee</p>
              <p class="enumeration__subtitle">University of Baguio</p>
            </div>

            <ul class="enumeration__description">
              <li class="enumeration__description-item enumeration__description-item--no-border">
                Regional 2018 Institute of Computer Engineers of the Philippines, Inc. (ICpEP)
                Challenge Competition
              </li>
            </ul>
          </div>

          <div class="enumeration section__item award">
            <div class="enumeration__row">
              <p class="enumeration__heading">Certificate of Merit</p>
              <p class="enumeration__subtitle">Mar 2018</p>
            </div>

            <div class="enumeration__row">
              <p class="enumeration__subheading">Champion in Programming</p>
              <p class="enumeration__subtitle">University of Baguio</p>
            </div>

            <ul class="enumeration__description">
              <li class="enumeration__description-item enumeration__description-item--no-border">
                Regional 2017 Institute of Computer Engineers of the Philippines, Inc. (ICpEP)
                Challenge Competition
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end of sections -->

      <div class="interests">
        <strong>Interests:</strong>
        Guitar, Piano, Violin, Technology, Computers, Exercise, Media, History, Books, Gaming
      </div>

      <div class="web-version-link">
        For the best viewing experience, visit the web version of this resume:
        <br />
        <a href="https://ijay-bm.github.io/resume/" target="_blank">
          https://ijay-bm.github.io/resume/
        </a>
      </div>
    </div>
    <!-- end of resume__left -->

    <!-- start of resume__right -->
    <div class="resume__right">
      <!-- start of sections -->
      <div class="sections">
        <div class="section section--contact">
          <div class="section__header">
            <span class="section__header-icon">
              <i class="icon-info2"></i>
            </span>
            <h2 class="section__header-title">Deets</h2>
          </div>

          <ul class="contact-info">
            <!-- <li class="contact-info__item section__item">
                <a class="contact-info__link" href="https://github.com/ijay-bm" target="_blank">
                  <i class="icon-github"></i>
                  <span>github.com/ijay-bm</span>
                </a>
              </li> -->
            <li class="contact-info__item section__item">
              <a
                class="contact-info__link"
                href="https://www.linkedin.com/in/ijaybm/"
                target="_blank"
              >
                <i class="icon-linkedin"></i>
                <span>linkedin.com/in/ijaybm</span>
              </a>
            </li>
            <li class="contact-info__item section__item">
              <i class="icon-gmail"></i>
              <span>ijaybmangili@gmail.com</span>
            </li>
            <li class="contact-info__item section__item">
              <i class="icon-mobile"></i>
              <span>+63 948 513 1144</span>
            </li>
            <li class="contact-info__item section__item">
              <i class="icon-location"></i>
              <span>Baguio, Benguet</span>
            </li>
          </ul>
        </div>

        <div class="section section--skills">
          <div class="section__header">
            <span class="section__header-icon">
              <i class="icon-code"></i>
            </span>
            <h2 class="section__header-title">Skills</h2>
          </div>

          <div class="section__body">
            <ul class="skills">
              <li class="skills__item section__item">
                <span class="skills__name">
                  Full Stack Web Development
                  <div class="skills__item-details">
                    <small>
                      Vue, JS, HTML, CSS/SASS, Laravel, PHP, Tailwind CSS, Bootstrap, API Design &
                      Architecture, Resource-Oriented API Design, Page-Oriented API Design,
                      REST-Oriented API Design, SPA development, SSG, SSR
                    </small>
                  </div>
                </span>
                <span class="skills__bar" data-percent="80">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">
                  Integrations
                  <div class="skills__item-details">
                    <small>
                      APIs & SDKs, Payment Processors, Audio/Video Services, Websockets, Geolocation
                      Services, Document Generation (PDF, XLS, MJML Email)
                    </small>
                  </div>
                </span>
                <span class="skills__bar" data-percent="80">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">
                  Database Management
                  <div class="skills__item-details">
                    <small>DBeaver, SQL Scripts, Laravel ORM</small>
                  </div>
                </span>
                <span class="skills__bar" data-percent="80">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">
                  Source Control
                  <div class="skills__item-details">
                    <small>Git, Bitbucket, SourceTree</small>
                  </div>
                </span>
                <span class="skills__bar" data-percent="70">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">
                  Project Management
                  <div class="skills__item-details">
                    <small>Atlassian Jira & Bitbucket</small>
                  </div>
                </span>
                <span class="skills__bar" data-percent="60">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">
                  Email, UI & UX Design & Development
                  <div class="skills__item-details">
                    <small>Vue, Tailwind CSS, Bootstrap, SASS, BEM, MJML, Laravel Blade</small>
                  </div>
                </span>
                <span class="skills__bar" data-percent="70">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">
                  Server Management
                  <div class="skills__item-details">
                    <small>
                      AWS EC2, cron jobs, supervisor, MySQL/Apache config, Devolutions RDM, Docker
                    </small>
                  </div>
                </span>
                <span class="skills__bar" data-percent="40">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">
                  Automation (CICD/IaC)
                  <div class="skills__item-details">
                    <small>Bitbucket, AWS EC2, Docker, Kubernetes</small>
                  </div>
                </span>
                <span class="skills__bar" data-percent="40">
                  <span class="skills__percentage"></span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="section section--tools tools-style-1">
          <div class="section__header">
            <span class="section__header-icon">
              <i class="icon-tools"></i>
            </span>
            <h2 class="section__header-title">Tools</h2>
          </div>

          <div class="section__body">
            <ul class="skills">
              <li class="skills__item section__item">
                <span class="skills__name">PHP</span>
                <span class="skills__bar" data-percent="80">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">Laravel</span>
                <span class="skills__bar" data-percent="80">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">JavaScript</span>
                <span class="skills__bar" data-percent="80">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">Vue</span>
                <span class="skills__bar" data-percent="80">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">HTML</span>
                <span class="skills__bar" data-percent="70">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">CSS/SASS</span>
                <span class="skills__bar" data-percent="80">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">Bootstrap Framework</span>
                <span class="skills__bar" data-percent="80">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">
                  SQL
                  <small>(MySQL/MariaDB)</small>
                </span>
                <span class="skills__bar" data-percent="70">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">NPM</span>
                <span class="skills__bar" data-percent="70">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">Composer</span>
                <span class="skills__bar" data-percent="60">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">
                  AWS
                  <small>(EC2)</small>
                </span>
                <span class="skills__bar" data-percent="30">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">Atlasssian Jira</span>
                <span class="skills__bar" data-percent="50">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">Atlasssian Bitbucket</span>
                <span class="skills__bar" data-percent="40">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">Postman</span>
                <span class="skills__bar" data-percent="20">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">Devolutions RDM</span>
                <span class="skills__bar" data-percent="30">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">MJML</span>
                <span class="skills__bar" data-percent="10">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">Laravel Blade</span>
                <span class="skills__bar" data-percent="10">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">Package Managers (NPM, Composer)</span>
                <span class="skills__bar" data-percent="60">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">DBeaver</span>
                <span class="skills__bar" data-percent="40">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">Git</span>
                <span class="skills__bar" data-percent="40">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">SourceTree</span>
                <span class="skills__bar" data-percent="30">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">Docker</span>
                <span class="skills__bar" data-percent="40">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">Kubernetes</span>
                <span class="skills__bar" data-percent="10">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">VS Code</span>
                <span class="skills__bar" data-percent="80">
                  <span class="skills__percentage"></span>
                </span>
              </li>

              <li class="skills__item section__item">
                <span class="skills__name">Tailwind CSS</span>
                <span class="skills__bar" data-percent="60">
                  <span class="skills__percentage"></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end of sections -->

      <div class="legend">
        <div class="legend__body">
          <div class="legend__item">
            <span class="legend__metric">1</span>

            <span lass="legend__description">I can pick it up again quickly.</span>
          </div>
          <div class="legend__item">
            <span class="legend__metric">5</span>

            <span lass="legend__description">I have been using it a lot recently</span>
          </div>
          <div class="legend__item">
            <span class="legend__metric">10</span>

            <span lass="legend__description">I have reached enlightenment.</span>
          </div>
        </div>
      </div>

      <div class="tools tools-style-2">
        <strong>Tools:</strong>
        PHP, Laravel, JavaScript, Vue, HTML, CSS/SASS, Bootstrap Framework , SQL (MySQL/MariaDB),
        NPM, Composer, AWS (EC2), Atlasssian Jira, Atlasssian Bitbucket, Postman, Devolutions RDM,
        MJML, Package Managers (NPM, Composer), DBeaver, Git, SourceTree, Docker, VS Code
      </div>
    </div>
    <!-- end of resume__right -->
  </main>
</template>

<script setup></script>

<style lang="scss">
@import "../assets/sass/abstracts/mixins";
@import "../assets/sass/abstracts/variables";

.resume {
  margin: 0 auto;
  display: flex;
  width: 816px;
  min-height: 1056px;

  &__left {
    width: 65%;
    position: relative;
  }

  &__header-name {
    padding: 0.1rem 0;
    font-family: "Oxygen", sans-serif;
    margin-bottom: 0.75rem;
    font-weight: 400;
    font-size: 1.6rem;
    letter-spacing: 0.2em;
    text-align: center;
    background-color: $gray-900;
    color: $gray-300;
    position: relative;
    box-shadow: 0 0.5rem 0.5rem -0.5rem $gray-800;

    @include dark {
      background-color: rgb(28, 30, 31);
      box-shadow: $gray-900 0px 0.5rem 0.5rem -0.5rem;
    }
  }

  &__right {
    border-left: 1px solid $color1;
    padding: 0.75rem 0;
    width: 35%;
    background-image: linear-gradient(to bottom right, $gray-100, $gray-200, $gray-300);

    @include dark {
      border-left-color: $color1-dark;
      background-image: linear-gradient(
        to right bottom,
        rgb(27, 30, 31),
        rgb(35, 38, 39),
        rgb(40, 44, 45)
      );
    }
  }
}

.style-2 .resume {
  &__left {
    width: 65%;
    padding: 0;
  }

  &__header-name {
    margin-bottom: $s-4;
  }

  &__right {
    width: 35%;
    padding: 1.5rem 0;
  }
}

.web-version-link {
  position: absolute;
  bottom: 0;
  padding: 0.5rem;
  color: $gray-700;
  font-size: $fs-xs;
  text-align: center;
  width: 100%;
  display: none;

  a {
    text-align: center;
    color: $color1;
    text-decoration: none;
  }

  @media print {
    display: block;
  }
}
</style>
