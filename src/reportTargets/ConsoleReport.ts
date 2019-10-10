import { OutputTarget } from "../ReportBuilder";

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
