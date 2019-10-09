import * as fs from "fs";
import { MatchResult } from "./enums";
import { parseDate } from "./util";
import MatchData from "./MatchData";

const parseCSV = (file: string): string[][] => {
  return fs
    .readFileSync(file, {
      encoding: "utf-8"
    })
    .split("\n")
    .map((line: string): any => line.split(","));
};

const formatData = (dataArr: string[][]): MatchData[] => {
  dataArr.forEach((line: any): void => {
    line[0] = parseDate(line[0]);
    line[3] = +line[3];
    line[4] = +line[4];
    line[5] = line[5] as MatchResult;
  });
  return dataArr;
};

export { parseCSV, formatData };
