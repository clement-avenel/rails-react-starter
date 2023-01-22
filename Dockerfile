FROM node:latest
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /app
COPY . .

# Build for production.
# RUN npm run build --production

# Install `serve` to run the application.
# RUN npm install -g serve

RUN npm install

# Set the command to start the node server.
# CMD serve -s build

# # Tell Docker about the port we'll run on.
# EXPOSE 5000