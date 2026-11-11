# Demo Web Shop – Playwright Automation Framework

## Project Overview
A mini UI automation framework built using Playwright and TypeScript to automate login and registration functionalities of the Demo Web Shop application.

## Technologies Used
- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- Git and GitHub

## Framework Structure

```text
DemoWebShopAutomation/
│
├── .github/
├── fixtures/
├── pages/
├── testData/
├── tests/
│   ├── login.spec.ts
│   └── register.spec.ts
├── utils/
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.ts
```

## Test Scenarios

### Login
- Valid login
- Invalid email
- Invalid password
- Empty login fields

### Registration
- Registration with multiple email scenarios
- Required field validation
- Invalid email validation
- Password mismatch validation
- Existing email validation

## Cross-Browser Testing
Configured and tested on:
- Chromium
- Firefox
- WebKit

## Test Execution Results
- Total test executions: 27
- Passed: 27
- Failed: 0

*Results from a sequential execution using one worker.*

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project:

```bash
cd DemoWebShopAutomation
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Run Tests

Run all tests:

```bash
npm test
```

Run tests sequentially:

```bash
npm test -- --workers=1
```

Run a specific browser:

```bash
npx playwright test --project=chromium
```

```bash
npx playwright test --project=firefox
```

```bash
npx playwright test --project=webkit
```

## View HTML Report

```bash
npm run report
```

## Author
Aruri Nikhil

GitHub: https://github.com/arurinikhil2005