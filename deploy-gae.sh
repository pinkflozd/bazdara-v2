#!/bin/sh

BUILD_VERSION=unbundled
environment=$1

case $environment in
  dev) project_id=bazdara-99a47 ;;
  stage) project_id=bazdara-99a47 ;;
  prod) project_id=bazdara-99a47 ;;
  *) project_id=bazdara-99a47 ;;
esac

rm -rf build
polymer build
cp app.yaml build/$BUILD_VERSION
gcloud preview app deploy build/$BUILD_VERSION/app.yaml -q --project $project_id
