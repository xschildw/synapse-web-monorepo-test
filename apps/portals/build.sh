#!/bin/bash -e
# Usage:
#     ./build.sh [portal-name]

# Verify both arguments were specified
if [[ -z $1 ]]; then
  echo "Error: Usage -
    ./build.sh [portal-name]
  "
  exit 1
fi

PORTAL_APP_TEMPLATE=src/config
PORTAL_CONFIGURATION=src/configurations/$1/

# Check that directory exists
if [ ! -d $PORTAL_CONFIGURATION ]; then
  echo "Error: Folder $PORTAL_CONFIGURATION doesn't exit"
  exit 1
fi

# copy over the directory
cp -r $PORTAL_CONFIGURATION $PORTAL_APP_TEMPLATE

# replace variable values in index.html
chmod +x ./replaceIndexHtmlStaticValues.sh 
# source lets the child process run in the current shell instead of creating its own
source ./replaceIndexHtmlStaticValues.sh $1

# sync current with staging
pnpm i && pnpm nx run portals:build
node sitemap/generate-sitemap.js $1
echo 'Success - finished!'
exit 0