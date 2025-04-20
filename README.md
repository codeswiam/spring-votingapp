# Voting App

This is a full-stack voting application that allows users to create polls, vote on options, and view poll results in real-time. The backend is built with Spring Boot, and the frontend is developed using Angular.

## Features

- Create polls with multiple options.
- Vote on poll options.
- View real-time poll results.
- Responsive UI with Bootstrap integration.

## Project Structure

- **Backend**: Located in the `votingapp` directory, built with Spring Boot.
- **Frontend**: Located in the `poll-app` directory, built with Angular.

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd votingapp
   ```

2. Configure the database in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:8889/voting-app
   spring.datasource.username=root
   spring.datasource.password=root
   ```

3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

   The backend will start on `http://localhost:8080`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd poll-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The frontend will start on `http://localhost:4200`.

## API Endpoints

### Poll Endpoints

- **Create Poll**: `POST /api/polls`
- **Get All Polls**: `GET /api/polls`
- **Get Poll by ID**: `GET /api/polls/{id}`
- **Vote on Poll**: `POST /api/polls/vote`
