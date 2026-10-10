# Marvelous Light Schools

The website for Marvelous Light Schools, a Creche to Senior Secondary school in Ota, Ogun State, Nigeria. Parents can learn about the school, explore each stage of learning, browse photos, and book a visit or send an enquiry.

**Live site:** https://marvelous-light-schools.vercel.app/

Built as volunteer work for the school.

## Features

- **Ten pages** with client-side routing: Home, About, Values, Ethos, Facilities, Why Choose Us, Programmes, Admissions, Gallery and Contact
- **Admissions page** with a five-step application guide, requirements checklist, FAQs and a "Book a school visit" form
- **Working forms** for visit requests and contact enquiries, delivered to the school by email through Formspree, with validation, a sending state, clear success and error messages, and a spam trap
- **Photo gallery** with category filters and a full-screen viewer that supports arrow keys and Escape
- **Programmes page** with tabs for Early Years, Primary, Junior Secondary and Senior Secondary
- **Responsive navigation** with a dropdown on desktop and a full menu on mobile
- **Animated impact figures** that count up when scrolled into view

## Accessibility and performance

- Every form field has a visible label, and form results are announced to screen readers
- Menus and the gallery viewer work with the keyboard
- Animations are switched off for visitors who have reduced motion enabled
- Each page is code-split and loads only when visited
- Images are compressed for mobile data; the home page hero went from 8.1 MB to 144 KB

## Tech stack

- React 19
- React Router 7
- Tailwind CSS 4
- Vite 6
- Formspree (form delivery)
- Vercel (hosting)

## Run it locally

```bash
git clone https://github.com/Sophiadaisy22/marvelous-light-schools.git
cd marvelous-light-schools
npm install
npm run dev
```

Then open http://localhost:5173.

Other commands:

| Command | What it does |
|---|---|
| `npm run build` | Builds the site for production into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Checks the code with ESLint |

## Project structure

```
src/
  components/   Shared sections: Navbar, Footer, Hero, Testimonials, Impact...
  pages/        One file per page
  lib/          sendForm.js, the helper that posts forms to Formspree
  assets/       Images
  config.js     Formspree form addresses
  index.css     Tailwind setup and the school's brand colours
```

Page content (text, steps, FAQs, photos, figures) lives in plain lists at the top of each file, so it can be updated without touching the layout code.

## Forms

The two form addresses are set in `src/config.js`. To send submissions to a different inbox, create a form at formspree.io and replace the address there.

## Author

Sophia Ogogo: [GitHub](https://github.com/Sophiadaisy22) · [LinkedIn](https://www.linkedin.com/in/sophia-ogogo-b49b041a0/)
