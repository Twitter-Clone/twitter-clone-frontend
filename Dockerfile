FROM node:latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app

#RUN npm install -g npm@latest
RUN npm i yarn

COPY . /app

EXPOSE 3000

#CMD ["npm", "start"]
CMD ["yarn", "serve"]
