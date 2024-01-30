FROM node 

WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .

RUN VITE_APP_API="https://runeportal.fly.dev/api" npm run build

RUN mkdir ./backend/public

RUN mv ./dist/* ./backend/public

# Set the working directory in the container
WORKDIR /usr/src/app/backend


# Copy package.json and package-lock.json to the working directory
COPY ./backend/package*.json ./

# Install app dependencies
RUN npm install

COPY backend/ .

# Expose the port on which your app runs
EXPOSE 5174

# Command to run your application
CMD ["npm", "start"]

