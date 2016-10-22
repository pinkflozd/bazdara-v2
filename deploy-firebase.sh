#!/bin/sh

rm -rf build
polymer build
firebase deploy
