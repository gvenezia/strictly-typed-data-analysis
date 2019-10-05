import * as fs from "fs";

const matchData = fs
  .readFileSync("./football.csv", {
    encoding: "utf-8"
  })
  .split("\n")
  .map((line: string): string[] => line.split(","));

console.log(matchData);
