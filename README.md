This is an example of how to do asset managmenet in 0xcert framework v2.

The example is wrapped in a simple dApp to showcase not only functionalities but also the basic principles of handling blockchain communication through 0xcert framework. Main logic is isolated in `src/example.ts` while response handling is located in `index.ts`. The basic configuration needed for communication can be found in `src/config.ts` file.

To keep the example as simple as possible there are some hardcoded values like what kind od asset ledger we are deploying and what kind of asset we are creating. You can change those in `src/config.ts`.

Project stucture:

| Path           | Description                                   |
| -------------- | --------------------------------------------- |
| src/example.ts | Main logic showing the use.                   |
| src/config.ts  | Configuration file.                           |
| index.html     | Front end styling.                            |
| index.ts       | Controller connecting front end to the logic. |
| package.json   | Dependencies.                                 |
| style.css      | Front end styling.                            |
