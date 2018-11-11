rm -rf build
npm run build
parcel build src/index.js -d dist -o main.js
mv dist build/