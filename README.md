<h1 align="center">EasyShip</h1>
  <br>
  <a href="https://github.com/andrewyu22">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg?style=for-thebadge" alt=""></a>
  <a href="https://github.com/andrewyu22/EasyShip/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/andrewyu22/EasyShip.svg?style=for-the-badge" alt=""></a>
  <a href="https://github.com/andrewyu22/EasyShip/issues">
      <img src="https://img.shields.io/github/issues/andrewyu22/EasyShip.svg?style=for-the-badge" alt=""></a>
  <a href="https://github.com/andrewyu22/EasyShip/network/members">
      <img src="https://img.shields.io/github/forks/andrewyu22/EasyShip.svg?style=for-the-badge" alt=""></a>

  ## Table of contents

- [Overview](#overview)
- [The Challenge](#the-challenge)
  - [Project Structure](#project-structure)
  - [Base Requirements](#base-requirements)
  - [Key Features](#key-features)
  - [Required Component Content](#required-component-content)
  - [Updated Social Media Presence](#updated-social-media-presence)
    - [LinkedIn](#linkedin)
    - [GitHub](#github)
- [Technical Acceptance Criteria](#acceptance-criteria)
- [Screenshot](#screenshot)
- [Links](#links)
- [Installation](#installation)
- [Licence](#licence)
- [Author](#author)

## Overview

- Welcome to the EasyShip Website! This repository contains the codebase and documentation for a comprehensive web application designed to manage shipping operations, track shipments, and enhance customer experience. This README provides an overview of the project, installation instructions, key features, and guidelines for contributing. 

## The Challenge

- The challenge is to present different ways of creating a shipping interface for Pitney Bowes. Consider how to get the information needed to choose a carrier service, shipping cost, and print a label: package dimensions, weight, origin, destination, and details such as when it needs to arrive and any special services. Explore at least 3 options, weighing the pros and cons of each and build a working proof of concept of at least one.

### Project Structure

EasyShip/
│
├── src/
│   ├── components/          # React components
│   ├── pages/               # Application pages
│   ├── services/            # API service calls
│   ├── styles/              # CSS and style files
│   ├── utils/               # Utility functions
│   └── App.js               # Main application component
│
├── public/
│   ├── index.html           # Main HTML file
│   └── assets/              # Images, icons, and other static assets
│
├── tests/
│   ├── unit/                # Unit tests
│   └── integration/         # Integration tests
│
├── .gitignore               # Git ignore file
├── README.md                # Project README file
├── package.json             # NPM package configuration
├── package-lock.json        # NPM package lock file
└── webpack.config.js        # Webpack configuration file
    
### Base Requirements

- Technologies that are used:
  - [ ] React
  - [ ] Navigation with `React Router`, dynamic rendering, or another third-party router
  - [ ] Azure AI
  - [ ] Pitney Bowes Shipping 360 API
  - [ ] Tailwind
- The application **contains** the following information:
  - [ ] Project Title
  - [ ] Links to:
    - [ ] GitHub Profile
    - [ ] Email Address
    - [ ] Phone Number - (optional)
    - [ ] PowerPoint Slides
      - [ ] Link to the deployed version
      - [ ] Link to the GitHub repository
      - [ ] GIF or screenshot of the deployed application

### Key Features

  1. [ ] **User Registration and Authentication:** Secure user registration, login, and account management.
  2. [ ] **Order Management:** Place, track, and manage shipping orders with real-time updates.
  3. [ ] **Payment Processing:** Secure payment gateway integration for processing payments.
  4. [ ] **Shipment Tracking:** Real-time shipment tracking with status updates and notifications.
  5. [ ] **Admin Dashboard:** Comprehensive dashboard for administrators to manage orders, users, and deliveries.
  6. [ ] **Customer Support:** In-app chat and support ticket system for customer inquiries and issues.
  7. [ ] **Analytics and Reporting:** Detailed reports and analytics for business insights and decision-making.

## Screenshot



## Links

- [Deployed Application](https://EasyShip.netlify.app/)
- [GitHub Repo](https://github.com/andrewyu22/EasyShip)

## Installation

- To run this project locally, follow these steps:

1. [ ] Clone the Repository:
   `git clone https://github.com/yourusername/EasyShip.git`
`cd EasyShip`

3. [ ] Install Dependencies:
   `npm install`
   
5. [ ] Set Up Environment Variables:
 - Create a `.env` file in the root directory and add the necessary environment variables. Example:
   
   REACT_APP_API_URL=https://api.easyship.com
REACT_APP_GOOGLE_MAPS_API_KEY=your-api-key

4. [ ] Run the Application:
 `npm start`

6. [ ] Build for Production:
   `npm run build`
