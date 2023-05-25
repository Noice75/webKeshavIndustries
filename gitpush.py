import json
import os
commitMSG = input("Enter commit Message = ")
with open("./version.json", "r") as jsonfile:
    versionData = json.load(jsonfile)
    currentVersion = versionData["version"]
major, minor, patch, _ = currentVersion.split(".")
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
nextVersion = f"{major}.{minor}.{patch}.V"
print(nextVersion)
versionData["version"] = nextVersion

with open("./version.json", "w") as jsonfile:
    json.dump(versionData, jsonfile, indent=4)

# os.system('git add .')
os.system(f'git commit -m "update"')
os.system('git push')
