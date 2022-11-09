FROM node as build

WORKDIR /app
COPY ./tic-tac-toe/package*.json ./
RUN npm install

COPY ./tic-tac-toe .

ARG VERSION
RUN npm version ${VERSION}
RUN npm run test-ci
RUN npm run build


FROM nginx:alpine as webserver
COPY --from=build /app/build /usr/share/nginx/html