# Sprichweg - German Language School Website

A modern, responsive website for Sprichweg German Language School, featuring multilingual support for Ukrainian, German, and English.

## Features

- Fully responsive design works on desktop, tablet, and mobile devices
- Multilingual support with language switching (Ukrainian, German, English)
- Modern UI with German and Ukrainian thematic colors
- Course presentation section
- About section
- Contact form
- Smooth navigation

## Tech Stack

- React
- TypeScript
- Vite
- i18next for internationalization
- Styled Components for component styling
- Tailwind CSS for utility classes

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/sprichweg.git
cd sprichweg
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Project Structure

```
sprichweg/
├── public/            # Static assets
│   └── images/        # Website images
├── src/               # Source code
│   ├── components/    # React components
│   ├── i18n/          # Internationalization
│   │   └── locales/   # Translation files
│   ├── App.tsx        # Main App component
│   ├── index.css      # Global styles
│   └── main.tsx       # Entry point
├── index.html         # HTML template
└── package.json       # Dependencies and scripts
```

## Adding More Languages

To add more languages, create a new JSON file in `src/i18n/locales/` with the language code as the filename (e.g., `fr.json` for French). Then add the language to the i18n configuration in `src/i18n/i18n.ts` and update the language switcher in `src/components/LanguageSwitcher.tsx`.

## License

This project is licensed under the MIT License.
# sprichweg
