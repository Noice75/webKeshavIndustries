import json
import os
commitMSG = input("Enter commit Message = ")
with open("./version.json", "r") as jsonfile:
    versionData = json.load(jsonfile)
    currentVersion = versionData["version"]
major, minor, patch = currentVersion.split(".")
major = int(major)
minor = int(minor)
patch = int(patch)
if(minor == 9):
    major += 1
    patch = 0
    minor = 0
elif(patch == 9):
    patch = 0
    minor += 1
else:
    patch += 1
nextVersion = f"{major}.{minor}.{patch}"
print(nextVersion)
versionData["version"] = nextVersion

with open("./version.json", "w") as jsonfile:
    json.dump(versionData, jsonfile, indent=4)

html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h5>version: {nextVersion}V</h5>
</body>
</html>'''
with open("version.html", "w") as htmlfile:
    htmlfile.write(html)
os.system('git add .')
os.system(f'git commit -m "{commitMSG}"')
os.system('git push')
