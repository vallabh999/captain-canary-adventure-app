# Demo Node.js Application

This is a simple Node.js application that displays "Hello World" along with the server's absolute URL and a static version number.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

- Node.js
- Docker (for containerization)

### Installing

A step by step series of examples that tell you how to get a development environment running

1. Clone the repo
2. Navigate to the repo directory
3. Run `npm install` to install dependencies
4. Run `node app.js` to start the server locally

### Using Docker

To build and run the app as a Docker container:

1. Build the image: `docker build -t demo-node-app .`
2. Run the container: `docker run -p 3000:3000 demo-node-app`

Navigate to `http://localhost:3000` in your browser to view the app.
