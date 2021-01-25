#!/bin/bash
rm -rf ./docs
mkdir ./docs
ng build --project showcase --output-path docs --base-href /ngx-showcase/
cp ./docs/index.html ./docs/404.html
