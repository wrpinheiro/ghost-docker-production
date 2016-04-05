#!/bin/bash
PORT=80

if [ -f ghost.env ]
then
  docker run \
    --env-file ./ghost.env \
    -p ${PORT}:2368 \
    -v /var/lib/ghost:/var/lib/ghost \
    -d ghost
else
  echo "Arquivo ghost.env não existe"
  exit 1;
fi
