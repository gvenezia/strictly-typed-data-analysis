import parseCSV from "./parse-csv";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./enums";

type MatchData = [Date, string, string, number, number, MatchResult, string];

const matchReader = new MatchReader("./football.csv");

matchReader.parseData();

const findNumOfWins = (team: string): number => {
  return matchReader
    .parseData()
    .filter(
      (line: MatchData) =>
        (line[1] === team && line[5] === MatchResult.HomeWin) ||
        (line[2] === team && line[5] === MatchResult.AwayWin)
    ).length;
};

console.log(matchReader.data);
console.log("Find", findNumOfWins("Chelsea"));
