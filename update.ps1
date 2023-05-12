Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
$PSDefaultParameterValues['*:ErrorAction']='Stop'
function ThrowOnNativeFailure {
    if (-not $?)
    {
        throw 'Native Failure'
    }
}

npm version patch
git push
npx tsc
cd ../frontend
yarn upgrade wb-shared-models
Write-Host "Frontend updated successfully"

cd ../api
yarn upgrade wb-shared-models
Write-Host "API updated successfully"

cd ../shared
Write-Host "Congrats, your script executed successfully"
