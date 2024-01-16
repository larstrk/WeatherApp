# Weather App with FastAPI and React

This is a simple project implementing a weather app with a FastAPI backend and a React frontend. The app fetches weather data using the OpenWeatherMap API and displays it.

## Technologies

- Backend: FastAPI
- Frontend: React
- Weather Data API: OpenWeatherMap

## Setup

### Backend

1. Install the required packages:

   \```bash
   pip install fastapi uvicorn requests python-dotenv
   \```

2. Create a `.env` file in the root directory of your backend project and add your OpenWeatherMap API key:

   \```plaintext
   OPENWEATHERMAP_API_KEY=your_api_key
   \```

3. To start the backend, run the following command:

   \```bash
   uvicorn main:app --reload
   \```

### Frontend

1. Install the necessary Node modules:

   \```bash
   cd path_to_your_react_frontend
   npm install
   \```

2. To start the frontend, run the following command:

   \```bash
   npm start
   \```

## Usage

Open your browser and go to `http://localhost:3000` to use the weather app. Enter the name of a city to display the current weather.

## Contributing

Contributions, bug reports, and feature requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)