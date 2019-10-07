import * as fs from "fs";

export class ParseCSV {
  data: string[][] = [];
  constructor(public file: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.file, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((line: string): any => line.split(","));
  }
}
