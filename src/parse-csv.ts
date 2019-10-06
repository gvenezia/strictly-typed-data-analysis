import * as fs from "fs";

const parseCSV = (file: string): string[][] => {
  return fs
    .readFileSync(file, {
      encoding: "utf-8"
    })
    .split("\n")
    .map((line: string): string[] => line.split(","));
};

export default parseCSV;
