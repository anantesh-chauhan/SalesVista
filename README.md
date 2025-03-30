# SalesVista Dashboard

## Overview
The SalesVista Dashboard is a responsive and interactive dashboard designed for sales analytics and reporting. It provides key insights into customer metrics, sales performance, and category breakdowns with a modern and dark-themed UI.

## Features
- Real-time data updates for sales metrics.
- Visual representation of sales trends over the year.
- Category-wise sales distribution using a donut chart.
- Interactive data table for product sales with pagination.
- Intuitive navigation and quick access to various modules such as Products, Customers, Transactions, and Sales.
- Dark theme with clear data visualization.
- Option to download reports.
- User profile and role display (e.g., Pharmacist).

## Technologies Used
### Backend
- **Node.js**: Provides an efficient and scalable server-side runtime environment for building fast and lightweight backend applications.
- **Express**: A web application framework for Node.js that simplifies server setup and routing.
- **Mongoose (MongoDB)**: An ODM (Object Data Modeling) library for MongoDB and Node.js, making it easy to work with MongoDB data.
- **Helmet**: Helps secure the application by setting various HTTP headers.
- **Morgan**: HTTP request logger middleware for monitoring and debugging server requests.
- **Dotenv**: Loads environment variables from a `.env` file into `process.env`, ensuring sensitive data is managed securely.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing, allowing communication between client and server hosted on different origins.
- **Nodemon**: Automatically restarts the server when file changes are detected, enhancing development efficiency.

### Frontend
- **React**: A JavaScript library for building interactive user interfaces with component-based architecture.
- **Material-UI (MUI)**: A popular React UI framework that provides a set of accessible and customizable components.
- **Redux Toolkit**: Simplifies state management in React applications and integrates well with Redux for managing global state.
- **React Router DOM**: Handles client-side routing and navigation between different pages or views in the application.
- **Nivo**: A data visualization library built on top of D3, offering beautifully designed and interactive charts.
- **React Datepicker**: A lightweight and flexible date picker component to enhance date selection in forms.

## How to Run
### Backend (Server)
1. Clone the repository:
   ```bash
   git clone https://github.com/anantesh-chauhan/SalesVista.git
   cd SalesVista/server
   ```
2. Install server dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
4. The server will run at:
   ```
http://localhost:5000
```

### Frontend (Client)
1. Navigate to the client folder:
   ```bash
   cd SalesVista/client
   ```
2. Install client dependencies:
   ```bash
   npm install
   ```
3. Start the client:
   ```bash
   npm start
   ```
4. Access the dashboard at:
   ```
http://localhost:3000
```

## Usage
- Navigate through the sidebar to explore different modules.
- View sales metrics and trends on the main dashboard.
- Download reports using the 'Download Reports' button.
- Check individual sales details from the data table.



