FROM node:18-alpine

RUN yarn global add pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN apk --no-cache add curl

RUN pnpm install

COPY . .

EXPOSE 8081

CMD pnpm start:dev