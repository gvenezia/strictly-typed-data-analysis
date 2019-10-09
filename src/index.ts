import { parseCSV, formatData } from "./DataManipulations";
import { MatchResult } from "./enums";
import MatchData from "./MatchData";

const matchData = parseCSV("./football.csv");

const formattedData = formatData(matchData);

const findNumOfWins = (team: string): number => {
  return matchData.filter(
    line =>
      (line[1] === team && line[5] === MatchResult.HomeWin) ||
      (line[2] === team && line[5] === MatchResult.AwayWin)
  ).length;
};

console.log(matchData);
console.log("Find", findNumOfWins("Chelsea"));
