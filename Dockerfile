FROM node:lts-alpine3.15

EXPOSE ${PORT}

WORKDIR /home/app/

COPY package*.json .
RUN npm install
COPY . .
CMD ["npm","run","typeorm:migration"]
CMD ["npm","run","start"]
