# Use an official Node.js runtime as the base image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy all files to the working directory
COPY . .

# Expose the port used for previewing the application
EXPOSE 3000

# Set the command to run the preview server
CMD ["npm", "index.js"]
