<h1 align="center">EasyShip</h1>
  <br>
  <a href="https://github.com/andrewyu22">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg?style=for-the-badge" alt=""></a>
  <a href="https://github.com/andrewyu22/EasyShip/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/andrewyu22/EasyShip.svg?style=for-the-badge" alt=""></a>
  <a href="https://github.com/andrewyu22/EasyShip/issues">
      <img src="https://img.shields.io/github/issues/andrewyu22/EasyShip.svg?style=for-the-badge" alt=""></a>
  <a href="https://github.com/andrewyu22/EasyShip/network/members">
      <img src="https://img.shields.io/github/forks/andrewyu22/EasyShip.svg?style=for-the-badge" alt=""></a>

  ## Table of contents

- [Overview](#overview)
- [The Challenge](#the-challenge)
  - [Base Requirements](#base-requirements)
  - [Key Features](#key-features)
- [Screenshot](#screenshot)
- [Links](#links)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Presentation Slides](#presentation-slides)
- [Contributing](#contributing)
- [Licence](#licence)
- [Authors](#authors)

## Overview

- Welcome to the EasyShip Website! The goal of the app is to upload a packing slip document using Azure AI, send the image to an Azure Function and analyze the data using Microsoft AI Document Intelligence Model.

- The function will return a model to the app and the final user would modify, if needed, the data received. The last step is store the data and call the Pitney Bowes API to search for carrier, services, prices, etc., and respond it back to the users to select.

- This repository contains the codebase and documentation for a comprehensive web application designed to manage shipping operations, track shipments, and enhance customer experience. This README provides an overview of the project, installation instructions, key features, and guidelines for contributing. 

## The Challenge

- The challenge is to present different ways of creating a shipping interface for Pitney Bowes. Consider how to get the information needed to choose a carrier service, shipping cost, and print a label: package dimensions, weight, origin, destination, and details such as when it needs to arrive and any special services. Explore at least 3 options, weighing the pros and cons of each and build a working proof of concept of at least one.

### Base Requirements

- Technologies that are used:
  - [ ] React
  - [ ] Navigation with `React Router`, dynamic rendering, or another third-party router
  - [ ] Azure CLI
  - [ ] Pitney Bowes Shipping 360 API
  - [ ] Tailwind
  - [ ] Azure AI
### Key Features

  1. [ ] **User Registration and Authentication:**  Secure user registration, login, and account management.
     
  2. [ ] **Order Management:**  Place, track, and manage shipping orders with real-time updates.
     
  3. [ ] **Payment Processing:**  Secure payment gateway integration for processing payments.
     
  4. [ ] **Shipment Tracking:**  Real-time shipment tracking with status updates and notifications.
     
  5. [ ] **Admin Dashboard:** Comprehensive dashboard for administrators to manage orders, users, and deliveries.
      
  6. [ ] **Customer Support:**  In-app chat and support ticket system for customer inquiries and issues.
      
  7. [ ] **Analytics and Reporting:**  Detailed reports and analytics for business insights and decision-making.

## Screenshot



## Links

- [Deployed Application](https://andrewyu22.github.io/EasyShip/)
- [GitHub Repo](https://github.com/andrewyu22/EasyShip)

## Installation

- To run this project locally, follow these steps:

1. [ ] **Clone the Repository:**
   `git clone https://github.com/yourusername/EasyShip.git`
`cd EasyShip`

3. [ ] **Install Dependencies:**
   `npm install`
   
5. [ ] **Set Up Environment Variables:**
 - Create a `.env` file in the root directory and add the necessary environment variables. Example:
   
   REACT_APP_API_URL=https://api.easyship.com

   REACT_APP_GOOGLE_MAPS_API_KEY=your-api-key

4. [ ] **Run the Application:**
 `npm start`

6. [ ] **Build for Production:**
   `npm run build`

## Usage

- **Development Server:**
After running `npm start`, the application will be available at `http://localhost:3000`.

- **Production Build:**
The production-ready build files will be in the `build/` directory after running `npm run build`.

## API Documentation

- API documentation is available to provide detailed information on endpoints, request/response formats, and usage examples. Refer to the https://docs.shipping360.pitneybowes.com/docs/ for comprehensive API documentation.

## Presentation Slides

- The presentation slides for this project are available at the following link: [EasyShip Presentation](https://docs.google.com/presentation/d/1woZTMol0gyt9CoVaGTZaJUQrIompAaDguUSXlBGqLR8/edit?usp=sharing)

## Contributing

- We welcome contributions to improve this project. Please follow these steps:

1. [ ] Fork the repository.
2. [ ] Create a new branch with a descriptive name (feature/add-new-feature).
3. [ ] Make your changes and commit them with descriptive messages.
4. [ ] Push your changes to your forked repository.
5. [ ] Create a Pull Request to the main branch of the original repository.
6. [ ] Please ensure your code adheres to our coding standards and includes relevant tests.

## Licence

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Authors

- GitHub - [Andrew YU](https://github.com/andrewyu22) [Yuliya Tasheva](https://github.com/YTasheva)
- For any questions, suggestions, or issues, please contact our team at
  
> [EasyShip.com](#) &nbsp;&middot;&nbsp;
> Email [easyship@gmail.com](#) &nbsp;&middot;&nbsp;

**Thank you for using and contributing to the EasyShip website! Your support helps us continually improve and deliver the best shipping management experience.**





