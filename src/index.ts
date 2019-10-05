import * as fs from "fs";

interface MatchObject {
  date: string;
  home: string;
  away: string;
  homeGoals: number;
  awayGoals: number;
  winningTeam: string;
  mvp: string;
}

let matchData: any = fs
  .readFileSync("./football.csv", {
    encoding: "utf-8"
  })
  .split("\n");

// Pull off the headers from matchData
const headers: string[] = matchData.splice(0, 1);

// Reformat the arrays of strings as arrays of objects with data mapped to the appropriate header
matchData = matchData
  .map((line: string) => {
    let returnObj: any = {};
    line.split(",").forEach((entry: string, i) => {
      returnObj[headers[i]] = entry;
    });

    return returnObj;
  })
  // Format the numbers
  .forEach((d: MatchObject) => {
    d.homeGoals = +d.homeGoals;
    d.awayGoals = +d.awayGoals;
  });

console.log(matchData);
