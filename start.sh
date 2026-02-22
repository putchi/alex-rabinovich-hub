#!/bin/bash
set -e

REBUILD=false
RESTART=false
DEV=false
TEST_LOCAL=false
TEST_DOCKER=false

for arg in "$@"; do
  case $arg in
    --dev)          DEV=true ;;
    --test:local)   TEST_LOCAL=true ;;
    --test:docker | --docker) TEST_DOCKER=true ;;
    --rebuild)      REBUILD=true ;;
    --restart)      RESTART=true ;;
  esac
done

if [ "$DEV" = true ]; then
  echo "Starting local dev server..."
  echo "  → http://localhost:5173"
  npm run dev
  exit $?
fi

if [ "$TEST_LOCAL" = true ]; then
  echo "Running tests locally..."
  npm test
  exit $?
fi

if [ "$TEST_DOCKER" = true ]; then
  echo "Running tests in Docker (no server started)..."
  docker compose run --rm test
  exit $?
fi

if [ "$RESTART" = true ]; then
  docker compose down
fi

if [ "$REBUILD" = true ]; then
  docker compose build --no-cache
fi

docker compose up -d
echo "Started Docker services."
echo "  → http://localhost:8080"

if [ "$RESTART" = true ] || [ "$REBUILD" = true ]; then
  echo "Starting local dev server..."
  npm run dev
fi
