#!/bin/bash
if [[ `git status --porcelain` ]]; then
  echo "Please stash or commit your changes"
else
  yarn build
  git checkout gh-pages
  mv dist/* .
  git commit -a -m "updating gh-pages"
  git push origin gh-pages
  git checkout master
fi

