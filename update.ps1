$ErrorActionPreference = "Stop"

npm version patch
git push

#npx tsc
cd ../unit-conductor/frontend
yarn upgrade wb-shared-models
Write-Host "Frontend updated successfully"

cd ../api
yarn upgrade wb-shared-models
Write-Host "API updated successfully"

cd ../../unit-conductor-shared
Write-Host "Congrats, your script executed successfully"
