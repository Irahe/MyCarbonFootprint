# My Carbon Footprint


## Description

This is a monorepo project containing a API and a Frontent pieace. This project build a tool for understand and measure personal carbon footprint by talink a shot assessment and processing it accordingly to emission factors of each category.



Every contribution is well received. Once stable versions are achieved the admin will publish it.


## Frontend


Check the full list of dependencies on [package.json]

- [React.js](https://reactjs.org/)
- [styled-components](https://styled-components.com/)
- [recharts](https://recharts.org/en-US)
- [ant Coponents](https://ant.design/components/overview/)
- [redux](https://react-redux.js.org/)
- [ESLint](https://eslint.org/) - We use the Airbnb and React Recommended rules


In the sub-project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## API


Check the full list of dependencies on [package.json]

- [Node.js](https://nodejs.org/en/)
- [restify](http://restify.com/)
- [knexjs](http://knexjs.org/)
- [sqlite](https://www.sqlite.org/index.html)


In the sub-project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) 


## Learn More

Te references used to build this tool can be found here:

 - http://shrinkthatfootprint.com/calculate-your-carbon-footprint
 - https://www.epa.gov/sites/production/files/2021-04/documents/emission-factors_apr2021.pdf
 - https://www.epa.gov/sites/production/files/2020-04/documents/ghg-emission-factors-hub.pdf
 - https://www.winnipeg.ca/finance/findata/matmgt/documents/2012/682-2012/682-2012_Appendix_H-WSTP_South_End_Plant_Process_Selection_Report/Appendix%207.pdf
 - https://waterfootprint.org/media/downloads/Ercin-Hoekstra-2012-Carbon-and-Water-Footprints_1.PDF
 - https://www.csu.edu/cerc/researchreports/documents/CarbonFootprintofWater-RiverNetwork-2009.pdf

## Recommended Extensions for Visual Studio Code

- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)


## Stuff to do

 1. Improove user report adding statistics based on saved reports
 2. Improove data acquiring
 3. Write automated tests for API and Frontend
 4. Increase the data analysed(travels, waste recycling...)


## Code Compliance

Nothing to fear here. No complex rules get in the way of you doing great code or having fun doing it. However, to mantain a good level of organization and maintainability we must stablish some simple guidelines that everyone follows.

1.  Keep your code clean and organized. Don't waste time counting your charters tho;
2.  Project Structure should be clean and eazy to read. If there are more folders than files, it will become a maze for anyone but you; ~~(are you Daedalus?)~~
3.  Organize your assets on a assets folder (make sense right?!);
4.  Avoid using Class Components as they can have side effects and hidden states, thus becomming harder to mantain and bugtrack. Use Functional components instead;
5.  Try to repeat component structure as you go, so we can quickly track any issues and anyone can fix them with almost no doc at all.
6.  Styled components are appreciated for the organization and isolation it provides;
7.  Avoid adding dependences that only do what you can already do using native code(or already added dependences);
8. Branch your features, then PR when done.
9. Before commit you should lint your code. Try `yarn lint:fix` and `yarn prettier:write` commands first. Lint problems should block commit attempts, so if you are having trouble doing that, please review the project using `yarn lint` commands.

> Remember: Spartans always rely on their pairs. So we are counting on you!