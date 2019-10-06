import { CsvFileReader } from "./CsvFileReader";
import { parseDate } from "./util";
import { MatchResult } from "./enums";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  formatData(data: MatchData[]) {
    data.forEach((line: any): void => {
      line[0] = parseDate(line[0]);
      line[3] = +line[3];
      line[4] = +line[4];
      line[5] = line[5] as MatchResult;
    });
  }
}
