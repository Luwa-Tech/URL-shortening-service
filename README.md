# URL-shortening-service
A simple and efficient URL shortener service built using Node.js, MongoDB, Mongoose, and Nanoid. This service allows users to shorten long URLs into short, manageable links and redirect users to the original URLs using the short links.

## Features:
  - Shorten long URLs into short, unique URLs.
  - Redirect short URLs to the original long URLs.
  - Store URLs in MongoDB for persistence.

## Technologies Used:
  - Node.js: Server-side JavaScript runtime environment.
  - Express.js: Web framework for Node.js.
  - MongoDB: NoSQL database for storing URLs.
  - Mongoose: ODM (Object Data Modeling) library for MongoDB.

## Setup:
   - Installation
       1. Clone the repository
          ```
          git clone https://github.com/Luwa-Tech/URL-shortening-service.git
          cd URL-shortening-service

          ```
       2. Install dependencies
          ```
          npm install
          ```
       3. Set up environment variables: Create a .env file in the root of your project and add the following variables:
          ```
          PORT=8000
          DB_URI=your-mongodb-database-uri
          BASE_URL=http://localhost:8000

          ```

       4. Start the server
          ```
          npm run server
          ```

       The server should now be running on http://localhost:8000.
  - API Endpoints
    - POST /api/v1/shorten
      - Description: Shorten a long URL.
      - Request body:
        ```
        {
          "orgurl": "https://en.wikipedia.org/wiki/Nano-"
        }
        ```
      - Response:
        ```
        {
          
          "message": "URL shortened",
          "result": {
            "urlId": "KoU2vvh8b3TRi49cmoK1L",
            "orgurl": "https://en.wikipedia.org/wiki/Nano-",
            "shorturl": "http://localhost:8000/KoU2vvh8b3TRi49cmoK1L",
            "clicks": 0,
            "createdAt": "Sat Aug 24 2024 23:45:15 GMT+0100 (West Africa Standard Time)",
            "_id": "66ca627b4718be92474b2f84",
            "__v": 0
          }

        }
        ```

    - GET /
      - Description: Redirect to the original URL.
      - Response: Redirects the user to the original long URL.
    

## Usage
  1. Shorten a URL: Send a POST request to /api/shorten with the long URL in the body. You'll receive a shortened URL in the response.
  2. Redirect: Access the shortened URL in your browser to be redirected to the original long URL.

### TODO: 
  - Custom Domain Integration: Allow users to shorten URLs using their custom domains.
