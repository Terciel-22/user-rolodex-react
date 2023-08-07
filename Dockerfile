# Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the production build files into the container
COPY ./build /app

# Expose port 3000 for the React app
EXPOSE 3000

# Set the command to run your React app using a simple HTTP server
CMD ["npx", "http-server", "-p", "3000"]
