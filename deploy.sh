rm -rf ./dist
yarn build
aws s3 sync ./dist s3://lets-fight-maxisme --delete