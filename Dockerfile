# syntax=docker/dockerfile:1.4

FROM node:18 AS backend-dev

WORKDIR /usr/local/app

COPY ./server/package*.json .
RUN npm install

COPY ./server/index.js .

EXPOSE 3000
CMD ["node", "./index.js"]

# You can optionally add a client-dev stage below if you use a build step for static assets
# FROM node:18 AS client-dev
# WORKDIR /usr/local/app
# COPY ./public ./public
# (no build needed for plain HTML/JS/CSS if using nginx)
