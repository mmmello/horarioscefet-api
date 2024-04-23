FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /app

EXPOSE 3000

CMD ["node", "index.js"]