set -e

npm version patch
git push

#npx tsc
cd ../unit-conductor/frontend
yarn upgrade wb-shared-models
echo "Frontend updated successfully"

cd ../api
yarn upgrade wb-shared-models
echo "API updated successfully"

cd ../../unit-conductor-shared
echo "Congrats, your script executed successfully"