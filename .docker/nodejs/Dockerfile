FROM node:latest

WORKDIR /app

COPY ./app/package*.json /app

RUN npm install

COPY ../../app .

CMD [ "npm", "run", "start:dev" ]