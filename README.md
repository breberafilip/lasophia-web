# La Sophia Web

Webová straka pro neziskovou organizaci La Sophia o.p.s. obsahuje staticky generované stránky přes Nuxt.js ve spojení s Composition API díky poskytovanému plug-inu. Namísto HTML je na většině stránek použitý preprocesor pug a namísto CSS je zde použito SASS. Data jsou vkládána přes administrační prostředí Strapi, do kterého jsou ale také i v opačné straně vkládány (přihlášky apod.). Následný hosting je poté řešen vygenerováním statických stránek v GitHub pipeline a nahráním na Firebase Hosting. https://lasophia.cz

Webpage for non-profit organisation La Sophia o.p.s. is a statically generated website powered by Nuxt.js (Vue 2) with the use of composition-api. For a cleaner coding experience, I decided to use PUG along with SASS instead of HTML and CSS on most of the components. Data are fetched from Strapi CMS during the build process and Strapi is also used for receiving data from forms on the frontend (e.g. contact form). The static website is generated in GitHub Workflows and then deployed to Firebase Hosting. https://lasophia.cz

The code might not be best, since this page was made during 5 days or so 🤷.
