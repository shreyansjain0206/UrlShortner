#UrlShortner
This is a simple URL Shortener built with Node.js, Express, MongoDB, and nanoid. It allows users to generate short URLs for long links and redirect users using those short URLs.

🚀 Features
Generate a short URL for any valid original URL

Store the mapping in a MongoDB database

Redirect users when they visit the short URL

REST API endpoints (testable via Postman)

Project Structure
project-root/
│
├── model/
│   └── UrlS.js            # Mongoose schema for URLs
│
├── routes/
│   └── url.js             # Express routes for shortening and redirecting URLs
│
├── .env                   # Environment variables
├── server.js              # Entry point to the application
├── README.md              # This file

npm install
npm start

