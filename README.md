# ToDoList Web App

A simple ToDoList web application built using Node.js, Express, and MongoDB.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

This ToDoList web application allows users to create, view, and manage their daily tasks. It provides a user-friendly interface to add, delete, and mark tasks as completed. The application is built using the following technologies:

- Node.js
- Express
- MongoDB

## Features

- Create a new task
- View tasks for the day
- Create custom lists with specific tasks
- Mark tasks as completed
- Delete tasks

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ToDoList.git
   
2. Install dependencies:

   ```bash
   npm install

3. Configure MongoDB:

   - Create a MongoDB Atlas account: MongoDB Atlas
   - Create a cluster and obtain your connection string
   - Replace the connection string in app.js with your own MongoDB connection string
  
4. Run the application:
   ```bash
    node app.js
   
## Usage
Access the app's main page to view and manage your default ToDo list.
Create custom lists by navigating to http://localhost:3001/custom-list-name.
Add tasks, update their status, or delete them as needed.

## Technologies Used
    -Node.js
    -Express
    -MongoDB
    
## Contributing
Feel free to contribute to the project. Fork the repository and create a pull request with your changes.

## Acknowledgments
Thanks to lodash for utility functions
