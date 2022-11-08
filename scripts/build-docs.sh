#!/bin/bash
DIR="$(cd -P -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)";
cd $DIR

# Exit when any command fails
set -e
function cleanup {
  set +e
}
trap cleanup EXIT

# Delete old docs
rm -rf $DIR/../docs
mkdir $DIR/../docs

# Build library and showcase projects
ng build --project ngx-showcase --configuration production && ng build --project showcase --configuration production --output-path ./docs --base-href /ngx-showcase/

# Rebuild docs
cp $DIR/../docs/index.html $DIR/../docs/404.html

# Stage added docs
git add $DIR/../docs
