from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
from dotenv import load_dotenv
import os

# Load environment variables from a .env file
load_dotenv()  

# Create an instance of the FastAPI class
app = FastAPI()

# Configure CORS (Cross-Origin Resource Sharing) middleware
# This setup allows all domains to access the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Endpoint to get weather information
@app.get("/weather")
def get_weather(city: str):
    # Retrieve the API key from environment variables
    api_key = os.getenv("OPENWEATHERMAP_API_KEY")
    # Build the URL for the OpenWeatherMap API
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
    # Send a GET request to the OpenWeatherMap API
    response = requests.get(url)
    # Return the JSON response received from the API
    return response.json()
