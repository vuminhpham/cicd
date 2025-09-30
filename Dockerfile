# --- Bước 1: Build React app ---
FROM node:18-alpine AS build

# Thư mục làm việc
WORKDIR /app

# Copy file package.json và cài dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build sản phẩm React
RUN npm run build


# --- Bước 2: Serve với Nginx ---
FROM nginx:alpine

# Copy build React vào thư mục nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copy file cấu hình nginx (nếu cần)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
