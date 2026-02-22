#!/bin/bash

echo "=== Docker services (production) ==="
docker compose ps

echo ""
echo "=== Local dev server ==="
DEV_PID=$(lsof -ti:5173 2>/dev/null || true)
if [ -n "$DEV_PID" ]; then
  echo "Running on http://localhost:5173 (pid $DEV_PID)"
else
  echo "Not running."
fi
