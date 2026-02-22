#!/bin/bash
set -e

DEV=false
DOCKER=false
ALL=false

for arg in "$@"; do
  case $arg in
    --dev)    DEV=true ;;
    --docker) DOCKER=true ;;
    --all)    ALL=true ;;
  esac
done

if [ "$DEV" = true ] || [ "$ALL" = true ]; then
  DEV_PID=$(lsof -ti:5173 2>/dev/null || true)
  if [ -n "$DEV_PID" ]; then
    kill "$DEV_PID"
    echo "Stopped dev server (pid $DEV_PID)."
  else
    echo "Dev server is not running."
  fi
fi

if [ "$DOCKER" = true ] || [ "$ALL" = true ]; then
  docker compose down
  echo "Stopped Docker services."
fi

if [ "$DEV" = false ] && [ "$DOCKER" = false ] && [ "$ALL" = false ]; then
  DEV_PID=$(lsof -ti:5173 2>/dev/null || true)
  if [ -n "$DEV_PID" ]; then
    kill "$DEV_PID"
    echo "Stopped dev server (pid $DEV_PID)."
  fi
  docker compose down
  echo "Stopped Docker services."
fi
