import * as fs from "fs";

export abstract class CsvFileReader<TypeOfData> {
  data: TypeOfData[] = [];

  constructor(public file: string) {}

  abstract formatData(data: TypeOfData[]): void;

  parseData(): TypeOfData[] {
    this.data = fs
      .readFileSync(this.file, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((line: string): any => line.split(","));
    this.formatData(this.data);

    return this.data;
  }
}
