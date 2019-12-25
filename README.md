This is an example of how to do asset management within the 0xcert Framework v2.

The example is put in the context of a simple dApp to showcase not only functionalities but also the basic principles of handling blockchain communication through the 0xcert Framework. The main logic is isolated in the `src/example.ts` file while response handling is located in `index.ts`. The basic configuration needed for communication can be found in the `src/config.ts` file.

To keep the example as simple as possible, some values are hardcoded, such as the kind of asset ledger that we are deploying and the kind of asset we are creating. You can change those in the `src/index.ts` file.

Project structure:

| Path           | Description                                   |
| -------------- | --------------------------------------------- |
| src/example.ts | Main logic showing the use.                   |
| src/config.ts  | Configuration file.                           |
| index.html     | Front-end styling.                            |
| index.ts       | Controller connecting front-end to the logic. |
| package.json   | Dependencies.                                 |
| style.css      | Front-end styling.                            |
