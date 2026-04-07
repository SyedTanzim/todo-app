# Todo App
 
A clean and responsive Todo application built with vanilla JavaScript, bundled with **Webpack 5**. Supports development and production builds with a streamlined deploy workflow to GitHub Pages.
 
---
 
## Live Demo
 
[View Live on GitHub Pages](https://syedtanzim.github.io/todo-app/)
 
---

## Screenshots

![App Screenshot](https://github.com/user-attachments/assets/75859cf0-3a37-4cc6-ad7e-885feb23e937)

---

## Table of Contents
 
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
  - [Deploying](#deploying)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [License](#license)
 
---
 
## Features
 
- Add, complete, and manage todo items
- Date formatting powered by `date-fns`
- Modular JavaScript with ES Modules
- Optimized production build via Webpack
- Easy one-command deployment to GitHub Pages
 
---
 
## Tech Stack
 
| Technology | Purpose |
|---|---|
| JavaScript (ES Modules) | Application logic |
| HTML / CSS | Markup and styling |
| [Webpack 5](https://webpack.js.org/) | Module bundler |
| [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) | Local development server |
| [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) | HTML file generation |
| [date-fns](https://date-fns.org/) | Date formatting utility |
 
---
 
## Getting Started
 
### Prerequisites
 
Make sure you have the following installed:
 
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)
 
### Installation
 
```bash
# Clone the repository
git clone https://github.com/SyedTanzim/todo-app.git
 
# Navigate into the project directory
cd todo-app
 
# Install dependencies
npm install
```
 
### Running Locally
 
```bash
npm start
```
 
This starts the Webpack development server and automatically opens the app in your browser. The server supports hot reloading — changes you make to source files are reflected instantly.
 
### Building for Production
 
```bash
npm run build
```
 
This generates an optimized production build in the `dist/` directory, ready to be deployed.
 
### Deploying
 
```bash
npm run deploy
```
 
This pushes the contents of the `dist/` folder to the `gh-pages` branch, making the app live on GitHub Pages.
 
---
 
## Project Structure
 
```
todo-app/
├── src/                  # Application source files
├── .gitignore
├── package.json          # Project metadata and scripts
├── package-lock.json
├── webpack.common.js     # Shared Webpack configuration
├── webpack.dev.js        # Development-specific Webpack config
├── webpack.prod.js       # Production-specific Webpack config
└── README.md
```
 
---
 
## Scripts
 
| Command | Description |
|---|---|
| `npm start` | Start the development server with hot reload |
| `npm run build` | Build the app for production into `dist/` |
| `npm run deploy` | Deploy the `dist/` folder to GitHub Pages |
 
---
 
## License
 
This project is licensed under the [MIT License](LICENSE).
 
---
 
<p align="center">Made by <a href="https://github.com/SyedTanzim">SyedTanzim</a></p>