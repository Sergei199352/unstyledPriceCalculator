FROM node:14

WORKDIR /server

COPY package.json .

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]