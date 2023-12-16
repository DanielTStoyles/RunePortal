FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm isntall
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--open"]