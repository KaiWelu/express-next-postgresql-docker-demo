#use node
FROM node:20

#sets the working directory
WORKDIR /app

#copies the pagacke.json to /app directory
COPY package*.json /app

#install modules
RUN npm install

#copy the prisma folder
COPY prisma ./prisma

#generate prisma schemas
RUN npx prisma generate

#copy the rest of the files
COPY . .

#eposes the port 4000
EXPOSE 4000

#runs index.js
CMD ["node", "index.js"]
