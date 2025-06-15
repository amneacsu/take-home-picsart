[![Build/deploy](https://github.com/amneacsu/take-home-picsart/actions/workflows/static.yml/badge.svg)](https://github.com/amneacsu/take-home-picsart/actions/workflows/static.yml)

# Take-Home Project

This is a front-end project built as part of a take-home test. It demonstrates core app functionality using modern tooling and clean architecture.

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or later recommended)
- npm

### Installation

```bash
npm install
```

💬 Note: This project uses a `.env` file for secrets (e.g. API keys) during build. See `.env.example`.

---

## 📦 Available Commands

### Development

```bash
npm run dev
```

Starts the development server in development mode with hot reloading.

```bash
npm run prod
```

Starts the development server using production build settings (for debugging production behavior locally).

### Build

```bash
npm run build
```

Builds the static assets in production mode. Output is generated in the `dist/` directory.

### Linting

```bash
npm run lint
```

Runs the linter on the codebase.

### Type Checking

```bash
npm run check-types
```

Runs TypeScript for type checking without emitting files.

### Testing

```bash
npm run test
```

Runs unit and integration tests using Jest and React Testing Library.

---

## 🧠 Design Decisions

- **No runtime dependencies:** The app avoids client-side libraries where possible to reduce bundle size and improve performance.
- **Modular code structure:** Code is split into feature-specific modules to improve maintainability.
- **React Query** is used for efficient data fetching with minimal boilerplate.
- **Zod** validates and infers API responses type, for increased type safety.
- Images API is mocked using **Faker** during most of development, to avoid hitting rate limits.
- **Rspack** is used instead of Webpack, for 10x faster builds.

## 🔮 Future Improvements

The following features were considered but not implemented due to time constraints:

- **Responsive image sizing:** Although the API provides multiple resolutions, they are all pre-cropped. The image endpoint supports query parameters for resizing, which could be leveraged to serve smaller images based on screen size. However, manipulating these URLs reliably would require additional handling and might be brittle without official support or documentation.
- **Enhanced visual design:** The current styles are intentionally minimal and were not a primary focus for this implementation. Improving the visual design with more refined layout, spacing, typography, and interactions would significantly enhance user experience.
- **Smarter masonry layout:** The current layout uses fixed column widths and does not include any spacing between items. A more advanced implementation would support dynamic column sizing based on screen width and configurable gaps between items for a more polished and readable layout.
- **API rate limiting fallback:** The app assumes normal operation of the API. In a production scenario, rate-limiting responses should be gracefully handled—e.g., via exponential backoff, retries, or notifying the user.

