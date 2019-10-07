# Strictly Typed Data Analysis
Reads a `.csv` file, parses the data, reformats, and analyzes.

Uses patterns similar to `D3.js`, but with lower-level functions and type-checking.

Built with Typescript and Node.js.

## Different Approaches
I've created a few branches with different approaches to instantiating a data reader and formatter.

**`use-composition-with-interfaces`** uses two distinct classes with a `DataReader` interface to instantiate a data reader by composition. This approach would easily allow not only reading CSV files but also allow reading from varoius other file types or API's. Instead of editing existing classes, one could add a distinct class for these various other sources.

**`use-abstract-classes`** uses classic inheritance to extend the ParseCSV functionality to the child class, MatchReader. This approach would easily allow formatting different types of CSV files without needing to change anything in `ParseCSV`

**`use-d3-style-formatting`** adds headers to the example CSV file and uses those headers to implement the `.csv()` method from D3.