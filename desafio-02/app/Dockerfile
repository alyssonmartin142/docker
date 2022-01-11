FROM node:17-alpine3.12 AS builder
WORKDIR /app
# RUN npm install -g @nestjs/cli
COPY package.json .
RUN yarn install
COPY . .
RUN yarn run build

FROM node:17-alpine3.12
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json .
COPY --from=builder /app/.env .
COPY --from=builder /app/init.sh .
RUN yarn install --prod
RUN ["chmod", "+x", "init.sh"]
ENTRYPOINT [ "/bin/sh", "init.sh" ]