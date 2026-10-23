# Miriam Bensafiddine – Digital Designer

A personal portfolio for Miriam Bensafiddine, a digital designer and creative technologist based in Stockholm. The website showcases selected projects within creative direction, visual identity, motion design, and front-end development.

**Website:** [miriambensafiddine.se](https://miriambensafiddine.se)

## Contents

- Profile, services, and selected projects featuring images and video clips
- Contact form via Formspree and social media links
- Privacy policy, cookie policy, and terms of use in `villkor/`
- A simple confirmation page in `pages/success.html`

## 🛠️ Tech Stack

[![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://miriambensafiddine.se)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Three.js](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
[![Formspree](https://img.shields.io/badge/Formspree-E61A24?style=for-the-badge&logo=formspree&logoColor=white)](https://formspree.io/)

## 🧰 Tooling

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
> **Note:** Python is used only for running a local development server; no Python code is included in the project itself, and no additional Python packages or dependencies are required beyond the standard library.

## Project Structure

```plaintext
index.html              Homepage and portfolio content
assets/css/             Stylesheets
assets/js/              JavaScript and visual effects
assets/img/             Images
assets/mov/             Video material
assets/fonts/           Fonts
assets/icons/           Icons
assets/favicons/        Favicons and app icons
pages/                  Other HTML pages
villkor/                Privacy policy, cookie policy, and terms of use
wrangler.jsonc          Wrangler configuration for static assets
```

## Run Locally

Requires Python 3. Run from the project root: `python3 -m http.server 8000`
Then open [http://localhost:8000](http://localhost:8000) in your browser—a local web server is necessary because the website uses root-relative paths such as `/assets/...`.

## Deployment

The repository includes a Wrangler configuration that specifies the project root `(.)` as the directory for static assets. With Wrangler installed and the Cloudflare account configured, the website can be deployed using either:

- `npx wrangler deploy` (if Wrangler is installed locally)
- `wrangler deploy` (if Wrangler is installed globally)

## Copyright

© 2026 Miriam Bensafiddine. All rights reserved. The code, design, and media assets in this repository may not be copied, cloned, or reused without explicit permission.
