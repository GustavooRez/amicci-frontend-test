# Amicci Weather

## Project Description

**Amicci Weather** is an application developed in **React** and **TypeScript** that allows you to query weather data for a city provided by the user or the current location of the device. The project uses **Google Maps** APIs for geolocation and **OpenWeather** to obtain weather information.

## Features

- Search for weather forecast by city name.
- Get weather forecast based on the user's current location.
- Display of information such as temperature, humidity, wind speed, wind chill, sunrise and sunset times.
- Responsive interface and compatible with mobile devices.

## Technologies Used

- **React 19**
- **TypeScript**
- **Styled Components**
- **Material UI (@mui/material)**
- **OpenWeather API**
- **Google Maps API**
- **React Testing Library**
- **Cypress**

## Requirements

To run the project locally, you need to have installed:
- **Node.js** (v18 or higher recommended)
- **Package manager** (npm or yarn)

## Environment Configuration

Before running the project, create a `.env` file in the project root and add the API keys:

```env
REACT_APP_OPEN_WEATHER_API_KEY=YOUR_KEY_HERE
REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_KEY_HERE
```

## How to Run the Project

Clone the repository:
```sh
git clone https://github.com/GustavooRez/amicci-frontend-test.git
```

Install the dependencies:
```sh
npm install # or yarn install
```

Start the development server:
```sh
npm start # or yarn start
```

The application will be available at: `http://localhost:3000`

## Project Structure

```
/amicci-weather
├── cypress/            # E2E Tests
├── public/             # Static files
├── src/    
│ ├── components/       # Reusable components
│ ├── view/             # Application pages
│ ├── tests/            # Unit tests of the application
│ ├── utils/            # Helper functions and API requests
│ ├── interfaces/       # TypeScript type definitions
│ ├── app.tsx           # Main component
│ ├── index.tsx         # React entry point
├── .env                # Environment variable configuration
├── cypress.config.ts   # Cypress configuration
├── package.json        # Dependencies and scripts
├── README.md           # Project documentation
```

## Tests

### Run unit tests:
```sh
npm test # or yarn test
```

### Run tests end-to-end with Cypress:
```sh
npx cypress open
```

## Preview

If you want a preview of the project, you can find its go live version at: https://amicci-frontend-test-seven.vercel.app/

## 📲 Contact

If you have any questions or suggestions, please contact me:

- ✉️ Email: gurezende27.gr@gmail.com
- 👉 LinkedIn: (https://www.linkedin.com/in/gustavo-rezende-dev/)
- 🌐 GitHub: (https://github.com/GustavooRez)

💡 **Developed with REACT** 🚀