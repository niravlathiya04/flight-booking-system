# Flight Booking System

This project is a modular Flight Booking System built with Node.js and Express, designed using a microservices architecture. The system is divided into several independent services to ensure scalability, maintainability, and ease of development.

## Microservices Overview

- **user_service**: Handles user registration, authentication, and profile management.
- **booking_service**: Manages flight search, booking, cancellations, and booking history.
- **notification_service**: Sends notifications (email, SMS, etc.) to users about booking status, reminders, and updates.
- **mailer_service**: Responsible for sending emails such as booking confirmations, password resets, and promotional offers.

## Project Structure

```
flight-booking-system/
├── user_service/
├── booking_service/
├── notification_service/
├── mailer_service/
├── index.js
├── package.json
└── .gitignore
```

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/niravlathiya04/flight-booking-system.git
   cd flight-booking-system
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server
Start the Express server:
```bash
node index.js
```
The server will run on `http://localhost:3000` by default.

## API Endpoints
- `/user` - User Service
- `/booking` - Booking Service
- `/notification` - Notification Service
- `/mailer` - Mailer Service

Each microservice will have its own set of endpoints and logic, to be implemented in their respective folders.

## Contributing
Feel free to fork this repository, make changes, and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License. 