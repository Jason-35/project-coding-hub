#!/bin/bash


FRONTEND="../frontend"
BACKEND="../backend/project-coding-hub"


# move to frontend dir
cd "$FRONTEND" || {
    echo "Failed to navigate to $FRONTEND"
    exit 1
}

echo "Starting frontend"
npm run dev & NPM_PID=$!

# move to backend dir
cd "$BACKEND" || {
    echo "Failed to navigate to $BACKEND"
    kill "$NPM_PID" 2>dev/null 
}

echo "Starting backend"
mvn spring-boot:run & SPR_PID=$!

wait "$NPM_PID" "$SPR_PID"


