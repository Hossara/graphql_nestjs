FROM node:18-alpine AS base

RUN yarn global add pnpm

ENV NITRO_HOST=0.0.0.0 NITRO_PORT=3000 NITRO_PRESET=node_cluster

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

CMD pnpm dev