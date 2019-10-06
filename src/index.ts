import parseCSV from "./parse-csv";

const matchData = parseCSV("./football.csv");

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
