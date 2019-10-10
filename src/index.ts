import { parseCSV, formatData } from "./DataManipulations";
import { ReportBuilder } from "./ReportBuilder";
import { MatchResult } from "./enums";
import { MatchData } from "./tuples";

import { WinsByTeamAnalysis } from "./analyzers/WinsByTeamAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

const matchData = parseCSV("./football.csv");

const formattedData = formatData(matchData);

const reportBuilder = new ReportBuilder(
  new WinsByTeamAnalysis("Man United"),
  new ConsoleReport()
);

reportBuilder.buildAndPrintReport(formattedData);
