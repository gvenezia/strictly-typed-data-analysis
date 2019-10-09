import { parseCSV, formatData } from "./DataManipulations";
import { MatchResult } from "./enums";
import { MatchData } from "./tuples";

const matchData = parseCSV("./football.csv");

const formattedData = formatData(matchData);

console.log(matchData);
console.log("Find", findNumOfWins("Chelsea"));
