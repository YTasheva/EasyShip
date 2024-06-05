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
  - [Key Features](#key-geatures)
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

- the challenge is to present different ways of creating a shipping interface for Pitney Bowes. Consider how to get the information needed to choose a carrier service, shipping cost, and print a label: package dimensions, weight, origin, destination, and details such as when it needs to arrive and any special services. Explore at least 3 options, weighing the pros and cons of each and build a working proof of concept of at least one.

### Project Structure

shipping-website/
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
