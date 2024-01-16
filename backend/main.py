from fastapi import FastAPI
import requests
from dotenv import load_dotenv
import os

load_dotenv()  

app = FastAPI()

@app.get("/weather")
def get_weather(city: str):
    api_key = os.getenv("OPENWEATHERMAP_API_KEY")
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"
    response = requests.get(url)
    return response.json()

