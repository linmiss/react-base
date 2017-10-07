FROM node:6-alpine

MAINTAINER Tim

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY ["package.json", "npm-shrinkwrap.json*", "./"]

RUN npm install --production --silent && mv node_modules ../ && \
    npm run build

COPY . .

EXPOSE 3000

CMD npm start