#!/bin/bash

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

echo "yarn install ..."
yarn

echo "run yarn start:dev ..."
yarn start:dev