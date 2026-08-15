# curiouscompass.in — Travel Explorer (Homepage)

React + Vite build of the homepage design. This is step one of the travel
management project — later pieces (search, trip details, booking flow,
auth, dashboard) can be added as new pages/components inside `src/`.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Project structure

```
travel-explorer/
├── index.html                  Vite entry HTML
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                React root
    ├── App.jsx                 Assembles the homepage from sections
    ├── index.css                Design tokens (colors, fonts) + global resets
    ├── data/
    │   └── destinations.js     Card content — edit this to add/remove destinations
    └── components/
        ├── Navbar.jsx / .css        Logo, nav links, sign up button
        ├── Hero.jsx  / .css         Full-bleed hero, headline, CTAs
        ├── FilterTabs.jsx / .css    Floating "Popular / Trending" pill toggle
        ├── Destinations.jsx / .css  Section heading + card grid
        └── DestinationCard.jsx / .css   Single destination card
```

## Notes for what's next

- **Images:** the hero and cards currently use CSS gradients as placeholders
  (see comments in `Hero.css` and `data/destinations.js`) so the project runs
  with zero broken links. Drop real photos into `public/images/` and swap the
  gradient for `url('/images/your-photo.jpg')` when ready.
- **Routing:** there's only one page right now. When we add Travel,
  Destinate, Blog, etc. as real pages, we'll want `react-router-dom`.
- **Data:** destination cards read from `src/data/destinations.js` — this is
  where we'd eventually swap in an API call instead of the static array.
