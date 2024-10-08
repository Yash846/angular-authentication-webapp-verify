# FROM node:18-alpine AS build

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# RUN npm install -g @angular/cli

# COPY . .

# EXPOSE 8080

# CMD ["npm", "run", "prod"]



# RUN npm run build --configuration=production

# FROM nginx:latest

# COPY --from=build app/dist/tcs-angular-app /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/conf.d/default.conf 

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

# Use an official Node runtime as the base image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Angular CLI (New)
RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Build the app (New)
RUN ng build --configuration=production

# Expose the port the app runs on
EXPOSE 8080

# Copy the start script (New)
COPY start.sh .
RUN chmod +x start.sh

# Command to run the application (Changed)
CMD ["./start.sh"]