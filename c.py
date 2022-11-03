import json


with open("h.txt", "r") as f:
    contents = f.readlines()


payload = {}

for line in contents:
    name, value = line.split(": ")
    value = value.replace("\n", "")
    payload[name] = value

with open("h.json", "w") as f:
    json.dump(payload, f, indent=4)