<template>
  <main class="main">
    <client-only>
      <FireParticles
        color="#DCBA8F"
        :particles-number="100"
        shape-type="star"
        :particle-size="3"
        movement-direction="top"
        lines-color="#dedede"
        :line-linked="false"
        :move-speed="0.75"
      />
    </client-only>
    <div class="container">
      <div class="scroll-list">
        <div class="scroll-list__wrp js-scroll-content js-scroll-list">
          <div class="introText">
            Here are some of my latest projects. The order matters
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/achila.png"
                class="h-full w-full"
                alt="henacoalarmsystem"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">AchilaGol</h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                Web application implemented in nextjs with most of the pages
                preloaded at compile time, gives an native like user expreience.
                The project was designed and implemented in just 1 month and
                aims to target all sort of users whom are looking to buy flowers
                online. The application includes a comprehensive and easy to use
                online perchase system.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>

                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React.js
                </span>

                <span
                  class="badge badge-next rounded-full badge-padding capitalize text-black"
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
                  class="badge badge-bootstrap rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'bootstrap']" />
                  Bootstrap
                </span>
                <span
                  class="badge badge-django rounded-full badge-padding capitalize"
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
                  class="badge badge-mysql rounded-full badge-padding capitalize"
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
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/henaco.png"
                class="h-full w-full"
                alt="henacoalarmsystem"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">
                Henaco Alarm System
              </h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                Mobile application developed using react-native framework for
                IOS and Android. The application communicates with a single NEXA
                Security Alarm system remotely over GSM and manage the security
                system by sending commands via SMS. The application is currently
                in its final development phase and would be released soon.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>

                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React.js
                </span>
                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React Native
                </span>
                <span
                  class="badge badge-nativebase rounded-full badge-padding capitalize"
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
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/parschap.png"
                class="h-full w-full"
                alt="Parschaparia"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">Parschaparia</h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                Progressive web application developed for a packaging
                corporation synchronized with a popular accounting, inventory
                and management system(SEPIDAR) over REST api. Implemented using
                Next.js with preloading all public pages and implementing a
                fast-caching technique (redux preload) gives application mind
                blowing fast routing. Online shopping will generate receipt
                automatically, reduce the amount from inventory and generate
                necessary alerts and notifications. The system constantly
                retrieves latest data from SEPIDAR and gets updated
                automatically.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>

                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React.js
                </span>
                <span
                  class="badge badge-next rounded-full badge-padding capitalize text-black"
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
                  class="badge badge-antdesign rounded-full badge-padding capitalize"
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
                  class="badge badge-django rounded-full badge-padding capitalize"
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
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
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
                  class="badge badge-sepidar rounded-full badge-padding capitalize text-black"
                >
                  <img
                    src="/images/sepidar.png"
                    alt="materialui"
                    width="16"
                    height="16"
                  />
                  SEPIDAR(popular offline comprehensive management platform)
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/30nemafan.png"
                class="h-full w-full"
                alt="30nemafan"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">30nemafan</h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                A mobile movie-based application designed to attract users with
                different tastes in movies, series and collections. Fast
                downloading host coupled with a WordPress application for SEO
                purposes all required tools for a prominent startup and a
                lucrative platform. The application eye-catching design was the
                most challenge we faced.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>

                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React.js
                </span>
                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React Native
                </span>
                <span
                  class="badge badge-nativebase rounded-full badge-padding capitalize"
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
                  class="badge badge-laravel rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'laravel']" />
                  Laravel
                </span>

                <span
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/mysql.png"
                    alt="mysql"
                    width="16"
                    height="16"
                  />
                  MYSQL
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/tanagers.png"
                class="h-full w-full"
                alt="persiantanagers"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">
                Persian Tanagers
              </h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                Online application with using blade for front and offers REST
                api to connect a separate mobile application. The application
                operates both on IOS and Android. Advertisement and blog system
                together with an online shop via PayPal offer services to
                Iranian community based in UK.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>

                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React.js
                </span>
                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React Native
                </span>
                <span
                  class="badge badge-nativebase rounded-full badge-padding capitalize"
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
                  class="badge badge-laravel rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'laravel']" />
                  Laravel
                </span>

                <span
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/mysql.png"
                    alt="mysql"
                    width="16"
                    height="16"
                  />
                  MYSQL
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/zaminaghsat.png"
                class="h-full w-full"
                alt="zaminaghsat"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">ZaminAghsat</h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                Comprehensive real-estate application which advertises
                real-estate properties offering fully automated purchase system
                that handles everything making application management really
                easy. The application offers other features such as purchase for
                another person, fullpeyment/dynamic prepayment with
                installments, the project utilizes the SEO factors, exports all
                data in exel format and more.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>
                <span
                  class="badge badge-laravel rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'laravel']" />
                  Laravel
                </span>
                <span
                  class="badge badge-html rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'html5']" />
                  HTML
                </span>
                <span
                  class="badge badge-bootstrap rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'bootstrap']" />
                  Bootstrap
                </span>
                <span
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/mysql.png"
                    alt="mysql"
                    width="16"
                    height="16"
                  />
                  MYSQL
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/veniz.png"
                class="h-full w-full"
                alt="VenizOIL"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">VenizOIL</h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                Mobile-first react application for managing car accessories
                retailers. Retailers could order new products delivered to them
                using this application. This application also offered more
                features which are car brands and details, gallery, products,
                and many more. The application admin panel offers 5 levels of
                access restrictions and permissions for different case
                scenarios. While the original version of this application works
                on the web, the application source code was written in a
                specific order which could be then exported into singed APK as
                well.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>

                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React.js
                </span>
                <span
                  class="badge badge-antdesign rounded-full badge-padding capitalize"
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
                  class="badge badge-laravel rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'laravel']" />
                  Laravel
                </span>

                <span
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/mysql.png"
                    alt="mysql"
                    width="16"
                    height="16"
                  />
                  MYSQL
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/danamana.png"
                class="h-full w-full"
                alt="danamana"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">Danamana</h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                Progressive Web Application Designed and Developed for Children.
                This Application Offers a wide range of attractive kid online
                services such as Video Contents, Story Telling Contents,
                Exchange Toys together with online Shop. With preloading all
                public pages, the platform offers a SEO friendly environment. A
                Great aspect of this project include the Design Patterns used to
                develop this application which suits best with the business plan
                our client presented. This advantage our client to include new
                features as fast as possible and with a relatively lower price.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>

                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React.js
                </span>
                <span
                  class="badge badge-next rounded-full badge-padding capitalize text-black"
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
                  class="badge badge-typescript rounded-full badge-padding capitalize"
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
                  class="badge badge-expressjs rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/expressjs.png"
                    alt="materialui"
                    width="16"
                    height="16"
                  />

                  Express.js with a custom boilerplate
                </span>

                <span
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/mysql.png"
                    alt="mysql"
                    width="16"
                    height="16"
                  />
                  MYSQL
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img src="/images/uztop.png" class="h-full w-full" alt="uztop" />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">UzTop</h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                A comprehensive social media platform offering groups, channels
                and chat system with individuals. The application also offers
                services such as meeting new friends, survey, tests,
                advertisement and notifications and many more features. A
                mixture use of http and ws protocols made this application
                operates over real-time communication vividly. Divided into
                three massive sections (Moon, Sun and Earth), this application
                aims to connect people and offer in-app purchases.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>

                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React.js
                </span>
                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
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
                  class="badge badge-adonisjs rounded-full badge-padding capitalize"
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
                  class="badge badge-typescript rounded-full badge-padding capitalize"
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
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/mysql.png"
                    alt="mysql"
                    width="16"
                    height="16"
                  />
                  MYSQL
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/jostejoplus.png"
                class="h-full w-full"
                alt="jostejoplus"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">jostejoplus</h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                Modern web application designed for small to mid-level business
                advertisement system. This platform enables users to actively
                interact with their customers through chats and channel rooms
                implemented with real-time WSS protocol. A complete dynamic
                payment system with SMS due time alert makes administration an
                easy task. The application also offers a semi-Instagram
                environment for clients to spend time and for a business a
                chance to take more clients.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>

                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React.js
                </span>
                <span
                  class="badge badge-next rounded-full badge-padding capitalize text-black"
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
                  class="badge badge-antdesign rounded-full badge-padding capitalize"
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
                  class="badge badge-laravel rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'laravel']" />
                  Laravel
                </span>

                <span
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/mysql.png"
                    alt="mysql"
                    width="16"
                    height="16"
                  />
                  MYSQL
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/pordastmalchi.png"
                class="h-full w-full"
                alt="pordastmalchi"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">
                Pordastmalchi – Hedayat e Shoghli
              </h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                Truly unique educational research led to a fantastic online
                project which suggest three best higher education majors for
                late high school students based on a number of behavioral,
                personal, educational, scientific questions. The research
                abstracted into 300 questions in 18 sections which converted
                into a small startup named Hedayat-e-Tahsili(educational
                guidance).
              </p>

              <p>
                <strong> Technologies</strong>:

                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React.js
                </span>
                <span
                  class="badge badge-materialui rounded-full badge-padding capitalize"
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
                  class="badge badge-laravel rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'laravel']" />
                  Laravel
                </span>

                <span
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/mysql.png"
                    alt="mysql"
                    width="16"
                    height="16"
                  />
                  MYSQL
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/kasebekhoob.png"
                class="h-full w-full"
                alt="kasebekhoob"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">Kasebekhoob</h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                An application promoting small businesses, offering a cheap and
                SEO friendly based platform. With a small payment, any business
                could let their previous and potential clients find them on
                internet easily. Custom rating system, due date calculation with
                complex PDO queries are the most prominent features of this
                platform.
              </p>

              <p>
                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React.js
                </span>
                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React Native
                </span>
                <span
                  class="badge badge-nativebase rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/nativebase.png"
                    alt="mysql"
                    width="16"
                    height="16"
                    class="display-inline"
                  />
                  React Native Base
                </span>

                <span
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/amlaksadeghi.png"
                class="h-full w-full"
                alt="amlaksadeghi"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">
                Amlak-sadeghi
              </h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                A Real-Estate advertisement platform with a custom team
                management. The application manages team members and their daily
                activities with several authorizations and permissions based on
                the business strategy. Depending on the member role, activities
                vary from create/update/delete real-estate advertisements,
                creation of content for SEO purposes. This application assembled
                with a custom UI design created for the project.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>

                <span
                  class="badge badge-laravel rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'laravel']" />
                  Laravel5.6
                </span>
                <span
                  class="badge badge-html rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'html5']" />
                  HTML
                </span>
                <span
                  class="badge badge-bootstrap rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'bootstrap']" />
                  Bootstrap
                </span>
                <span
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/mysql.png"
                    alt="mysql"
                    width="16"
                    height="16"
                  />
                  MYSQL
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img src="/images/besat.png" class="h-full w-full" alt="besat" />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">
                BesatPlus - online classroom
              </h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                With over 1500 students, Besat is the most reputable institution
                in Karaj. The application implemented for this institution is an
                online course-based system which offers users both full-payment
                or dynamic prepayment and installment payments courses. This
                application offers many more features such as discount coupons,
                payment tracking, GSM messaging system and more.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>

                <span
                  class="badge badge-react rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'react']" />
                  React.js
                </span>

                <span
                  class="badge badge-bootstrap rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'bootstrap']" />
                  Bootstrap
                </span>

                <span
                  class="badge badge-typescript rounded-full badge-padding capitalize"
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
                  class="badge badge-expressjs rounded-full badge-padding capitalize"
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
                  class="badge badge-kavimo rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/kavimo.png"
                    alt="kavimo"
                    width="16"
                    height="16"
                  />
                  Kavimo(streaming api)
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/coinbit.png"
                class="h-full w-full"
                alt="coinbit"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">
                Coinbit - cryptocurrency investment
              </h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                Laravel application built to offer a wide variety of investment
                plans and information. The application was fully in English and
                automatically verified user transaction over blockchain api and
                connect to different wallet api providers using adapter design
                pattern. The application generated necessary alerts if the
                payment was due. Report generation, comprehensive latest
                payments and withdraws, full-access admin panel and two step
                verification was some of its prominent features.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>
                <span
                  class="badge badge-laravel rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'laravel']" />
                  Laravel5.6
                </span>
                <span
                  class="badge badge-html rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'html5']" />
                  HTML
                </span>
                <span
                  class="badge badge-bootstrap rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'bootstrap']" />
                  Bootstrap
                </span>
                <span
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
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
                  class="badge badge-blockio rounded-full badge-padding capitalize"
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
                  class="badge badge-telegram rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'telegram']" />
                  Telegram BOT Api
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/ravankarsematec.png"
                class="h-full w-full"
                alt="ravankar sematec"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">
                Ravankar Sematec
              </h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                The project is promoting elevator manufacture, related services,
                and equipment marketing. The program utilizes an online purchase
                system that authenticates users could place an order and the
                admin could follow up. The project is implemented in both
                English and Persian languages.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>
                <span
                  class="badge badge-laravel rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'laravel']" />
                  Laravel
                </span>
                <span
                  class="badge badge-html rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'html5']" />
                  HTML
                </span>
                <span
                  class="badge badge-bootstrap rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'bootstrap']" />
                  Bootstrap
                </span>
                <span
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/mysql.png"
                    alt="mysql"
                    width="16"
                    height="16"
                  />
                  MYSQL
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/mandegar.png"
                class="h-full w-full"
                alt="ravankar sematec"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">Mandegar</h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                A sofa and chair manufacturing website which aims to promote and
                attract more clients for the company. Place online orders,
                follow-up orders, multiple nested admin permission roles with
                spatie package, and comprehensive gallery and showcase
                functionality are some of the most prominent features of this
                application.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>
                <span
                  class="badge badge-laravel rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'laravel']" />
                  Laravel
                </span>
                <span
                  class="badge badge-html rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'html5']" />
                  HTML
                </span>
                <span
                  class="badge badge-bootstrap rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'bootstrap']" />
                  Bootstrap
                </span>
                <span
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/mysql.png"
                    alt="mysql"
                    width="16"
                    height="16"
                  />
                  MYSQL
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/comicfarsi.png"
                class="h-full w-full"
                alt="comic farsi"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">Comic Farsi</h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                An online comic store which makes both digital and physical
                versions of comic books and accessories available. The users
                could register and purchase a subscription to get access to a
                massive comic collection. Online payment gateway, advanced
                search system, and an attractive UI is some of the prominent
                features of this web application.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>
                <span
                  class="badge badge-laravel rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'laravel']" />
                  Laravel
                </span>
                <span
                  class="badge badge-html rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'html5']" />
                  HTML
                </span>
                <span
                  class="badge badge-bootstrap rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'bootstrap']" />
                  Bootstrap
                </span>
                <span
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/mysql.png"
                    alt="mysql"
                    width="16"
                    height="16"
                  />
                  MYSQL
                </span>
              </p>
            </div>
          </div>

          <div class="scroll-list__item js-scroll-list-item">
            <div class="image">
              <img
                src="/images/dadgozar.png"
                class="h-full w-full"
                alt="dadgozar"
              />
            </div>
            <div class="desc">
              <h4 class="text-gold" style="font-size: 2.25rem">Dadgozaar</h4>
              <p>
                stage:
                <span
                  class="text-xs text-purple-100 bg-purple-600 rounded-full badge-padding capitalize"
                >
                  Completed</span
                >
              </p>

              <p class="text-justify">
                Advance B2B system which connects clients to lawyers. A list of
                lawyers registered and verified by the admin is available on the
                website and once a user makes a payment the case is started by
                the related lawyer and only once did the case finalization is
                verified by the user, the payment minus the commission amount
                would be sent out to the case lawyer. The platform also holds a
                service where users could place a judicial question anonymously
                and could be answered by a random lawyer.
              </p>

              <p class="overflow-x-auto">
                <strong> Technologies:</strong>
                <span
                  class="badge badge-laravel rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'laravel']" />
                  Laravel
                </span>
                <span
                  class="badge badge-html rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'html5']" />
                  HTML
                </span>
                <span
                  class="badge badge-bootstrap rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'bootstrap']" />
                  Bootstrap
                </span>
                <span
                  class="badge badge-css rounded-full badge-padding capitalize"
                >
                  <font-awesome-icon :icon="['fab', 'css3']" />
                  CSS
                </span>
                <span
                  class="badge badge-mysql rounded-full badge-padding capitalize"
                >
                  <img
                    src="/images/mysql.png"
                    alt="mysql"
                    width="16"
                    height="16"
                  />
                  MYSQL
                </span>
              </p>
            </div>
          </div>

          <div class="introText">
            Following projects are taking advantage of WordPress CMS.
          </div>

          <div
            class="stats-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <a
              class="stats-container"
              v-for="item in wordpress.slice().reverse()"
              :key="item.name"
              :class="item.status == 'active' ? 'green' : 'red'"
              :href="item.domain"
              target="_blank"
            >
              <font-awesome-icon
                :icon="['fab', 'wordpress']"
                size="3x"
                class="icon"
              />

              <div class="counter font-sm">{{ item.name }}</div>
              <h4 style="font-size: 0.75rem">{{ item.name }}</h4>

              <span
                v-if="item.status == 'active'"
                class="text-xs text-green-600"
                >{{ item.status }}</span
              >
              <span v-else class="text-xs text-red-600">{{ item.status }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import $ from "jquery";
import { gsap } from "gsap";

export default Vue.extend({
  name: "Portfolio",
  layout: "MainLayout",

  head() {
    return {
      title: "SHAYAN MOTALEBI - Portfolio Page",
    };
  },

  created: function () {
    console.log("console.log0");
  },

  mounted() {
    const lt = gsap.timeline();
    console.log(lt);
    console.log("this", this.background_url);
  },
  updated() {
    console.log("this", this.background_url);
  },
  // actions
  methods: {
    setBackground_url(str: string) {
      this.background_url = str;
    },
  },
  data() {
    return {
      background_url: "https://picsum.photos/300/300/?image=13",
      data: [
        {
          title: "Coinbit - cryptocurrency investment",
          status: "completed",
          description:
            "Laravel application built to offer a wide variety of investment plans and information. The application was fully in English and automatically verified user transaction over blockchain api and connect to different wallet api providers using adapter design pattern. The application generated necessary alerts if the payment was due. Report generation, comprehensive latest payments and withdraws, full-access admin panel and two step verification was some of its prominent features.",
          technologies: [
            "Laravel5.6",
            "Blade HTML",
            "Bootstrap && Custom CSS",
            "MYSQL",
            "BLOCK.IO payment api",
            "Telegram BOT Api",
          ],
          image: {
            uri: "/images/coinbit.png",
            alt: "coinbit",
          },
        },
        {
          title: "BesatPlus - online classroom",
          status: "completed",
          description:
            "With over 1500 students, Besat is the most reputable institution in Karaj. The application implemented for this institution is an online course-based system which offers users both full-payment or dynamic prepayment and installment payments courses. This application offers many more features such as discount coupons, payment tracking, GSM messaging system and more.",

          technologies: [
            "React.js",
            "Bootstrap",
            "Express.js",
            "TypeScript",
            "MongoDB",
            "Kavimo(streaming api)",
          ],

          image: {
            uri: "/images/besat.png",
            alt: "coinbit",
          },
        },

        {
          title: "Amlak-sadeghi - realstate advertisement and managment",
          status: "completed",
          description:
            "A Real-Estate advertisement platform with a custom team management. The application manages team members and their daily activities with several authorizations and permissions based on the business strategy. Depending on the member role, activities vary from create/update/delete real-estate advertisements, creation of content for SEO purposes. This application assembled with a custom UI design created for the project.",

          technologies: [
            "Laravel5.6",
            "Blade HTML",
            "Bootstrap && Custom CSS",
            "MYSQL",
          ],

          image: {
            uri: "/images/amlaksadeghi.png",
            alt: "Amlaksadeghi",
          },
        },

        {
          title: "Kasebekhoob",
          status: "completed",
          description:
            "An application promoting small businesses, offering a cheap and SEO friendly based platform. With a small payment, any business could let their previous and potential clients find them on internet easily. Custom rating system, due date calculation with complex PDO queries are the most prominent features of this platform.",

          technologies: [
            "Laravel6",
            "Blade HTML",
            "Bootstrap && Custom CSS",
            "MYSQL",
          ],

          image: {
            uri: "/images/kasebekhoob.png",
            alt: "kasebekhoob",
          },
        },

        {
          title: "Pordastmalchi – Hedayat e Shoghli",
          status: "completed",
          description:
            "Truly unique educational research led to a fantastic online project which suggest three best higher education majors for late high school students based on a number of behavioral, personal, educational, scientific questions. The research abstracted into 300 questions in 18 sections which converted into a small startup named Hedayat-e-Tahsili(educational guidance).",

          technologies: [
            "React.js",
            "Laravel",
            "MaterialUI && Custom CSS",
            "MYSQL",
          ],

          image: {
            uri: "/images/pordastmalchi.png",
            alt: "pordastmalchi",
          },
        },

        {
          title: "jostejoplus",
          status: "completed",
          description:
            "Modern web application designed for small to mid-level business advertisement system. This platform enables users to actively interact with their customers through chats and channel rooms implemented with real-time WSS protocol. A complete dynamic payment system with SMS due time alert makes administration an easy task. The application also offers a semi-Instagram environment for clients to spend time and for a business a chance to take more clients.",

          technologies: [
            "React.js",
            "Next.js",
            "Laravel",
            "AntDesing && Custom CSS",
            "Websocket",
            "MYSQL",
          ],

          image: {
            uri: "/images/jostejoplus.png",
            alt: "jostejoplus",
          },
        },

        {
          title: "UzTop",
          status: "completed",
          description:
            "A comprehensive social media platform offering groups, channels and chat system with individuals. The application also offers services such as meeting new friends, survey, tests, advertisement and notifications and many more features. A mixture use of http and ws protocols made this application operates over real-time communication vividly. Divided into three massive sections (Moon, Sun and Earth), this application aims to connect people and offer in-app purchases.",

          technologies: [
            "React Native",
            "Custom CSS",
            "WebSocket",
            "Socket.io",
            "Adonis.js",
            "TypeScript",
            "MYSQL",
          ],

          image: {
            uri: "/images/uztop.png",
            alt: "UzTop",
          },
        },

        {
          title: "Danamana",
          status: "completed",
          description:
            "Progressive Web Application Designed and Developed for Children. This Application Offers a wide range of attractive kid online services such as Video Contents, Story Telling Contents, Exchange Toys together with online Shop. With preloading all public pages, the platform offers a SEO friendly environment. A Great aspect of this project include the Design Patterns used to develop this application which suits best with the business plan our client presented. This advantage our client to include new features as fast as possible and with a relatively lower price.",

          technologies: [
            "React.js",
            "Next.js",
            "Express.js with a custom boilerplate",
            "TypeScript",
            "MYSQL",
          ],

          image: {
            uri: "/images/danamana.png",
            alt: "danamana",
          },
        },

        {
          title: "VenizOIL",
          status: "completed",
          description:
            "Mobile-first react application for managing car accessories retailers. Retailers could order new products delivered to their shop using this application, this application also offered more features which are car brands and details, gallery, products, and many more. Application admin panel offers 5 level of access restrictions and permissions for different case scenarios. While the original version of this application works on web, the application source code was written with a specific order which could be then exported in to singed APK as well.",

          technologies: [
            "React.js",
            "AntDesing && Custom CSS",
            "Laravel",
            "PHP",
            "MYSQL",
          ],
          image: {
            uri: "/images/veniz.png",
            alt: "VenizOIL",
          },
        },
        {
          title: "ZaminAghsat",
          status: "completed",
          description:
            "Comprehensive real-estate application which advertises real-estate properties offering fully automated purchase system that handles everything making application management really easy. The application offers other features such as purchase for another person, fullpeyment/dynamic prepayment with installments, the project utilizes the SEO factors, exports all data in exel format and more.",

          technologies: [
            "Laravel",
            "Blade HTML",
            "Bootstrap && Custom CSS",
            "MYSQL",
          ],

          image: {
            uri: "/images/zaminaghsat.png",
            alt: "ZaminAghsat",
          },
        },

        {
          title: "Persian-tanagers",
          status: "completed",
          description:
            "Online application with using blade for front and offers REST api to connect a separate mobile application. The application operates both on IOS and Android. Advertisement and blog system together with an online shop via PayPal offer services to Iranian community based in UK.",

          technologies: [
            "React-Native",
            "React-native-base && Custom CSS",
            "Laravel",
            "Blade",
            "MYSQL",
          ],
          image: {
            uri: "/images/tanagers.png",
            alt: "persiantanagers",
          },
        },

        {
          title: "30nemafan",
          status: "completed",
          description:
            "A mobile movie-based application designed to attract users with different tastes in movies, series and collections. Fast downloading host coupled with a WordPress application for SEO purposes all required tools for a prominent startup and a lucrative platform. The application eye-catching design was the most challenge we faced.",

          technologies: [
            "React-Native",
            "React-native-base && Custom CSS",
            "Laravel",
            "MYSQL",
            "ParsDOWNLOAD as downloadhost",
            "ParsDOWNLOAD as downloadhost",
          ],

          image: {
            uri: "/images/30nemafan.png",
            alt: "30nemafan",
          },
        },

        {
          title: "Parschaparia",
          status: "completed",
          description:
            "Progressive web application developed for a packaging corporation synchronized with a popular accounting, inventory and management system(SEPIDAR) over REST api. Implemented using Next.js with preloading all public pages and implementing a fast-caching technique (redux preload) gives application mind blowing fast routing. Online shopping will generate receipt automatically, reduce the amount from inventory and generate necessary alerts and notifications. The system constantly retrieves latest data from SEPIDAR and gets updated automatically.",

          technologies: [
            "React.js",
            "Next.js",
            "AntDesing && Custom CSS",
            "Django",
            "MYSQL",
            "SEPIDAR",
          ],

          image: {
            uri: "/images/parschap.png",
            alt: "Parschaparia",
          },
        },
        {
          title: "Henaco Alarm System",
          status: "development",
          description:
            "Mobile application developed using react-native framework for IOS and Android. The application communicates with a single NEXA Security Alarm system remotely over GSM and manage the security system by sending commands via SMS. The application is currently in its final development phase and would be released soon.",
          technologies: ["React-Native", "Native-Base && Custom CSS"],
          image: {
            uri: "/images/henaco.png",
            alt: "henacoalarmsystem",
          },
        },
      ],
      wordpress: [
        {
          name: "اد فالو",
          domain: "https://add-follow.com",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "گیربکس رهنما",
          domain: "https://ag-rahnama.com/ag-rahnama.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "آهن میرحسنی",
          domain: "https://ahanmirhoseini.com",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "آجیل ممو",
          domain: "https://ajilamemo.com",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "آجیل دهقان",
          domain: "https://ajildehghan.ir",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "آجیم گولد",
          domain: "https://ajimgold.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "علی هدف",
          domain: "https://alihadaf.com/alihadaf.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "الماس",
          domain: "https://almas-ig.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "املاک دیدار",
          domain: "https://amlakedidar.com",
          status: "در حال طراحی",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "آنیا استون",
          domain: "https://aniastone.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "آنتیک پرده",
          domain: "https://antikpardeh.com/antikpardeh.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "آرکوپاد",
          domain: "https://archoopad.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "آرسرویس",
          domain: "https://are-service.ir",
          status: "در حال تعمیر",
          url: "زبدگان",
          has_signiture: "ندارد ",
        },
        {
          name: "آرونفیل",
          domain: "https://aronfil.com/aronfil.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "عسل فرید",
          domain: "https://asalfarid.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "آتیس پرداز",
          domain: "https://atispardaz.com/atispardaz.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "آتوسیس",
          domain: "https://atosis.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "آذین پاک البرز",
          domain: "https://azinpakalborz.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "بیبی لندروم",
          domain: "https://babylandroom.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "چوب شهر",
          domain: "https://choobeshahr.ir",
          status: "deactive",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "دکوراویژ",
          domain: "https://decoravij.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "دفت گیم",
          domain: "https://deftgame.com",
          status: "در حال طراحی",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "دلپسند",
          domain: "https://dellpasand.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "دیارسرویس",
          domain: "https://diarservice.com/diarservice.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "دیجی کتاب",
          domain: "https://digiketab-danesh.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "داکروس",
          domain: "https://docrus-magellan.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "داک راشن",
          domain: "https://docrussian.com/docrussian.ir",
          status: "deactive",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "دکتر عظیم زاده",
          domain: "https://drazimzadehtebkar.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "دوساکالا",
          domain: "https://dusakala.ir",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "الکترو صنعت پیشتاز",
          domain: "https://electro-sanat-pishtaz.com/electro-sanat-pishtaz.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "الی بیوتی",
          domain: "https://eliibeauty.ir",
          status: "ندارد",
          url: "زبدگان",
        },
        {
          name: "الینا آرت",
          domain: "https://elina-art.com",
          status: "در حال تعمیر",
          url: "زبدگان",
        },
        {
          name: "ایلون تب",
          domain: "https://elonteb.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "امداد البرز",
          domain: "https://emdad-alborz.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "امداد مهدی",
          domain: "https://emdadmahdi.ir",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "ائتلاف نوآوران البرز",
          domain: "https://etelafnoavaranalborz.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "کمک فنر اطمینان",
          domain: "https://etminankomak.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "فاتر کو",
          domain: "https://faater-co.com/faater-co.ir",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "فالیزان",
          domain: "https://falizaan.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "فالوسوفا بد",
          domain: "https://falosofabed.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "فرجام ملک",
          domain: "https://farjammelk.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "فایبرگلاس عباسپور",
          domain: "https://fiberglass-abaspoor.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "گرین لند",
          domain: "https://greenland-co.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "املاک گریفین",
          domain: "https://griffin-realstate.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "هادی خانی شاپ",
          domain: "https://hadikhanishop.com/hadikhanishop.ir",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "هاوی لوکس استار",
          domain: "https://hawiluxstar.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "حجاب جباری",
          domain: "https://hejabjabari.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "هافمن وین",
          domain: "https://hofmanwiin.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "هما مدا",
          domain: "https://homamoda.ir/homamoda.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "ایمن گستر نوین",
          domain: "https://imengostarnovin.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "آیو ایران",
          domain: "https://ioiran.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "ایران پک",
          domain: "https://iran-pack.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "ایران تایتو",
          domain: "https://irantaito.com/irantaito.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "کجاوه گروه",
          domain: "https://kajavegroup.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "خانه شیرینی کرج",
          domain: "https://khaneh-shirini.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "خانه مدرن",
          domain: "https://khanneh-modern.ir",
          status: "deactive",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "کیانفر گروه",
          domain: "https://kianfargroup.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "کوچینه",
          domain: "https://koochine.com/koochine.ir",
          status: "deactive",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "نرده استیل",
          domain: "https://ksgsteel.com/ksgsteel.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "لیماکر",
          domain: "https://limacaer.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "مانا سرویس",
          domain: "https://mana-service.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "منشور دانش",
          domain: "https://manshourdanesh.com/manshourdanesh.org",
          status: "deactive",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "مسکن دیدار",
          domain: "https://maskandidar.com",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "مانیتور فابریک",
          domain: "https://monitorfabric.com/monitorfabric.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "نگاه دیده برتر",
          domain: "https://negah-dide-bartar.ir",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "شرکت پرستاری گلپاک",
          domain: "https://nursing-golpak.com/nursing-golpak.ir",
          status: "active",
          url: "میهن وب هاست",
          has_signiture: "ندارد",
        },
        {
          name: "امید آذر",
          domain: "https://omid-azar.com/omid-azar.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "پرتو نگار",
          domain: "https://parto-negar.com/parto-negar.ir",
          status: "deactive",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "پی تا کلید",
          domain: "https://peytakelid.com/peytakelid.ir",
          status: "active",
          url: "میزبان فا",
          has_signiture: "ندارد",
        },
        {
          name: "پیلمونیوز",
          domain: "https://pilmonews.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "پل موزیک",
          domain: "https://polmusicacademy.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "پاکا شلف",
          domain: "https://puckashelf.com",
          status: "active",
          url: "میهن وب هاست",
          has_signiture: "ندارد",
        },
        {
          name: "ربیتر شاپ",
          domain: "https://rabbitershop.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "رسا تعمیر",
          domain: "https://rasatamir.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "صبوری هلدینگ",
          domain: "https://saboori-holding.com",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "سالتلند",
          domain: "https://saltland.ir",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "ثنا تعمیر",
          domain: "https://sanatamir.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "سروکاران",
          domain: "https://sarvkaran.com",
          status: "deactive",
          url: "ایران وب هاست",
        },
        {
          name: "مدرسه تاها",
          domain: "https://school-taha.ir",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "سفید چوب",
          domain: "https://sefid-choob.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "صندلی شایان",
          domain: "https://shayan-furniture.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "شیرینگ پک",
          domain: "https://shiringpack.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "اسلایم گوگوری",
          domain: "https://slimegoogoori.com/slimegoogoori.ir",
          status: "active",
          url: "زبدگان",
        },
        {
          name: "اس وی پرتقال",
          domain: "https://svportugal.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "تبریز لنت",
          domain: "https://tabrizlent.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "تخشا دکور",
          domain: "https://takhshadecor.ir",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "تعمیرات مجار",
          domain: "https://tamirat-mojaz.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "تکنو کابینت ایران",
          domain: "https://technokabinetiran.ir",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "تکنو استیل",
          domain: "https://technosteell.ir",
          status: "deactive",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "تکسارین",
          domain: "https://taksarin-co.ir",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "تیلار تایم",
          domain: "https://tilartime.ir",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "حقوق امروز",
          domain: "https://todaylaw.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "تی پیشرو",
          domain: "https://tpishro.com/tpishro.ir",
          status: "deactive",
          url: "زبدگان",
        },
        {
          name: "یو ای لنت",
          domain: "https://ulduzlent.co",
          status: "deactive",
          url: "زبدگان",
          has_signiture: "ندارد",
        },
        {
          name: "وصله سازان",
          domain: "https://vaslehsazan.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "ونیز اویل",
          domain: "https://venizoil.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "لوازم یدکی لیفتراک",
          domain: "https://x-prsco.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "وای ال زد",
          domain: "https://ylzoption.ir/ylzoption.ir",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "وانت بار کرج",
          domain: "https://vanetbaarkaraj.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "نت افراز",
          domain: "https://manto-lavia.com",
          status: "active",
          url: "زبدگان",
          has_signiture: "دارد",
        },
        {
          name: "آتوسا",
          domain: "https://atusa-import-export.com",
          status: "active",
          url: "ایران سرور",
          has_signiture: "ندارد",
        },
        {
          name: "آیلتس پاپ",
          domain: "https://ieltspop.com",
          status: "active",
          url: "ماندگار وب",
          has_signiture: "دارد",
        },
        {
          name: "تیرگان",
          domain: "https://tirgan-epc.com",
          status: "active",
          url: "ماندگار وب",
          has_signiture: "ندارد",
        },
        {
          name: "ای کافی موزیک",
          domain: "https://a-kafimusic.com",
          status: "active",
          url: "ماندگار وب",
          has_signiture: "ندارد",
        },
        {
          name: "کوکوپاف",
          domain: "https://cocopaf.com",
          status: "deactive",
          url: "ماندگار وب",
        },
        {
          name: "ایران دما",
          domain: "https://iran-dama.com",
          status: "active",
          has_signiture: "دارد",
        },
        {
          name: "جیلکو",
          domain: "https://jilco.ir",
          status: "active",
          has_signiture: "ندارد",
        },
        {
          name: "(Sorvan Marble) سروان ماربل",
          domain: "https://sovranomarble.com",
          status: "active",
          url: "ماندگار وب",
          has_signiture: "دارد",
        },
        {
          name: "(Farabi Shop) فاریابی شاپ",
          domain: "https://faryabishop.com",
          status: "active",
          url: "ماندگار وب",
          has_signiture: "ندارد",
        },
        {
          name: "(Ramona Web Accessories) رامونا تجهیز وب",
          domain: "https://ramonatajhizteb.com",
          status: "active",
          url: "ماندگار وب",
          has_signiture: "دارد",
        },
        {
          name: "(Tehran Packaging) تهران پک",
          domain: "https://tehranpak.com",
          status: "active",
          url: "ماندگار وب",
          has_signiture: "دارد",
        },
        {
          name: "(Valiasr Shop) فروشگاه ولیعصر",
          domain: "https://valiasr-ap.com",
          status: "active",
          url: "ماندگار وب",
          has_signiture: "دارد",
        },
        {
          name: "(Behinesazan e Badei) بهین سازان بدیع",
          domain: "https://behinsazan.com",
          status: "active",
          url: "ماندگار وب",
          has_signiture: "دارد",
        },
        {
          name: "(Boof Shop) فروشگاه بوف",
          domain: "https://boofclothing.com",
          status: "active",
          url: "ایران سرور",
          has_signiture: "ندارد",
        },
        {
          name: "(Salahshour Shop) سلحشور شاپ",
          domain: "https://salahshorshop.ir/salahshorshop.com",
          status: "active",
          url: "نت افراز",
          has_signiture: "دارد",
        },
        {
          name: "(Gilani Rice) برنج گیلانی",
          domain: "https://berenjgilani.ir",
          status: "deactive",
          url: "ایران وب هاست",
        },
        {
          name: "(Aein Mehr Diploma) آیین مهر دیپلم",
          domain: "https://aeinmehr-diplom.ir",
          status: "active",
          url: "ایران وب هاست",
        },
        {
          name: "(Sabte Argham) ثبت ارقام",
          domain: "https://sabtargham.com",
          status: "active",
          url: "میهن وب هاست",
          has_signiture: "ندارد",
        },
        {
          name: "(Dorsa Sabt) درسا ثبت",
          domain: "https://dorsasabt.co",
          status: "deactive",
          url: "ایران وب هاست",
        },
        {
          name: "(Emdad Mahdi) امداد مهدی",
          domain: "https://emdadmahdi.ir",
          status: "deactive",
          url: "ایران وب هاست",
        },
        {
          name: "(Fara Alborz) فرا البرز",
          domain: "https://fara-alborz.com",
          status: "deactive",
          url: "ایران وب هاست",
        },
        {
          name: "(Golrokhsaz) گلرخساز",
          domain: "https://golrokhsaz.com",
          status: "active",
          url: "میهن وب هاست",
          has_signiture: "ندارد",
        },
        {
          name: "(Hoopad Language) هوپاد زبان",
          domain: "https://hoopadlanguage.ir",
          status: "deactive",
          url: "ایران وب هاست",
        },
        {
          name: "(MSteel) ام استیل",
          domain: "https://m-steel.ir",
          status: "deactive",
          url: "ایران وب هاست",
        },
        {
          name: "(Partonegar) پرتو نگار",
          domain: "https://parto-negar.com",
          status: "deactive",
          url: "ایران وب هاست",
        },
        {
          name: "(Hello Alborz) سلام البرز",
          domain: "https://salam-alborz.com",
          status: "active",
          url: "ایران وب هاست",
        },
        {
          name: "(Salek School) مدرسه سالک",
          domain: "https://salek-school.ir",
          status: "deactive",
          url: "ایران وب هاست",
        },
        {
          name: "(Soheylie Villa) باغچه سهیلیه",
          domain: "https://soheylie.com",
          status: "active",
          url: "ایران وب هاست",
          has_signiture: "دارد",
        },
        {
          name: "(Royal Mattress) تشک رویال",
          domain: "https://royal-vip.ir",
          status: "active",
          url: "میهن وب هاست",
          has_signiture: "ندارد",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
/* local styles */
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

.text-gold {
  color: #f0bb75;
}
.display-inline {
  display: inline-block;
}
.badge-laravel {
  background-color: $laravel-color;
}
.badge-html {
  background-color: $html-color;
}
.badge-bootstrap {
  background-color: $bootstrap-color;
}
.badge-css {
  background-color: $css-color;
}
.badge-mysql {
  background-color: $mysql-color;
}
.badge-telegram {
  background-color: $telegram-color;
}
.badge-blockio {
  background-color: $blockio-color;
}
.badge-react {
  background-color: $react-color;
}
.badge-expressjs {
  background-color: $expressjs-color;
}
.badge-typescript {
  background-color: $typescript-color;
}
.badge-mongodb {
  background-color: $mongodb-color;
}
.badge-kavimo {
  background-color: $kavimo-color;
}
.badge-materialui {
  background-color: $materialui-color;
}
.badge-next {
  background-color: $next-color;
}
.badge-antdesign {
  background-color: $antdesign-color;
}
.badge-nativebase {
  background-color: $nativebase-color;
}
.badge-django {
  background-color: $django-color;
}
.badge-sepidar {
  background-color: $sepidar-color;
}
.badge-socketio {
  background-color: $socketio-color;
}
.badge-adonisjs {
  background-color: $adonisjs-color;
}

/////////////////
// badge section
/////////////////
.badge {
  line-height: 3rem;
  white-space: nowrap;
  margin-right: 5px;
  img {
    display: inline-block;
  }
}

main {
  padding: 2rem 1.5rem;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  transition: all 0.5;
}

/*# sourceMappingURL=index.css.map */

.MuiSvgIcon-root {
  width: 30px !important;
}

.desc-wordpress {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.portfolioContent {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bg-orange-100 {
  background-color: #f4b12a;
}

.introText {
  /* display: flex;
    flex-direction: column; */
  /* max-width: 600px; */
  font-size: 30px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 1.3px;
  text-align: center;
  /* align-items: center; */
  padding: 5rem 0 40px 0;
  margin-bottom: 75px;
}

.projectsWrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: flex-start;
  max-width: 1400px;
}

.badge-padding {
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;

  &__wordpress {
    border: 1px solid white;
  }
}

.project {
  /* +.description */
  max-width: 600px;
  /* max-height: 100px; */
  /* width: 50%; */
  /* padding: 1rem; */
  margin: 3rem 2rem;
}

.projectContent {
  position: relative;
  box-shadow: 1px 1px 4px #1a1c22;
  border-radius: 4px;
  /* background: linear-gradient(186deg, rgba(255, 255, 255, 1) 0%, rgba(39, 39, 39, 1) 100%); */
  overflow: hidden;
}

.imageOverlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
  /* opacity: 0.6; */
  transition: 0.4s ease;
  /* background-color: white; */
  background: linear-gradient(
    186deg,
    rgba(26, 28, 34, 0) 0%,
    rgba(26, 28, 34, 0.9) 70%,
    rgba(26, 28, 34, 1) 100%
  );
}

.projectImage {
  transition: 0.4s ease;
  filter: blur(1px);
  /* opacity: 0.5; */
  /* box-shadow: inset 0 0 0 2000px rgba(255, 0, 150, 0.4); */
}

.textContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  height: 100%;
  /* width: 100%; */
  top: 0;
  padding: 0 1rem 1rem 1rem;
  /* margin-top: 30%; */
  /* display: block; */
  /* transition: .4s ease; */
}

.projHeading {
  margin-top: 3rem;
  /* width: max-content; */
  /* color: #6A77BB; */
  font-weight: 700;
  /* padding: 0 0.3rem; */
  /* min-width: 10px; */
  text-shadow: 0 0 15px rgba(26, 28, 34, 0.3);
  /* text-align: center; */
  /* background-color: rgba(26, 28, 34, 0.3);
    box-shadow: 0px 0px 10px 1px rgba(28, 28, 34, .8); */
  /* background: linear-gradient(180deg, rgba(28, 28, 34, 0.3) 0%, rgba(27, 28, 34, 0.8) 50%, rgba(26, 28, 34, 0.3) 100%); */
}

.descLink {
  transition: 0.4s ease;
  opacity: 1;
  /* opacity: 0; */
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: flex-end; */
}

.projectContent:hover .imageOverlay {
  opacity: 1;
}

.projectContent:hover .descLink {
  opacity: 1;
}

.headerImage {
  width: 6rem;
  height: 6rem;
}

@media screen and (max-width: 800px) {
  .project {
    margin: 3.5rem 0;
  }
  .introText {
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
  .textContainer {
    /* border: 1px solid red; */
    /* flex-direction: column; */
    /* justify-content: space-between; */
    /* position: absolute; */
    /* text-align: center; */
    /* overflow-wrap: break-word; */
    /* height: 100%; */
    /* padding-right: 1rem; */
  }
  .projHeading {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 20px;
    /* text-align: center; */
    /* color: #6A77BB;
        font-weight: 700; */
  }
  .descLink {
    /* border: 1px solid blue; */
    opacity: 1;
    min-height: 85px;
    /* display: flex;
        flex-direction: column;
        justify-content: space-between; */
  }
  .description {
    /* border: 1px solid yellow; */
    /* font-size: 14px; */
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
    /* overflow: hidden;
        width: 295px;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical; */
    /* max-height: 55px; */
  }
  .gitHubLink {
    font-weight: 700;
  }
}

@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400|Roboto:300,400,500");

$body-bg: #20262e;
$bg-dark: darken($body-bg, 10%);
$bg-light: lighten($body-bg, 10%);
$bg-over-light: lighten($body-bg, 15%);
$bg-super-light: lighten($body-bg, 35%);
$font: "Roboto";
$text: lighten($body-bg, 60%);
$akcentColor: #3266d5;
$shadow: 0px 7px 16px 0px rgba(41, 53, 108, 0.25);

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow-x: hidden !important;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  height: 100%;
}

body {
  position: relative;
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-start;
  // align-items: flex-start;
  font-family: $font, "-apple-system", BlinkMacSystemFont, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.467;
  font-weight: 300;
  letter-spacing: -0.01em;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text;
  background: radial-gradient(ellipse at center, $body-bg 0%, $bg-dark 80%)
    fixed;
}

::-webkit-scrollbar {
  width: 1rem;
  -webkit-transition: 0.3s background;
  transition: 0.3s background;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.85);
  background: $bg-dark;
}
::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: $bg-over-light;
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.5);
}
:hover::-webkit-scrollbar-thumb {
  background: $bg-light;
}

[tabindex="-1"]:focus {
  outline: 0 !important;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Oswald;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

h1 {
  font-size: 2.625rem;
  line-height: 1.2;
}
h2 {
  font-size: 2rem;
  line-height: 1.3;
}
h3 {
  font-size: 1.5rem;
  line-height: 1.4;
}
h4 {
  font-size: 1.25rem;
  line-height: 1.4;
}
h5 {
  font-size: 16px;
  line-height: 1.4;
}
h6 {
  font-size: 0.875rem;
  line-height: 1.4;
}

* + h1,
* + h2,
* + h3,
* + h4,
* + h5,
* + h6 {
  margin-top: 24px;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

a {
  color: inherit;
  text-decoration: none;
}

.underline-animation {
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    // background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
}

.tech-badge {
  padding: 3px;

  background-color: #755b69;
}

.tech-warpper {
}

.btn {
  /* default for <button>, but needed for <a> */
  display: inline-block;
  text-align: center;
  text-decoration: none;

  /* create a small space when buttons wrap on 2 lines */
  margin: 2px 0;

  /* invisible border (will be colored on hover/focus) */
  border: solid 1px transparent;
  border-radius: 4px;

  /* button size comes from text + padding, avoid height */
  padding: 0.5em 1em;
  font-size: 0.875em;
  /* make sure colors have enough contrast! */
  color: #ffffff;
  background-color: $akcentColor;
  transition: all 0.2s ease-in-out;

  /* old-school "down" effect on clic + color tweak */
  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }

  /* inverse colors on hover */
  &:hover {
    color: $akcentColor;
    border-color: currentColor;
    background-color: transparent;
  }

  /* Firefox: remove the inner border shown on focus */
  &::-moz-focus-inner {
    border: none;
  }

  /* make sure we have a visible focus ring */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba($akcentColor, 0.5),
      0 0 0 1.5px rgba($akcentColor, 0.5);
  }

  /* hide focus style if not from keyboard navigation */
  &:focus:not(.focus-visible) {
    box-shadow: none;
  }
}

.ripple {
  background-position: center;
  transition: background 0.8s;
}
.ripple:hover {
  background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
    center/15000%;
}
.ripple:active {
  background-color: #6eb9f7;
  background-size: 100%;
  transition: background 0s;
}

/* Button style */
button {
  border: none;
  border-radius: 2px;
  padding: 1em 1.5em;
  //font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  background-color: $bg-light;
  box-shadow: 0 0 4px #999;
  outline: none;
}

input[type="text"],
input[type="number"],
select,
textarea {
  font-size: 16px;
}

// promotion style
.promotion-card {
  background: rgba(87, 66, 66, 0.829);
  width: 750px;
  height: 200px;
  position: relative;
  overflow: hidden;
  -webkit-box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  -webkit-transition: 0.8s ease;
  transition: 0.8s ease;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    width: 500px;
  }
  @media screen and (max-width: 480px) {
    width: 350px;
  }
}

.promotion-card .promotion-content {
  color: white;
  padding: 1em;
  height: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.promotion-card-header {
  display: flex;
  justify-content: space-between;

  b {
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 20px;
  }
}

.promotion-card.light .promotion-content {
  color: black;
}

.promotion-card .promotion-blob {
  position: absolute;
  right: -80px;
  top: -80px;
  width: 360px;
  height: 360px;
  background: #a26b60;
  border-radius: 320px;
  opacity: 0.8;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
}

.promotion-card .promotion-blob::before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 240px;
  height: 240px;
  background: #e4bdb0;
  border-radius: 320px;
  opacity: 0.9;
  -webkit-transition: 0.25s ease;
  transition: 0.25s ease;
}

.promotion-card .promotion-blob::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 160px;
  height: 160px;
  background: rgb(191, 123, 111);
  border-radius: 320px;
  -webkit-transition: 0.27s ease;
  transition: 0.27s ease;
}

.promotion-card:hover {
  -webkit-transform: translateY(-5%);
  transform: translateY(-5%);
}

.promotion-card:hover .promotion-blob {
  width: 540px;
  height: 540px;
}

.promotion-card:hover .promotion-blob::after {
  width: 240px;
  height: 240px;
}

.promotion-card:hover .promotion-blob::before {
  width: 360px;
  height: 360px;
}

.promotion-card-deck {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 1em;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin-bottom: 10px;
}

.gold {
  background: linear-gradient(90.16deg, #e8b98b 1.46%, #825b4d 101.44%);
  -webkit-text-fill-color: #000;
  color: #d8b257;
  display: inline-block;
}

.img-wrapper {
  position: relative;
  width: 100%;
  padding-top: 75%; // for 4:3, 56.25% for 16:9
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}

// scroll-block

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.scroll-list {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .scroll-list__item:first-of-type {
    margin-top: 32px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 24px;
  }

  h3 {
    position: absolute;
    left: 48px;
    top: 24px;
    max-width: 600px;
    z-index: 3;
  }

  &__wrp {
    width: 100%;
    padding: 1rem;
    //background-color: #252529;
    margin-bottom: 15px;
    border-radius: 8px;

    .scrollbar-track {
      display: none !important;
    }

    @media screen and (max-width: 768px) {
      padding: 12px;
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    height: auto;
    padding: 1.4em;
    // margin-bottom: 1rem;
    cursor: pointer;
    background-color: rgba(87, 66, 66, 0.829);
    transition: all 0.35s ease-in-out;
    opacity: 1;
    transform: scale(0.9);
    border-radius: 8px;
    //box-shadow: $shadow;

    &::after {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      //   background-color: #fff;
      filter: alpha(opacity=10);
      opacity: 0.1;
      z-index: 4;
    }

    &:hover {
      color: rgba(#fff, 0.75);
      box-shadow: 0 0 10px 2px rgba(87, 66, 66, 0.829);
    }

    .image {
      flex: 1 0 200px;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        max-height: 250px;
        height: auto;
        object-fit: cover;
        object-position: center;
        border-radius: 13px !important;
      }

      @media screen and (max-width: 480px) {
        flex-basis: 100%;
        width: 100%;
      }
    }

    .desc {
      display: flex;
      flex-direction: column;
      padding-left: 1rem;
      font-size: 15px;
      justify-content: space-between;
      overflow: hidden;

      div {
        height: 100%;
      }

      .btn {
        text-transform: uppercase;
        background-color: $bg-light;
        justify-self: flex-end;

        &:hover {
          color: rgba(#fff, 0.75);
          background-color: transparent;
        }
      }

      @media screen and (max-width: 480px) {
        padding-left: 0;
        padding-top: 12px;
      }
    }

    &.item-hide {
      opacity: 0;
      transform: scale(0.7);
    }

    &.item-focus {
      opacity: 1;
      transform: scale(1);
      border-radius: 13px;
    }

    &.item-next {
      opacity: 1;
      transform: scale(1);
      border-radius: 13px;

      & + .scroll-list__item {
        opacity: 1;
        transform: scale(1);
      }
    }

    &:last-child {
      margin-bottom: 80px;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 12px;
      padding: 12px;
    }
    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
  }

  &__item1 {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    height: auto;
    padding: 1.4em;
    // margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.35s ease-in-out;
    opacity: 1;
    transform: scale(0.9);
    border-radius: 8px;
    margin-bottom: 150px;
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      //   background-color: #fff;
      filter: alpha(opacity=10);
      opacity: 0.1;
      z-index: 4;
    }

    &:hover {
      color: rgba(#fff, 0.75);
    }

    .image {
      flex: 1 0 200px;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        max-height: 250px;
        height: auto;
        object-fit: cover;
        object-position: center;
        border-radius: 13px !important;
      }

      @media screen and (max-width: 480px) {
        flex-basis: 100%;
        width: 100%;
      }
    }

    .desc {
      display: flex;
      flex-direction: column;
      padding-left: 1rem;
      font-size: 15px;
      justify-content: space-between;
      overflow: hidden;

      div {
        height: 100%;
      }

      .btn {
        text-transform: uppercase;
        background-color: $bg-light;
        justify-self: flex-end;

        &:hover {
          color: rgba(#fff, 0.75);
          background-color: transparent;
        }
      }

      @media screen and (max-width: 480px) {
        padding-left: 0;
        padding-top: 12px;
      }
    }

    &.item-hide {
      opacity: 0;
      transform: scale(0.7);
    }

    &.item-focus {
      opacity: 1;
      transform: scale(1);
      border-radius: 13px;
    }

    &.item-next {
      opacity: 1;
      transform: scale(1);
      border-radius: 13px;

      & + .scroll-list__item {
        opacity: 1;

        transform: scale(1);
      }
    }

    &:last-child {
      margin-bottom: 80px;
    }

    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
  }
}

@media screen and (max-width: 350px) {
  .descLink {
  }
  .description {
    font-size: 14px;
    /* text-overflow: ellipsis; */
    /* white-space: nowrap; */
    overflow: hidden;
    width: 240px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    /* max-height: 55px; */
  }
}

///////////////////////////

.stats-wrapper {
  margin: 0;

  text-align: center;
}
.stats-container {
  background: #152238;

  margin: 20px;
  min-width: 200px;
  height: 176px;
  border-radius: 12px 12px 0 0;
  position: relative;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}
.stats-container.orange {
  border-bottom: 5px solid #fca311;
}
.stats-container.green {
  border-bottom: 5px solid #00c771;
}
.stats-container.red {
  border-bottom: 5px solid #e63946;
}
.stats-container.orange {
  color: #fca311;
}
.stats-container.red {
  color: #e63946;
}
.stats-container.green {
  color: #00c771;
}

.stats-container div {
  color: #888888;
}

.stats-container h4 {
  position: absolute;
  bottom: 1px;
  font-weight: 400;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  color: #888888;
}

.icon {
  position: absolute;
  top: -24px;
  left: 50%;
  transform: translateX(-50%);
  background: #152238;
  padding: 10px;
  border-radius: 50%;
  color: white;
}

.counter {
  font-size: 17px;
  position: absolute;
  left: 50%;
  top: 38%;
  transform: translateX(-50%);
  color: rgb(0, 0, 0);
}
button {
  position: absolute;
  top: -80px;
  left: 0;
  background-color: #ffffff;
  border: 0;
  outline: none;
  padding: 5px;
  cursor: pointer;
  border: 2px solid #888888;
}
</style>
