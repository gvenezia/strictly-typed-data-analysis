import { parseDate } from "./util";
import { MatchResult } from "./enums";

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((line: any): MatchData => {
      line[0] = parseDate(line[0]);
      line[3] = +line[3];
      line[4] = +line[4];
      line[5] = line[5] as MatchResult;
      return line;
    });
  }
}
