
FROM node:20.12-alpine3.19 AS build
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build
FROM nginx:1.27.2-alpine-slim
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html/
EXPOSE 3001
ENTRYPOINT ["nginx","-g","daemon off;"]
