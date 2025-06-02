 # Google Calendar Test Automation Using Cypress

## Prerequisites:

1. Download Nodejs

2.  Verify the node version using node --version
3.  Install npm through command line using: `npm install` 
    and verify by using the command `npm --version`
4.  Download  and Install Visual studio code from: https://code.visualstudio.com/download
       
## Guide To install Cypress
 
 1. npm i
 2. npm install cypress
 3. check the version  using 
    cypress --version

 ## To run the Cypress(Test Automation) through command line:

    
    1. Open the project in Visual studio code.
    2. Open the Terminal window.
    3. To open the cypress use the command: `npx cypress open`
    4. Cypress server will be displayed and select `E2ETesting` and select `chrome` browser in the next option 
    and click `StartE2ETesting in Chrome`
    5. Click on `e2eCalTests.cy.js` under `E2E specs`
 
 Using terminal to run the tests -
 Use the command: `npx cypress run`

 To run the tests in headless mode -
  
  - npx cypress run --browser chrome --headless --spec "cypress/e2e/tests/e2eCalTests.cy.js"

  - npx cypress run --browser edge --headless --spec "cypress/e2e/tests/e2eCalTests.cy.js" 


## Testing Strategy

1) Check all the button components including numbers 0-9, operation characters are visible and clickable 
2) Verify operations - addition, subtraction, multiplication and division functionality is working as expected
3) Verify BodMas operations are as expected
4) Verify division by zero is handled
5) Verify keys to Clear numbers works as expected
6) Verify if the app is supported acrss all browser platforms and mobile platforms using cy.viewport()
7) Verify the accessibility violations are non-critical in nature and the app is accessibility compliant


******************************************************************** 
Test Results -
When ran from the headless mode, I was able to see the test results pass -
![alt text](image.png)

Suggestions for stable captcha related usecases 
- Puppeteer or Playwright framework with GoLogin browser is more complaint and unblocks the bot behavior detection for more stable and smooth tests execution 
- Use the token and profile from GoLogin dashboard

``````
async () => 
{
  const GL = new GoLogin(
    {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODNjYjY1MWEzNTZkZTljODNhMjRkNWQiLCJ0eXBlIjoiZGV2Iiwiand0aWQiOiI2ODNjYjY4ZDgyY2YzODA3YTI0YjZiZTEifQ.aLwE3OtgOgW0If-BhFBAtn7ur9Vgo4KRpKwN9kis8wc',
    profile_id: 'hetallangalia@gmail.com',
  });
  const { status, wsUrl } = await GL.start();

  if (status !== 'success') 
  {
  console.error('Failed to start GoLogin profile');
  return;
  }
    
    const browser = await playwright.connect({
    browserWSEndpoint: wsUrl,
  });
  
  const page = await browser.newPage();
  
  await page.goto('https://www.google.com')

  await page.type('input[name="q"]', '22 * 3');

  await page.keyboard.press('Enter');

  -------------------------------------

