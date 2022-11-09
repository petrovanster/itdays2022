FROM node as build

WORKDIR /app
COPY ./tic-tac-toe/package*.json ./
RUN npm install

COPY ./tic-tac-toe .

ARG VERSION
RUN npm version ${VERSION}