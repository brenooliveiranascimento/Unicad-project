FROM node:16.14-alpine

WORKDIR /app/unicad-frontend

EXPOSE 3001

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "start" ]