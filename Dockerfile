FROM node:current-alpine AS build


WORKDIR /usr/src/app

COPY package*.json ./
COPY ormconfig.json ./

RUN npm install

COPY . .



EXPOSE 8080


RUN npm run build

CMD [ "node", "./dist/index.js" ]
