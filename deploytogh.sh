#!/bin/bash
yarn build
git checkout gh-pages
mv dist/* .
git commit -a -m "updating gh-pages"
git push origin gh-pages
