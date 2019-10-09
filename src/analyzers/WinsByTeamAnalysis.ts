import { MatchData } from "../tuples";
import { Analyzer } from "../ReportBuilder";
import { MatchResult } from "../enums";

export class WinsByTeamAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    const wins = matches.filter(
      (line: MatchData) =>
        (line[1] === this.team && line[5] === MatchResult.HomeWin) ||
        (line[2] === this.team && line[5] === MatchResult.AwayWin)
    ).length;

    return `${this.team} has won ${wins} ${wins === 1
      ? "match"
      : "matches"} so far`;
  }
}
