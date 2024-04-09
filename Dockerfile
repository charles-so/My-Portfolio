# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy all files to the working directory
COPY . .

# Build the project
RUN npm run build

# Expose the port used for previewing the application
EXPOSE 8080

# Set the command to run the preview server
CMD ["npm", "run", "preview"]
