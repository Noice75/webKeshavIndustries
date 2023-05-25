import json
import os
with open("./version.json", "r") as jsonfile:
    versionData = json.load(jsonfile)
    currentVersion = versionData["version"]
    nextVersion = currentVersion+0.1
    versionData["version"] += 0.1
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
    <h5>version: {nextVersion}</h5>
</body>
</html>'''
with open("version.html", "w") as htmlfile:
    htmlfile.write(html)
os.system('git add .')
os.system('git commit -m ":)"')
os.system('git push')
