<template>
  <div class="bg-gray-200 dark:bg-gray-800 pt-3 px-4 md:px-2" id="contact-page">
    <div class="relative container mx-auto flex justify-end items-center">
      <!--<button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="printSection"
      >
        print the page
      </button>-->

      <button
        @click="
          $colorMode.preference = $colorMode.value == 'light' ? 'dark' : 'light'
        "
        data-bs-toggle="tooltip"
        data-bs-placement="bottom"
        title="Toggle Color Mode"
        class="text-gray-800 bg-gray-200 outline-1 border-lg shadow-white border-gray-800 hover:text-gray-200 hover:bg-gray-800 dark:text-gray-200 dark:bg-gray-800 dark:hover:text-gray-800 dark:hover:bg-gray-200 bg-primary-light px-2 py-2 shadow-sm rounded-lg cursor-pointer"
      >
        <!-- Dark mode icon -->
        <svg
          v-if="$colorMode.value == 'light'"
          xmlns="http://www.w3.org/2000/svg"
          class="text-liText-ternary-dark dark:hover:text-gray-800 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <!-- Light mode icon -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="dark:hover:text-gray-800 w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </button>
    </div>

    <main
      class="text-gray-800 dark:text-gray-200 font-bold dark:font-normal container mx-auto md:pt-9 px-4 md:px-2"
    >
      <div class="inline-grid grid-cols-1 xl:grid-cols-2 gap-4 mt-10">
        <div class="mx-auto order-2 xl:order-1">
          <div class="timeline grid grid-cols-1">
            <h1 class="timeline__title">About Me</h1>
            <div>
              <ol
                class="relative border-l border-gray-800 dark:border-gray-200"
              >
                <li class="mb-10 ml-4">
                  <div
                    class="absolute w-3 h-3 bg-gray-800 rounded-full -left-1.5 border border-gray-800 dark:border-gray-200 dark:bg-gray-200"
                  ></div>
                  <h3 class="timeline__subtitle text-8xl">
                    I love to {{ "<" }}Code{{ "/>" }} ツ
                  </h3>
                  <p class="timeline__description mb-4 text-base text-justify">
                    A proficient and enthusiastic full-stack web developer,
                    driven by an unyielding passion for technology and deeply
                    immersed in the craft of web development. Possesses robust
                    expertise in conceiving, refining, constructing, deploying,
                    and upholding web and mobile applications, complemented by a
                    profound understanding of cutting-edge frameworks.
                    Presently, actively engaged in projects utilizing
                    <span class="text-darkgold">JAVASCRIPT</span> and
                    <span class="text-light-blue">PHP</span> as primary
                    programming languages.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div class="mx-auto order-1 xl:order-2 flex items-center">
          <div
            id="container"
            class="mx-auto order-1 xl:order-2 bg-gray-200 dark:bg-gray-900 transition"
          >
            <section class="left-section">
              <div class="image-box-wrapper">
                <div class="box">
                  <div class="content">
                    <img src="/images/profile.jfif" alt="" />
                    <h2>Shayan Motalebi <br /></h2>
                  </div>
                </div>
              </div>

              <div class="profile-detail">
                <p class="profile-name">SHAYAN MOTALEBI</p>
                <span class="profile-summary">//Full Stack Developer</span>
                <span class="profile-summary-2 my-1">
                  <span class="text-blue"> const </span>
                  <span class="text-lightblue"> PhoneNumber </span>

                  <a :href="'tel:' + this.phone_number" class="text-string"
                    >= "{{ this.phone_number }}";</a
                  >
                </span>

                <span class="profile-summary-2 my-1">
                  <span class="text-blue"> const </span>
                  <span class="text-lightblue"> EmailAddress </span>

                  <a href="mailto:shayan3k@gmail.com" class="text-string"
                    >= "shayan3k@gmail.com";</a
                  >
                </span>
                <span class="profile-summary-2 my-1">
                  <span class="text-blue"> const </span>
                  <span class="text-lightblue"> LinkedIn </span>

                  <a
                    href="https://www.linkedin.com/in/shayan-motalebi/"
                    class="text-string"
                    >= "https://www.linkedin.com/in/shayan-motalebi/";</a
                  >
                </span>
                <span class="profile-summary-2 my-1">
                  <span class="text-blue"> const </span>
                  <span class="text-lightblue"> Github </span>

                  <a href="https://github.com/shayan3k" class="text-string"
                    >= "https://github.com/shayan3k";</a
                  >
                </span>
                <span class="profile-summary-2 my-1">
                  <span class="text-blue"> const </span>
                  <span class="text-lightblue"> InteractiveResume </span>

                  <a href="https://shayan3k.github.io" class="text-string"
                    >= "https://shayan3k.github.io";</a
                  >
                </span>

                <!-- <a class="profile-cv" href="#">Download CV</a> -->
              </div>
            </section>
            <div class="profile-pils flex justify-center items-center">
              <span
                class="pils bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800"
                ><a :href="'tel:' + this.phone_number" target="_blank">
                  <font-awesome-icon :icon="['fa', 'phone']" /> Phone</a
                ></span
              >
              <span
                class="pils bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800"
                ><a href="mailto:shayan3k@gmail.com" target="_blank">
                  <font-awesome-icon :icon="['fab', 'google']" /> Gmail</a
                ></span
              >

              <span
                class="pils bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800"
                ><a
                  href="https://www.linkedin.com/in/shayan-motalebi/"
                  target="_blank"
                >
                  <font-awesome-icon :icon="['fab', 'linkedin']" />

                  Linkedin</a
                ></span
              >

              <span
                class="pils bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800"
                ><a href="https://github.com/shayan3k" target="_blank">
                  <font-awesome-icon :icon="['fab', 'github']" /> Github</a
                ></span
              >
            </div>
            <div class="front-smooth"></div>
          </div>
        </div>
      </div>

      <div class="timeline grid grid-cols-1">
        <h1 class="timeline__title">Professional Skills</h1>
        <div>
          <ol class="relative border-l border-gray-800 dark:border-gray-200">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-800 rounded-full -left-1.5 border border-gray-800 dark:border-gray-200 dark:bg-gray-200"
              ></div>

              <ul class="list mb-3">
                <li>
                  <strong class="text-blue">Programming Languages:</strong>
                  JavaScript, TypeScript, PHP, SQL (SOLID, DRY and KISS)
                </li>
                <li>
                  <strong class="text-blue">Markup:</strong> HTML5, CSS(BEM,
                  SMACSS), XML, JSON
                </li>
                <li>
                  <strong class="text-blue">Applications: </strong>Postman,
                  VSCode, Figma, Adobe XD, Docker
                </li>
                <li>
                  <strong class="text-blue"
                    >Libraries and Minimal Frameworks: </strong
                  >JQuery, Nodejs, Reactjs, Bootstrap, Tailwind, MaterializeUI,
                  StoryBook, Expressjs, Redux, Material UI, GSAP, anime.js,
                  Axios, Jest, Cypress, React-router and more...
                </li>
                <li>
                  <strong class="text-blue">Operating Systems:</strong>Linux
                  (Ubuntu, RedHat), macOS, Windows
                </li>
                <li><strong class="text-blue">Version Control:</strong>Git</li>
                <li>
                  <strong class="text-blue">Active Frameworks: </strong>React in
                  next.js, Vue in nuxtjs, React-Native for mobile devs, Laravel
                </li>
                <li>
                  <strong class="text-blue">Functional Skills: </strong>Critical
                  Thinking, Technical Solution Finding, Problem Solving,
                  Documentation
                </li>
                <li>
                  <strong class="text-blue">Databases: </strong>MySQL, MongoDB,
                  PostgreSQL
                </li>
                <li>
                  <strong class="text-blue"
                    >Microservice Communications: </strong
                  >REST API, WebSocket, gRPC, tRPC
                </li>
                <li><strong class="text-blue">Cache Server: </strong>Redis</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div class="timeline grid grid-cols-1">
        <h1 class="timeline__title">Personal Skills</h1>
        <div>
          <ol class="relative border-l border-gray-800 dark:border-gray-200">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-800 rounded-full -left-1.5 border border-gray-800 dark:border-gray-200 dark:bg-gray-200"
              ></div>

              <ul class="list mb-3">
                <li>
                  Enthusiastic and able to quickly read Docs, understand and
                  utilize new technologies and frameworks fast, seek new
                  challenges in a fast-paced environment, and available to work
                  with tight schedules with minimum supervision. Has the ability
                  to understand, enhance and implement complex business
                  requirements into an online business project. Communicate
                  effectively with technical peers. Excellent problem-solving
                  skills.
                </li>
                <li>
                  Enthusiastic and able to quickly read Docs, understand and
                  utilize new technologies and frameworks fast, seek new
                  challenges in a fast-paced environment, and available to work
                  with tight schedules with minimum supervision.
                </li>
                <li>
                  Has the ability to understand, enhance and implement complex
                  business requirements into an online business project.
                </li>
                <li>
                  Ability to work autonomously as well as collaboratively in a
                  team environment.
                </li>
                <li>Flexible and adaptable approach to problem solving.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <div class="timeline grid grid-cols-1">
        <h1 class="timeline__title">Work Experience</h1>
        <div>
          <ol class="relative border-l border-gray-800 dark:border-gray-200">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-800 rounded-full -left-1.5 border border-gray-800 dark:border-gray-200 dark:bg-gray-200"
              ></div>

              <time
                class="timeline__date mb-1 text-sm leading-none text-gray-400 dark:text-gray-500"
                >Sep 2022 - Oct 2023</time
              >
              <h3>
                <strong class="timeline__secondary-title text-blue">
                  Full-Stack Developer (Xemplo – Australia)</strong
                >
              </h3>
              <br />
              <p class="mb-4 text-base">
                At Xemplo.com, innovation meets seamless functionality to
                redefine the digital landscape. Through the state-of-the-art
                services and products, Xemplo.com empowers clients to navigate
                the complexities of the digital world with confidence. With a
                focus on user-centric design and robust backend technologies,
                Xemplo.com crafts digital experiences that captivate audiences
                and drive meaningful engagement.
              </p>
              <h3>
                <strong class="timeline__secondary-title text-blue">
                  Responsibilities:
                </strong>
              </h3>
              <ul class="list mb-3">
                <li>
                  Extend service endpoints using industry best practices in
                  Laravel, with a focus on comprehensive testing for robust
                  functionality.
                </li>
                <li>
                  Design and adapt isolated Vue.js components based on specified
                  designs, ensuring seamless integration with the user
                  interface.
                </li>
                <li>
                  Proficiently design tables, procedures, relationships, views,
                  and functions for relational databases. Create models tailored
                  for NoSQL databases, demonstrating a deep understanding of
                  data structures.
                </li>
                <li>
                  Work closely with the team lead and fellow members, fostering
                  a collaborative environment where ideas flow freely and
                  collective goals are achieved.
                </li>
                <li>
                  Uphold coding standards rigorously, guaranteeing that deployed
                  code aligns with prescribed technical benchmarks and ensures
                  long-term maintainability.
                </li>
                <li>
                  Thoroughly test applications, identifying and rectifying bugs,
                  errors, and mistakes to enhance the overall quality and
                  reliability of the software.
                </li>
                <li>
                  Implement and apply test automation frameworks, adopting a
                  Test-Driven Development (TDD) approach to fortify the
                  reliability of applications.
                </li>
                <li>
                  Ensure timely delivery of applications within agile,
                  scrum-based projects, contributing to the seamless flow of
                  project milestones.
                </li>
              </ul>
              <div
                class="absolute w-3 h-3 bg-gray-800 rounded-full -left-1.5 border border-gray-800 dark:border-gray-200 dark:bg-gray-200"
              ></div>

              <div
                class="absolute w-3 h-3 bg-gray-800 rounded-full -left-1.5 border border-gray-800 dark:border-gray-200 dark:bg-gray-200"
              ></div>

              <time
                class="timeline__date mb-1 text-sm leading-none text-gray-400 dark:text-gray-500"
                >Nov 2018 - Aug 2022</time
              >
              <h3>
                <strong class="timeline__secondary-title text-blue">
                  Full-Stack Developer (Zobdegan – IRAN)</strong
                >
              </h3>
              <br />
              <p class="mb-4 text-base">
                Zobdegan company in two branches with over 35 full-time
                employees is the leading digital marketing group in Karaj. A
                complete list of related services together with offering diverse
                technology stacks depending on client specifications and needs
                made the brand name on top of all other competitors. Current
                offered services are Advertisement, Programming Services,
                Application Maintaining, WebDevs, MobileDevs, SEO, Photography,
                Motion Graphic, Animation, Logo Design, Instagram administration
                , Teaser, Content Creation and many more.
              </p>
              <h3>
                <strong class="timeline__secondary-title text-blue">
                  Responsibilities:
                </strong>
              </h3>
              <ul class="list mb-3">
                <li>
                  Collect use-case scenarios and required functionalities based
                  on client specifications, create project’s proposal and decide
                  on a proper stack technology.
                </li>
                <li>
                  Leading team meetings for planning, design and sharing ideas.
                </li>
                <li>
                  Data modeling and database design (tables, procedures,
                  relationships, views and functions) for relational databases
                  and model creation for NoSQL Databases such as MangoDB,
                </li>
                <li>
                  Apply localization and internationalization to the
                  application.
                </li>
                <li>Work closely with the frontend and backend team.</li>
                <li>
                  Ensure, through the development and use of coding standards
                  that deployed code meets standards for technical delivery and
                  maintainability.
                </li>
                <li>
                  Consult with junior developers about challenges they face
                  during development.
                </li>
                <li>
                  Lead the team on testing and debugging of the applications and
                  rectifying the bugs, errors and mistakes.
                </li>
                <li>
                  Make development more efficient or bring a higher standard
                  through the use of tooling, process or techniques.
                </li>
                <li>
                  Apply test automation frameworks and using them in a TDD
                  approach. Ensuring applications are delivered in a timely
                  manner in agile scrum-based projects.
                </li>
                <li>
                  Web server administration, handle migrations, handle devOps
                  and automations.
                </li>
                <li>Client and Stakeholder management.</li>
              </ul>
              <div
                class="absolute w-3 h-3 bg-gray-800 rounded-full -left-1.5 border border-gray-800 dark:border-gray-200 dark:bg-gray-200"
              ></div>

              <time
                class="timeline__date mb-1 text-sm leading-none text-gray-400 dark:text-gray-500"
                >Jun 2016 - Sep 2018</time
              >
              <h3>
                <strong class="timeline__secondary-title text-blue">
                  Web Development Intern (Tahlilgar Company – IRAN)</strong
                >
              </h3>
              <br />
              <p class="mb-4 text-base">
                Tahlilgar Company is a mid-level local application and software
                development company specialized in creating distributive
                applications primarily in management field. A number of products
                includes: Accounting management, Team management, Money
                management and Product management systems.
              </p>
              <h3>
                <strong class="timeline__secondary-title text-blue">
                  Responsibilities:
                </strong>
              </h3>
              <ul class="list mb-3">
                <li>
                  Worked closely with the design team and project managers.
                </li>
                <li>Discussing client related issues with other developers.</li>
                <li>
                  Participating in team meeting for planning, design and sharing
                  ideas.
                </li>
                <li>
                  Participating in Web development for a number of projects
                  using HTML, SASS and JavaScript.
                </li>
                <li>
                  Participating in testing, implementation and maintenance of
                  products after deployment.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div class="timeline grid grid-cols-1">
        <h1 class="timeline__title">Top Projects</h1>
        <div>
          <ol class="relative border-l border-gray-800 dark:border-gray-200">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-800 rounded-full -left-1.5 border border-gray-800 dark:border-gray-200 dark:bg-gray-200"
              ></div>

              <ul class="list mb-3">
                <li class="text-blue mt-10">
                  <strong>AchilaGol</strong>

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Jun 2022</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    1 month
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />
                    1 developer
                  </span>
                </li>
                <p class="mt-3">
                  Web application implemented in nextjs with most of the pages
                  preloaded at compile time, gives an native like user
                  expreience. The project was designed and implemented in just 1
                  month and aims to target all sort of users whom are looking to
                  buy flowers online. The application includes a comprehensive
                  and easy to use online perchase system.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>

                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React.js
                  </span>
                  <span
                    class="badge badge-next px-3 py-2 rounded-2xl my-3 mr-1 text-black"
                  >
                    <img
                      src="/images/nextjs.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />

                    Next.js
                  </span>
                  <span
                    class="badge badge-bootstrap px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'bootstrap']" />
                    Bootstrap
                  </span>

                  <span
                    class="badge badge-django text-white px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/django.svg"
                      alt="materialui"
                      width="16"
                      height="16"
                    />
                    Django
                  </span>

                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>

                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                </h2>
                <br />

                <li class="text-blue mt-10">
                  <!-- <a href="https://cafebazaar.ir/app/henaco.com"> -->
                  <strong>Henaco</strong>
                  <!-- </a> -->

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Feb 2022</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    3 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    2 developers
                  </span>
                </li>
                <p class="mt-3">
                  Mobile application developed using the react-native framework
                  for IOS and Android. The application communicates with a
                  single NEXA Security Alarm system remotely over GSM and
                  manages the security system by sending commands via SMS. This
                  application is currently in its final development phase and
                  would be released soon.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>

                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React.js
                  </span>
                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React Native
                  </span>
                  <span
                    class="badge badge-nativebase px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/nativebase.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    React Native Base
                  </span>

                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                </h2>

                <br />

                <li class="text-blue mt-10">
                  <!-- <a href="http://parschap-aria.ir/"> -->
                  <strong>Parschaparia </strong>
                  <!-- </a> -->

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Nov 2021</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    6 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    5 developers
                  </span>
                </li>
                <p class="mt-3">
                  Progressive web application developed for a packaging
                  corporation synchronized with popular accounting, inventory,
                  and management system(SEPIDAR) over REST API. Implemented
                  using Next.js with preloading all public pages and
                  implementing a fast-caching technique (redux preload) gives
                  the application very fast routing. Online shopping generates
                  receipts automatically, reduces the amount from inventory, and
                  generates necessary alerts and notifications. The system
                  constantly retrieves the latest data from SEPIDAR and gets
                  updated automatically.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>

                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React.js
                  </span>
                  <span
                    class="badge badge-next px-3 py-2 rounded-2xl my-3 mr-1 text-black"
                  >
                    <img
                      src="/images/nextjs.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />

                    Next.js
                  </span>

                  <span
                    class="badge badge-antdesign px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/antdesign.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />
                    AntDesign
                  </span>

                  <span
                    class="badge badge-django text-white px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/django.svg"
                      alt="materialui"
                      width="16"
                      height="16"
                    />
                    Django
                  </span>

                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                  <span
                    class="badge badge-sepidar px-3 py-2 rounded-2xl my-3 mr-1 text-black"
                  >
                    <img
                      src="/images/sepidar.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />
                    SEPIDAR(popular offline comprehensive management platform)
                  </span>
                </h2>

                <br />

                <li class="text-blue mt-10">
                  <strong>30nemafan </strong>

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Oct 2021</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    5 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    5 developers
                  </span>
                </li>
                <p class="mt-3">
                  A mobile movie-based application designed to attract users
                  with different tastes in movies, series, and collections. Fast
                  downloading host coupled with a WordPress application for SEO
                  purposes are all required tools for a prominent startup and a
                  lucrative platform. The application's eye-catching design was
                  the most challenging aspect of the project.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>

                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React.js
                  </span>
                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React Native
                  </span>
                  <span
                    class="badge badge-nativebase px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/nativebase.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    React Native Base
                  </span>
                  <span
                    class="badge badge-laravel px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'laravel']" />
                    Laravel
                  </span>

                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                </h2>

                <br />

                <li class="text-blue mt-10">
                  <!-- <a href="https://persian-tanagers.com/"> -->
                  <strong>Persian-tanagers </strong>
                  <!-- </a> -->

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Sep 2021</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    4 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    9 developers
                  </span>
                </li>
                <p class="mt-3">
                  Online application with using blade for front and offers REST
                  api to connect a separate mobile application. The application
                  operates both on IOS and Android. Advertisement and blog
                  system together with an online shop via PayPal offer services
                  to Iranian community based in UK.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>

                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React.js
                  </span>
                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React Native
                  </span>
                  <span
                    class="badge badge-nativebase px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/nativebase.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    React Native Base
                  </span>
                  <span
                    class="badge badge-laravel px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'laravel']" />
                    Laravel
                  </span>

                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                </h2>

                <br />
                <li class="text-blue mt-10">
                  <!-- <a href="https://zaminaghsat.com/"> -->
                  <strong>Zamin Aghsat</strong>
                  <!-- </a> -->

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Jun 2021</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    3 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    7 developers
                  </span>
                </li>
                <p class="mt-3">
                  A comprehensive real-estate application that advertises
                  real-estate properties offering a fully automated purchase
                  system that handles everything, making application management
                  very easy. The application offers other features such as
                  purchase for another person, and full payment/dynamic
                  prepayment with installments. This project utilizes the SEO
                  factors, exports all data in excel format, and more.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>
                  <span
                    class="badge badge-laravel px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'laravel']" />
                    Laravel
                  </span>
                  <span
                    class="badge badge-html px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'html5']" />
                    HTML
                  </span>
                  <span
                    class="badge badge-bootstrap px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'bootstrap']" />
                    Bootstrap
                  </span>
                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                </h2>

                <br />

                <li class="text-blue mt-10">
                  <strong>VenizOIL</strong>

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Mar 2021</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    4 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    4 developers
                  </span>
                </li>
                <p class="mt-3">
                  Mobile-first react application for managing car accessories
                  retailers. Retailers could order new products delivered to
                  them using this application. This application also offered
                  more features which are car brands and details, gallery,
                  products, and many more. The application admin panel offers 5
                  levels of access restrictions and permissions for different
                  case scenarios. While the original version of this application
                  works on the web, the application source code was written in a
                  specific order which could be then exported into singed APK as
                  well.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>

                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React.js
                  </span>
                  <span
                    class="badge badge-antdesign px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/antdesign.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />

                    AntDesign
                  </span>

                  <span
                    class="badge badge-laravel px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'laravel']" />
                    Laravel
                  </span>

                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                </h2>

                <br />

                <li class="text-blue mt-10">
                  <!-- <a href="https://www.Danamanaa.com/"> -->
                  <strong>Danamana </strong>
                  <!-- </a> -->

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Nov 2020</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    4 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    8 developers
                  </span>
                </li>
                <p class="mt-3">
                  Progressive Web Application Designed and Developed for
                  Children. This Application offers a wide range of attractive
                  kid's online services such as video content, storytelling
                  content, and toy exchange plans. By preloading, all public
                  pages, the platform offers an SEO-friendly environment. A
                  great aspect of this project is the design patterns that suit
                  the client’s business plan. This design pattern enables the
                  client to add new features to the app as needed, at a
                  relatively low price.
                </p>

                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>

                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React.js
                  </span>
                  <span
                    class="badge badge-next px-3 py-2 rounded-2xl my-3 mr-1 text-black"
                  >
                    <img
                      src="/images/nextjs.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />

                    Next.js
                  </span>

                  <span
                    class="badge badge-typescript px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/typescript.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />
                    Typescript
                  </span>

                  <span
                    class="badge badge-expressjs text-black px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/expressjs.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />

                    Express.js with a custom boilerplate
                  </span>

                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                </h2>

                <br />

                <li class="text-blue mt-10">
                  <strong>UzTop</strong>

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Jun 2020</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    5 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    5 developers
                  </span>
                </li>

                <p class="mt-3">
                  Progressive Web Application Designed and Developed for
                  Children. This Application offers a wide range of attractive
                  kid's online services such as video content, storytelling
                  content, and toy exchange plans. By preloading, all public
                  pages, the platform offers an SEO-friendly environment. A
                  great aspect of this project is the design patterns that suit
                  the client’s business plan. This design pattern enables the
                  client to add new features to the app as needed, at a
                  relatively low price.
                </p>

                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>

                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React.js
                  </span>
                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React Native
                  </span>

                  <span
                    class="badge badge-socketio px-3 py-2 rounded-2xl my-3 text-black mr-1"
                  >
                    <img
                      src="/images/socketio.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />

                    Socket.IO
                  </span>
                  <span
                    class="badge badge-adonisjs text-white px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/adonisjs.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />

                    Adonis.JS
                  </span>

                  <span
                    class="badge badge-typescript px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/typescript.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />
                    Typescript
                  </span>

                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                </h2>

                <br />

                <li class="text-blue mt-10">
                  <!-- <a href="https://www.jostejoplus.com/"> -->
                  <strong>Jostejoplus </strong>
                  <!-- </a> -->

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Mar 2020</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    3 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    6 developers
                  </span>
                </li>

                <p class="mt-3">
                  A modern web application, designed for small to mid-level
                  businesses. This platform enables users to actively interact
                  with their customers through chats and channel rooms
                  implemented with realtime WSS protocol. A complete dynamic
                  payment system with SMS due time alert makes administration an
                  easy task. The application also offers a semi-Instagram
                  environment for clients, which offers a chance for businesses
                  to reach out to more potential clients.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>

                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React.js
                  </span>
                  <span
                    class="badge badge-next px-3 py-2 rounded-2xl my-3 mr-1 text-black"
                  >
                    <img
                      src="/images/nextjs.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />

                    Next.js
                  </span>
                  <span
                    class="badge badge-antdesign px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/antdesign.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />

                    AntDesign
                  </span>

                  <span
                    class="badge badge-laravel px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'laravel']" />
                    Laravel
                  </span>

                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                </h2>

                <br />

                <li class="text-blue mt-10">
                  <strong>Pordastmalchi – Hedayat e Shoghli </strong>

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Nov 2019</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    4 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    2 developers
                  </span>
                </li>
                <p class="mt-3">
                  Truly unique educational research led to a fantastic online
                  project which suggests the three best higher education majors
                  for senior high school students based on behavioral, personal,
                  educational, and scientific questions. The research was
                  abstracted into 300 questions in 18 sections which were
                  converted into a small startup named
                  Hedayat-e-Tahsili(educational guidance).
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies</strong>:

                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React.js
                  </span>
                  <span
                    class="badge badge-materialui px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/materialui.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />

                    MaterialUI
                  </span>

                  <span
                    class="badge badge-laravel px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'laravel']" />
                    Laravel
                  </span>

                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                </h2>

                <br />

                <li class="text-blue mt-10">
                  <!-- <a href="https://www.kasebekhoob.ir/"> -->
                  <strong>Kasebekhoob </strong>
                  <!-- </a> -->

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Aug 2019</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    3 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    2 developers
                  </span>
                </li>
                <p class="mt-3">
                  An application promoting small businesses, offering a cheap
                  and SEO friendly based platform. With a small payment, any
                  business could let their previous and potential clients find
                  them on internet easily. Custom rating system, due date
                  calculation with complex PDO queries are the most prominent
                  features of this platform.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies</strong>:

                  <span
                    class="badge badge-laravel px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'laravel']" />
                    Laravel6
                  </span>
                  <span
                    class="badge badge-html px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'html5']" />
                    HTML
                  </span>
                  <span
                    class="badge badge-bootstrap px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'bootstrap']" />
                    Bootstrap
                  </span>
                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                </h2>

                <br />

                <li class="text-blue mt-10">
                  <!-- <a href="https://www.amlak-sadeghi.com/"> -->
                  <strong>Amlak-sadeghi </strong>
                  <!-- </a> -->

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    May 2019</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    3 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    2 developers
                  </span>
                </li>
                <p class="mt-3">
                  A Real-Estate advertisement platform with a custom team
                  management. The application manages team members and their
                  daily activities with several authorizations and permissions
                  based on the business strategy. Depending on the member’s
                  role, activities vary from create/update/delete realestate
                  advertisements, creation of content for SEO purposes. This
                  application is assembled with a custom UI design created for
                  the project.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>

                  <span
                    class="badge badge-laravel px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'laravel']" />
                    Laravel5.6
                  </span>
                  <span
                    class="badge badge-html px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'html5']" />
                    HTML
                  </span>
                  <span
                    class="badge badge-bootstrap px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'bootstrap']" />
                    Bootstrap
                  </span>
                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                </h2>

                <br />

                <li class="text-blue mt-10">
                  <!-- <a href="https://besatplus.com/"> -->
                  <strong> BesatPlus</strong>
                  <!-- </a> -->

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Jan 2019</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    4 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    2 developers
                  </span>
                </li>
                <p class="mt-3">
                  With over 1500 students, Besat is the most reputable
                  educational institution in Karaj. The application implemented
                  for this institution is an online course-based system, which
                  offers users both full-payment or dynamic prepayment and
                  installment payments courses. This application offers many
                  more features such as discount coupons, payment tracking, GSM
                  messaging system, and more.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>

                  <span
                    class="badge badge-react px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'react']" />
                    React.js
                  </span>

                  <span
                    class="badge badge-bootstrap px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'bootstrap']" />
                    Bootstrap
                  </span>

                  <span
                    class="badge badge-typescript px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/typescript.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />
                    Typescript
                  </span>

                  <span
                    class="badge badge-expressjs text-black px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/expressjs.png"
                      alt="materialui"
                      width="16"
                      height="16"
                    />

                    Express.js
                  </span>
                  <span
                    class="badge badge-kavimo px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/kavimo.png"
                      alt="kavimo"
                      width="16"
                      height="16"
                    />
                    Kavimo(streaming api)
                  </span>
                </h2>

                <br />

                <li class="text-blue mt-10">
                  <!-- <a href="https://ravankarsematec.com/"> -->
                  <strong> Coinbit</strong>
                  <!-- </a> -->

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Nov 2018</time
                  >

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    2 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    2 developers
                  </span>
                </li>
                <p class="mt-3">
                  Laravel application built to offer a wide variety of
                  investment plans and information. The application is fully in
                  English and automatically verifies user transactions over
                  blockchain API and connects to different wallet API providers
                  using an adapter design pattern. This application generated
                  necessary alerts if the payment is due. Report generation,
                  comprehensive latest payments and withdraws, full-access admin
                  panel, and two-step verification are some of its prominent
                  features.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>
                  <span
                    class="badge badge-laravel px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'laravel']" />
                    Laravel5.6
                  </span>
                  <span
                    class="badge badge-html px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'html5']" />
                    HTML
                  </span>
                  <span
                    class="badge badge-bootstrap px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'bootstrap']" />
                    Bootstrap
                  </span>
                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>

                  <span
                    class="badge badge-blockio text-black px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/blockio.png"
                      alt="blockio"
                      width="16"
                      height="16"
                    />
                    BLOCK.IO payment api
                  </span>

                  <span
                    class="badge badge-telegram px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'telegram']" />
                    Telegram BOT Api
                  </span>
                </h2>

                <br />

                <li class="text-blue mt-10">
                  <!-- <a href="https://ravankarsematec.com/"> -->
                  <strong> Ravankar Sematec</strong>
                  <!-- </a> -->

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Oct 2018
                  </time>

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    1 month
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    2 developers
                  </span>
                </li>
                <p class="mt-3">
                  The project is promoting elevator manufacture, related
                  services, and equipment marketing. The program utilizes an
                  online purchase system that authenticates users could place an
                  order and the admin could follow up. The project is
                  implemented in both English and Persian languages.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>
                  <span
                    class="badge badge-laravel px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'laravel']" />
                    Laravel
                  </span>
                  <span
                    class="badge badge-html px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'html5']" />
                    HTML
                  </span>
                  <span
                    class="badge badge-bootstrap px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'bootstrap']" />
                    Bootstrap
                  </span>
                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                </h2>
                <br />

                <li class="text-blue mt-10">
                  <!-- <a href="https://mandegar.co.com/"> -->
                  <strong> Mandegar</strong>
                  <!-- </a> -->

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Sep 2018
                  </time>

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    1 month
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    2 developers
                  </span>
                </li>
                <p class="mt-3">
                  A sofa and chair manufacturing website which aims to promote
                  and attract more clients for the company. Place online orders,
                  follow-up orders, multiple nested admin permission roles with
                  spatie package, and comprehensive gallery and showcase
                  functionality are some of the most prominent features of this
                  application.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>
                  <span
                    class="badge badge-laravel px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'laravel']" />
                    Laravel
                  </span>
                  <span
                    class="badge badge-html px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'html5']" />
                    HTML
                  </span>
                  <span
                    class="badge badge-bootstrap px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'bootstrap']" />
                    Bootstrap
                  </span>
                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                </h2>
                <br />

                <li class="text-blue mt-10">
                  <!-- <a href="https://comicfarsi.com/"> -->
                  <strong> Comic Farsi</strong>
                  <!-- </a> -->

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    Jul 2018
                  </time>

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    2 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    2 developers
                  </span>
                </li>
                <p class="mt-3">
                  An online comic store which makes both digital and physical
                  versions of comic books and accessories available. The users
                  could register and purchase a subscription to get access to a
                  massive comic collection. Online payment gateway, advanced
                  search system, and an attractive UI is some of the prominent
                  features of this web application.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>
                  <span
                    class="badge badge-laravel px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'laravel']" />
                    Laravel
                  </span>
                  <span
                    class="badge badge-html px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'html5']" />
                    HTML
                  </span>
                  <span
                    class="badge badge-bootstrap px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'bootstrap']" />
                    Bootstrap
                  </span>
                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                </h2>
                <br />

                <li class="text-blue mt-10">
                  <!-- <a href="https://dadgozar.com/"> -->
                  <strong> Dadgozaar</strong>
                  <!-- </a> -->

                  <time
                    class="tag timeline__date mb-1 text-sm leading-none text-white dark:text-gray-200 px-2 py-1 rounded-md bg-blue-400 cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'calendar-days']" />

                    May 2018
                  </time>

                  <span
                    class="tag px-2 py-1 rounded-md bg-red-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'clock']" />

                    2 months
                  </span>
                  <span
                    class="tag px-2 py-1 rounded-md bg-purple-400 text-white cursor-pointer ml-3"
                  >
                    <font-awesome-icon :icon="['fa', 'users']" />

                    2 developers
                  </span>
                </li>
                <p class="mt-3">
                  Advance B2B system which connects clients to lawyers. A list
                  of lawyers registered and verified by the admin is available
                  on the website and once a user makes a payment the case is
                  started by the related lawyer and only once did the case
                  finalization is verified by the user, the payment minus the
                  commission amount would be sent out to the case lawyer. The
                  platform also holds a service where users could place a
                  judicial question anonymously and could be answered by a
                  random lawyer.
                </p>
                <h2 class="mt-5 md:pl-10 overflow-y-auto">
                  <strong> Technologies:</strong>
                  <span
                    class="badge badge-laravel px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'laravel']" />
                    Laravel
                  </span>
                  <span
                    class="badge badge-html px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'html5']" />
                    HTML
                  </span>
                  <span
                    class="badge badge-bootstrap px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <font-awesome-icon :icon="['fab', 'bootstrap']" />
                    Bootstrap
                  </span>
                  <span class="badge badge-css px-3 py-2 rounded-2xl my-3 mr-1">
                    <font-awesome-icon :icon="['fab', 'css3']" />
                    CSS
                  </span>
                  <span
                    class="badge badge-mysql px-3 py-2 rounded-2xl my-3 mr-1"
                  >
                    <img
                      src="/images/mysql.png"
                      alt="mysql"
                      width="16"
                      height="16"
                    />
                    MYSQL
                  </span>
                </h2>
                <br />
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div class="timeline grid grid-cols-1">
        <h1 class="timeline__title">Education</h1>
        <div>
          <ol class="relative border-l border-gray-800 dark:border-gray-200">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-800 rounded-full -left-1.5 border border-gray-800 dark:border-gray-200 dark:bg-gray-200"
              ></div>
              <time
                class="timeline__date mb-1 text-sm leading-none text-gray-400 dark:text-gray-500"
                >Sep 2013 - Feb 2017</time
              >

              <ul class="list mb-3">
                <p>
                  Bachelor of Science in Computer Engineering(ABET accredited
                  program) Eastern Mediterranean University, Famagusta, Cyprus
                </p>
                <br />
                <li>
                  Graduated with high honours and with GPA of 3.94 on a 4.00
                  scale
                </li>
                <li>
                  Graduated as top student in the Computer Engineering
                  Department
                </li>
                <li>
                  Degree completed in just seven semesters with seven high
                  honour certificates
                </li>
                <li>
                  Received the highest grade in almost all computer-related
                  courses
                </li>
                <br />
                <h3><strong>CourseWork:</strong></h3>
                <p>
                  Programming Fundamentals, Data Structures, Object Oriented
                  Programming, Operating Systems, Systems Programming, Analysis
                  of Algorithms, Computer Architecture and Organization,
                  Computer Networks, Database Management Systems, Programming
                  Language Design, Software Engineering.
                </p>
                <h3>
                  <strong
                    >Graduation Project Topic: E-COMMERCE WEBSITE DESIGN
                  </strong>
                </h3>
                <p>
                  The project is to design and implement a Web-based system for
                  Eastern Mediterranean University such that the students can
                  sell or buy any kind of second-hand items online
                </p>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div class="timeline grid grid-cols-1">
        <h1 class="timeline__title">Language Skills</h1>
        <div>
          <ol class="relative border-l border-gray-800 dark:border-gray-200">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-800 rounded-full -left-1.5 border border-gray-800 dark:border-gray-200 dark:bg-gray-200"
              ></div>

              <ul class="list mb-3">
                <li>Persian: Native</li>
                <li>
                  English: Fluent in reading, writing, and speaking – IELTS
                  (L8.5, R7.5, W7.0, S7.5, Overall7.5)
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <div class="timeline grid grid-cols-1">
        <h1 class="timeline__title">References</h1>
        <div>
          <ol class="relative border-l border-gray-800 dark:border-gray-200">
            <li class="mb-10 ml-4">
              <div
                class="absolute w-3 h-3 bg-gray-800 rounded-full -left-1.5 border border-gray-800 dark:border-gray-200 dark:bg-gray-200"
              ></div>

              <ul class="list mb-3">
                <p>Will be provided upon request</p>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CV",
  layout: "Resume",
  head() {
    return {
      title: "SHAYAN MOTALEBI - CV PAGE",
    };
  },

  methods: {
    printSection() {
      console.log("printing");
      window.print();
    },
  },

  data() {
    return {
      data: [],
      phone_number: process.env.NUXT_PUBLIC_PHONE_NUMBER,
    };
  },
});
</script>

<style lang="scss" scoped>
// import font
@import url("https://fonts.googleapis.com/css2?family=Akshar:wght@300&family=Inconsolata:wght@300&display=swap");

/* define variables*/
$background-color: #2d2d2d;
$title-color: #d07277;
$white-color: #2d2d2d;
$subtitle-color: #5e574d;
$blue-color: #5d84cc;
$lightblue-color: #4c6d85;
$string-color: #936b5a;
$gold-color: gold;
$darkgold-color: #f0a500;
$red-color: #d07277;
$light-blue-color: #5d84cc;
$green-color: #1c851c;
$white-color: #eee;
$laravel-color: #d07277;
$html-color: #ff5722;
$bootstrap-color: #7010f0;
$css-color: #006cb4;
$mysql-color: #ea8b09;
$telegram-color: #32a1db;
$blockio-color: #f5cf00;
$react-color: #10d2f6;
$expressjs-color: #ebd81c;
$typescript-color: #2f74c0;
$mongodb-color: #006548;
$kavimo-color: #b17340;
$materialui-color: #1180c6;
$next-color: #f7f7f7;
$antdesign-color: #1079f7;
$nativebase-color: #1680ac;
$django-color: #092d1f;
$sepidar-color: #ffffff;
$socketio-color: #ffffff;
$adonisjs-color: #21004f;
$profile-element: linear-gradient(45deg, #bfbfd9, #fff);
$profile-pils-back: rgba(0, 0, 0, 0.05);
$profile-text-primary: #333;
$profile-text-secondary: #555;
$profile-text-third: #000;
$profile-text-cv: #1a53ff;

////////////////
// reset class
////////////////
* {
  font-family: "Inconsolata", monospace;
}
img {
  display: inline;
}

/////////////
// atomic class
/////////////

.text-red {
  color: $red-color;
}
.text-light-blue {
  color: $light_blue-color;
}
.text-green {
  color: $green-color;
}
.text-blue {
  color: $blue-color;
}
.text-gold {
  color: $gold-color;
}
.text-darkgold {
  color: $darkgold-color;
}
.text-lightblue {
  color: $lightblue-color;
}
.text-string {
  color: $string-color;
}
.font-size-18 {
  font-size: 18px;
}
.bg-container {
  background-color: $background-color;
}
.text-justify {
  text-align: justify;
}
.badge-laravel {
  background-color: $laravel-color;
  color: white;
}
.badge-html {
  background-color: $html-color;
  color: white;
}
.badge-bootstrap {
  background-color: $bootstrap-color;
  color: white;
}
.badge-css {
  background-color: $css-color;
  color: white;
}
.badge-mysql {
  background-color: $mysql-color;
  color: white;
}
.badge-telegram {
  background-color: $telegram-color;
  color: white;
}
.badge-blockio {
  background-color: $blockio-color;
  color: white;
}
.badge-react {
  background-color: $react-color;
  color: white;
}

.badge-nativebase {
  background-color: $nativebase-color;
  color: white;
}

.badge-expressjs {
  background-color: $expressjs-color;
}
.badge-typescript {
  background-color: $typescript-color;
  color: white;
}
.badge-mongodb {
  background-color: $mongodb-color;
  color: white;
}

.badge-kavimo {
  background-color: $kavimo-color;
  color: white;
}
.badge-materialui {
  background-color: $materialui-color;
  color: white;
}
.badge-next {
  background-color: $next-color;
}
.badge-antdesign {
  background-color: $antdesign-color;
  color: white;
}

.badge-django {
  background-color: $django-color;
  color: white;
}
.badge-sepidar {
  background-color: $sepidar-color;
}
.badge-socketio {
  background-color: $socketio-color;
}
.badge-adonisjs {
  background-color: $adonisjs-color;
  color: white;
}

/////////////////
// badge section
/////////////////
.badge {
  line-height: 3rem;
  white-space: nowrap;
  border-radius: 20px !important;
}

/////////////////
// tag section
/////////////////
.tag {
  line-height: 2.4rem;
  white-space: nowrap;
}

/////////////////
// List section
/////////////////
.list {
  padding-left: 50px;
  margin-bottom: 72px;

  li {
    list-style-type: circle;
  }
}

/////////////////
// Timeline section
/////////////////
.timeline {
  &__title {
    color: #d07277;
    font-size: 24px;
  }
  &__description {
  }
  &__subtitle {
  }
  &__ps {
  }
  &__date {
    font-size: 16px;
  }
  &__secondary-title {
    font-size: 16px;
  }
}

/////////////////
// Profile section
/////////////////
#container {
  position: relative;
  background: var($profile-element);
  box-shadow: -5px -5px 15px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.6s;
  opacity: 0;
  transform: scale(0.6);
  animation: fade_in 1s forwards;
  padding-bottom: 10px;
  .header {
    position: absolute;
    width: 100%;
    height: 65px;
    z-index: 50;
    h2 {
      display: inline-block;
      float: left;
      font-weight: 400;
      margin: 20px 20px;
    }
    .logo {
      display: block;
      width: 65px;
      height: 50px;
      margin-left: 30px;
      margin-top: 20px;
      float: left;
      background: var(--logo);
      background-size: 100%;
      background-repeat: no-repeat;
    }
    .night-mode {
      position: absolute;
      right: 0px;
      text-align: center;
      margin: 10px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background: rgba(100, 100, 100, 0.1);
      }
      &:active {
        background: rgba(100, 100, 100, 0.3);
      }
      i {
        line-height: 45px;
        color: var($profile-text-primary);
        font-size: 16px;
      }
    }
  }
  .left-section {
    // height: 100%;
    display: flex;
    position: relative;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
    padding: 20px;

    .profile-pic {
      width: 140px;
      flex-basis: 140px;
      flex-shrink: 0;
      border-radius: 50%;
      box-shadow: inset 0 0 10px 6px rgba(0, 0, 0, 0.2);
    }
    .profile-detail {
      margin-left: 20px;
      .profile-name {
        color: var($profile-text-primary);
        font-size: 1.45rem;
        padding-bottom: 10px;
      }
      .profile-maps {
        display: block;
        margin-bottom: 10px;
        color: var($profile-text-third);
        font-size: 1rem;
        i {
          color: var($profile-text-third);
          font-size: 1rem;
        }
      }
      .profile-summary {
        color: var($profile-text-secondary);
        font-size: 0.925rem;
        display: block;
      }
      .profile-summary-2 {
        color: #1c851c;
        font-size: 0.925rem;
        display: flow-root;
      }

      .profile-cv {
        display: block;
        margin-top: 20px;
        color: var($profile-text-cv);
        font-weight: 700;
      }
    }
  }
}

.fa-map-marker {
  padding-right: 10px;
}

.fa-arrow-down {
  padding-left: 10px;
}

.profile-pils {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  .pils {
    box-shadow: inset 0 0 0 1px var(--border),
      0 10px 30px -10px rgba(0, 0, 0, 0.12);
    border-radius: 60px;
    transition: all 0.3s;
    font-size: 13px;
    cursor: pointer;
    margin: 5px;
    color: var($profile-text-primary);
    a,
    a:visited,
    a:link {
      display: block;
      text-decoration: none;
      color: var(--main-2-fore);
      padding: 5px 10px;
      i {
        padding-right: 2px;
      }
    }
    &:nth-child(1):hover {
      box-shadow: inset 0 0 0 1px #007cf8,
        0 10px 35px -10px rgba(20, 122, 255, 0.5);
      i {
        color: #007cf8;
      }
    }
    &:nth-child(2):hover {
      box-shadow: inset 0 0 0 1px #fff,
        0 10px 30px -10px rgba(100, 100, 100, 0.6);
    }
    &:nth-child(3):hover {
      box-shadow: inset 0 0 0 1px #f154ff,
        0 10px 35px -10px rgba(255, 59, 245, 0.5);
      i {
        color: #f154ff;
      }
    }
    &:nth-child(4):hover {
      box-shadow: inset 0 0 0 1px #163ca3,
        0 10px 30px -10px rgba(13, 60, 121, 0.5);
      i {
        color: #163ca3;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  #container {
    width: 540px;
    .left-section {
      width: 100%;
      flex-direction: row;
    }
  }

  .profile-pic {
    margin: 0 15px;
  }

  .profile-detail {
    flex-basis: 400px;
  }

  .profile-pils {
    justify-content: center;
    margin: 0 10px;
    flex-basis: 240px;
  }

  .pop-up-menu {
    width: 190px;
    .list-menu {
      li {
        font-size: 18px;
        text-align: right;
        margin-bottom: 5px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #container {
    flex-grow: 1;
    height: 100%;
    .left-section {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      padding: 10px;

      .profile-detail {
        padding: 20px;
      }
    }
  }

  .profile-pils {
    justify-content: center;
  }

  .pop-up-menu {
    width: 100%;
    height: 100%;
    background: var(--menu);
    .list-menu {
      margin-top: 50px;
      li {
        font-size: 26px;
        text-align: center;
        margin-bottom: 30px;
      }
    }
  }
}

/* Action */
#night:checked {
  & ~ .foreground .night-mode i {
    color: var(--main-1-fore);
  }
}

#menu:checked {
  & ~ #container .pop-up-menu {
    right: 0;
    transition: opacity 0.5s, right 0.3s;
    opacity: 1;
  }

  & ~ #container .menu div {
    width: 20px !important;
    transition: all 0.3s;
  }

  & ~ #container .menu div:nth-child(2) {
    opacity: 0;
  }

  & ~ #container .menu div:nth-child(1) {
    margin-top: 30px;
    transform: rotateZ(-45deg);
  }

  & ~ #container .menu div:nth-child(3) {
    opacity: 0;
  }

  & ~ #container .works {
    transform: translateX(-200px);
    transition: transform 0.3s;
  }
}

/* Keyframe */

@keyframes fade_in {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.text-blue {
  color: #5d84cc;
}

////////////////////////////////////////
//profile image
////////////////////////////////////////
.image-box-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  position: relative;
  width: 250px;
  height: 250px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  overflow: hidden !important;
}

.box::before {
  content: "";
  position: absolute;
  inset: -5px 70px;
  background: linear-gradient(315deg, #00ccff, #d400d4);
  transition: 0.5s;
  animation: border-animation 4s linear infinite;
}

.box:hover::before {
  inset: -20px 0px;
}

@keyframes border-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.box::after {
  content: "";
  position: absolute;
  inset: 3px;
  background: #162052;
  border-radius: 50%;
  z-index: 1;
}

.content {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  inset: 15px;
  border: 3px solid #070a1c;
  border-radius: 50%;
  overflow: hidden;
  z-index: 3;
}

.content img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.75s;
  pointer-events: none;
  z-index: 3;
}

.box:hover .content img {
  opacity: 0;
}

.content h2 {
  position: relative;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
}

.content h2 span {
  font-size: 0.75rem;
  font-weight: 300;
}

.content a {
  position: relative;
  margin-top: 5px;
  padding: 5px 10px;
  background: #fff;
  color: #070a1c;
  border-radius: 25px;
  font-size: 1.25rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  text-decoration: none;
  transition: 0.5s;
}

.content a:hover {
  letter-spacing: 0.2rem;
}

// @media (min-width: 640px) {
//   //
// }
// @media (min-width: 768px) {
//   //
// }
// @media (min-width: 1024px) {
//   //
// }
// @media (min-width: 1280px) {
//   //
// }
// @media (min-width: 1536px) {
//   //
// }
</style>
