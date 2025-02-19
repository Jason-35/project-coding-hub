#!/bin/bash


FRONTEND="../frontend"
BACKEND="../backend/project-coding-hub"
BPORT="8080"
BPID=$(lsof -t -i :$BPORT -sTCP:LISTEN)

if [ -n "$BPID" ]; then
    echo "Port $BPORT is in use by process ID $BPID. Killing it..."
    kill -9 $BPID
    echo "Process $BPID has been terminated."
else
    echo "Port $BPORT is not in use."
fi

FPORT="5173"
FPID=$(lsof -t -i :$FPORT -sTCP:LISTEN)

if [ -n "$FPID" ]; then
    echo "Port $FPORT is in use by process ID $FPID. Killing it..."
    kill -9 $FPID
    echo "Process $FPID has been terminated."
else
    echo "Port $FPORT is not in use."
fi

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

