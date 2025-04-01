# S&P 500 Watch

A modern web application for tracking S&P 500 index performance with real-time data visualization and interactive features.

## Features

- Sleek dark-themed UI with gradient backgrounds
- Real-time S&P 500 index price tracking
- Price change indicators with color coding
- Interactive search functionality with smooth animations
- Responsive design that adapts to different screen sizes
- Modern chart visualization for price trends
- Clean and minimalist interface

## Tech Stack

- React 18+ with TypeScript for robust type safety
- Vite for lightning-fast development and building
- Modern CSS3 features:
  - CSS Grid and Flexbox
  - Custom gradients and transitions
  - Dynamic shadows and animations
  - Responsive units (vw-based sizing)
- SVG-based search icon integration

## Prerequisites

Before running this application, make sure you have:
- Node.js (v16 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Pipboy-approved/SP500
cd SP500
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at:
- Local: http://localhost:5173 (or similar port)
- Network: Use `npm run dev -- --host` to expose on your network

## UI Components

The application features several key UI components:

1. Main Display
   - S&P 500 index value in large, bold typography
   - Current price with real-time updates
   - Price change percentage with color indicators

2. Search Interface
   - Expandable search button with smooth animations
   - Interactive hover and focus states
   - SVG icon integration

3. Chart Area
   - Dynamic price visualization
   - Responsive sizing
   - Shadow effects for depth

## Styling

The application uses a carefully crafted dark theme with:
- Dark gradient backgrounds (#111 to #112)
- Subtle border effects
- Box shadows for depth
- Smooth transitions
- Text shadows for readability
- Responsive font sizing

## Development

The project structure is organized as follows:
- `src/` - Source code files
  - `App.tsx` - Main application component
  - `main.tsx` - Application entry point
- `styles.css` - Global styles with modern CSS features in Vanilla CSS
- `public/` - Static assets

## Building for Production

To create a production build:

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
