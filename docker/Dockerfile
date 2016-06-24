FROM twentyfifth/base-node:5

# Install app specific entrypoint
ADD docker/entrypoint.sh /entrypoint-app.sh

# Install default configuration
RUN cp config/config.json.example config.json
