FROM node:10

WORKDIR /node

COPY package.json package-lock.json webpack.config.js /node/
COPY app/ /node/app/

RUN npm install && npm run build

