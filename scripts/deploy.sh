#!/bin/bash
set -e

echo "Starting E-commerce backend deployment..."

echo "Pulling the latest Docker image..."
docker compose pull app

echo "Recreating the backend container with the latest image..."
docker compose up -d --no-deps --force-recreate app

echo "Waiting for the application to start..."
sleep 5

echo "Checking application health..."
if curl --fail --silent http://localhost:3000/health > /dev/null; then
    echo "Deployment successful!"
else
    echo "Deployment failed: health check unsuccessful."
    exit 1
fi