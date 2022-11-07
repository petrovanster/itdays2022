FROM node as build

WORKDIR /app
COPY ./tic-tac-toe/package*.json ./
RUN npm install

COPY ./tic-tac-toe .

RUN npm run build


FROM nginx:alpine as webserver
COPY --from=build /app/build /usr/share/nginx/html