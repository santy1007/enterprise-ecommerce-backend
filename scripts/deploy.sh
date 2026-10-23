#!/bin/bash
set -e

COMPOSE_PROJECT="e-commerce-backend"
COMPOSE_FILE="$GITHUB_WORKSPACE/docker-compose.yml"

echo "Starting E-commerce backend deployment..."

echo "Pulling the latest Docker image..."
docker compose -p "$COMPOSE_PROJECT" -f "$COMPOSE_FILE" pull app

echo "Recreating the backend container..."
docker compose -p "$COMPOSE_PROJECT" -f "$COMPOSE_FILE" up \
  -d --no-deps --force-recreate app

echo "Waiting for the application to start..."
sleep 5

echo "Checking application health..."
if curl --fail --silent http://localhost:3000/health > /dev/null; then
    echo "Deployment successful!"
else
    echo "Deployment failed: health check unsuccessful."
    exit 1
fi