import * as fs from "fs";

const matchData = fs
  .readFileSync("./football.csv", {
    encoding: "utf-8"
  })
  .split("\n")
  .map((line: string): string[] => line.split(","));

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}

const findNumOfWins = (team: string): number => {
  return matchData.filter(
    line =>
      (line[1] === team && line[5] === MatchResult.HomeWin) ||
      (line[2] === team && line[5] === MatchResult.AwayWin)
  ).length;
};

// console.log(matchData);
console.log("Find", findNumOfWins("Chelsea"));
