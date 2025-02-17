#!/bin/bash

sudo docker run --rm -p 5173:5173 -v $(pwd):/client -v $(pwd)/node_modules:/client/node_modules todolist-client 
    

