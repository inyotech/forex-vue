#!/bin/bash

mkdir -p dist
chmod 777 dist 

docker run --rm -it -v $(pwd)/app:/node/app -v $(pwd)/dist:/node/dist forex-vue bash