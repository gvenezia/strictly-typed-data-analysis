import { ParseCSV } from "./ParseCSV";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./enums";

const parseCSV = new ParseCSV("./football.csv");

const matchReader = new MatchReader(parseCSV);
matchReader.load();

const findNumOfWins = (team: string): number => {
  return matchReader.matches.filter(
    line =>
      (line[1] === team && line[5] === MatchResult.HomeWin) ||
      (line[2] === team && line[5] === MatchResult.AwayWin)
  ).length;
};

console.log(matchReader.matches);
console.log("Find", findNumOfWins("Chelsea"));
