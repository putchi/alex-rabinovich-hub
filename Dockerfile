FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG VITE_OWNER_NAME
ARG VITE_SITE_TITLE
ARG VITE_SITE_DESCRIPTION
ARG VITE_SANITY_PROJECT_ID
ARG VITE_SANITY_DATASET
ARG VITE_SANITY_TOKEN
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
