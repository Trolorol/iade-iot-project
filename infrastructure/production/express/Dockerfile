FROM node:latest
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
RUN git clone https://github.com/Trolorol/iade-iot-project.git .
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install
CMD ["npm", "start"]