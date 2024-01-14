# Wetter-App mit FastAPI und React

Dies ist ein einfaches Projekt, das eine Wetter-App mit einem FastAPI-Backend und einem React-Frontend implementiert. Die App ruft Wetterdaten über die OpenWeatherMap API ab und zeigt sie an.

## Technologien

- Backend: FastAPI
- Frontend: React
- API für Wetterdaten: OpenWeatherMap

## Setup

### Backend

1. Installiere die erforderlichen Pakete:

   \```bash
   pip install fastapi uvicorn requests python-dotenv
   \```

2. Erstelle eine `.env`-Datei im Root-Verzeichnis des Backend-Projekts und füge deinen OpenWeatherMap API-Key hinzu:

   \```plaintext
   OPENWEATHERMAP_API_KEY=dein_api_key
   \```

3. Um das Backend zu starten, führe den folgenden Befehl aus:

   \```bash
   uvicorn main:app --reload
   \```

### Frontend

1. Installiere die benötigten Node-Module:

   \```bash
   cd pfad_zu_deinem_react_frontend
   npm install
   \```

2. Um das Frontend zu starten, führe den folgenden Befehl aus:

   \```bash
   npm start
   \```

## Verwendung

Öffne deinen Browser und gehe zu `http://localhost:3000`, um die Wetter-App zu verwenden. Gib den Namen einer Stadt ein, um das aktuelle Wetter anzuzeigen.


