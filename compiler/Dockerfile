FROM node:22-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    g++ \
    gcc \
    openjdk-17-jdk \
    python3 \
    make

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node","index.js"]