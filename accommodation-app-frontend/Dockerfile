FROM node:20 as buildstage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

FROM nginx:1.25-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=buildstage /usr/src/app/dist .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
