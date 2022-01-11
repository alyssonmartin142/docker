#!/bin/sh
yarn prisma migrate dev --name init
yarn prisma generate
yarn run start:prod