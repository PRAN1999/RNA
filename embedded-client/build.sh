rm -rf build
cp -R public build
parcel build src/index.js -d dist -o main.js
mv dist build/