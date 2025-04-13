# Use Node.js 23-alpine as the base image for building the app
FROM node:23-alpine AS builder

# Add labels for metadata right after the FROM instruction
LABEL org.opencontainers.image.authors="ReallyFatYoshi <contact.reallyfatyoshi@gmail.com>" \
      version="1.0.0" \
      description="Nuxt 3 application Docker image" \
      org.opencontainers.image.source="https://github.com/yourusername/your-nuxt3-app" \
      org.opencontainers.image.licenses="MIT"

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files and build the application
COPY . .
RUN npm run build

# Production stage - Create a minimal image for running the app
FROM node:23-alpine

# Set working directory for the production image
WORKDIR /app

# Copy built assets from the builder stage
COPY --from=builder /app/.output ./.output

# Expose port for the application
EXPOSE 3000

# Command to start the application
CMD ["node", ".output/server/index.mjs"]
