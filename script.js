const fs = require("fs");

// Read the source JSON files
// const sourceData1 = fs.readFileSync("console-pipelines-plugin-ja.json", "utf-8");
// const sourceData1 = fs.readFileSync("console-pipelines-plugin-ko.json", "utf-8");
const sourceData1 = fs.readFileSync("console-pipelines-plugin-zh.json", "utf-8");
const sourceData2 = fs.readFileSync("plugin__pipeline-console-plugin.json", "utf-8");

// Parse the JSON data into JavaScript objects
const sourceObject1 = JSON.parse(sourceData1);
const sourceObject2 = JSON.parse(sourceData2);

// Find common keys between the two source objects
const commonKeys = Object.keys(sourceObject1).filter((key) =>
  sourceObject2.hasOwnProperty(key)
);

// Create a destination object with duplicate keys and their values
const destinationObject = {};
commonKeys.forEach((key) => {
  destinationObject[key] = sourceObject1[key];
});

// Convert the destination object to JSON
const destinationData = JSON.stringify(destinationObject, null, 2);

// Write the modified JSON data to the destination file
// fs.writeFileSync("plugin__pipeline-console-plugin-ja.json", destinationData, "utf-8");
// fs.writeFileSync("plugin__pipeline-console-plugin-ko.json", destinationData, "utf-8");
fs.writeFileSync("plugin__pipeline-console-plugin-zh.json", destinationData, "utf-8");

console.log("Duplicate keys and values copied successfully.");
