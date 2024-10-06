# Configurable Weather Dashboard

This project is a simple weather dashboard built using **TypeScript** and **Material-UI (MUI)**. It allows users to add and remove weather widgets and switch between Celsius and Fahrenheit for temperature display. The application also persists the user's configuration using `localStorage`, ensuring state is saved between sessions.

## Features

- **Add/Remove Weather Widgets**: Users can dynamically add or remove weather widgets to/from the dashboard.
- **Temperature Unit Toggle**: Toggle between Celsius and Fahrenheit for temperature display.
- **State Persistence**: Widgets and temperature unit preferences are saved in `localStorage`, so the dashboard state is preserved between sessions.
- **Responsive Design**: The layout is fully responsive and adapts to both mobile and desktop screens.
- **Type Safety**: TypeScript is used to ensure type safety for props and state.
- **Weather Data**: Currently, weather data is hardcoded for a sample location (e.g., New York), but it can be easily extended to fetch live data from a weather API.

## Technology Stack

- **React**: For building the user interface.
- **TypeScript**: Ensuring static type checking.
- **Material-UI (MUI)**: For UI components and styling.
- **localStorage**: For persisting user preferences (weather widgets and temperature unit).
- **Jest & React Testing Library** (Optional): For unit testing.

## Setup Instructions

### Prerequisites

- Node.js (>=14.x)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```
