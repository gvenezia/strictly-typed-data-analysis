import parseCSV from "./parse-csv";
import { parseDate } from "./util";
import { MatchResult } from "./enums";

type MatchData = [Date, string, string, number, number, MatchResult, string];

const matchData = parseCSV("./football.csv");

matchData.forEach((line: any): void => {
  line[0] = parseDate(line[0]);
  line[3] = +line[3];
  line[4] = +line[4];
  line[5] = line[5] as MatchResult;
});

const findNumOfWins = (team: string): number => {
  return matchData.filter(
    line =>
      (line[1] === team && line[5] === MatchResult.HomeWin) ||
      (line[2] === team && line[5] === MatchResult.AwayWin)
  ).length;
};

console.log(matchData);
console.log("Find", findNumOfWins("Chelsea"));
