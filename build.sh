#!/bin/bash

docker build -t forex-vue .

rm -rf dist

CID=$(docker create forex-vue)
docker cp ${CID}:/node/dist/. dist
docker rm ${CID}