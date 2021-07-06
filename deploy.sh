rm -rf ./public
yarn build
aws s3 sync ./public s3://lets-fight-maxisme --delete