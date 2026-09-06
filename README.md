# EPAM Website Automated Tests

This repository contains automated Playwright tests for the EPAM website, specifically testing the navigation from the homepage through Services to the Client Work page.

## Test Scenario

The automated test covers the following scenario:

1. **Navigate to https://www.epam.com/**
   - Verify the homepage loads successfully
   - Confirm page title contains "EPAM" and "Software Engineering"

2. **Navigate to Services page**
   - Access the Services section from the main navigation
   - Verify Services page loads with correct title

3. **Click "Explore Our Client Work"**
   - Locate and click the "Explore Our Client Work" link
   - Navigate to the Client Work page

4. **Verify "Client Work" text is visible**
   - Confirm the page URL is correct
   - Verify the "Client Work" heading (H1) is visible
   - Validate the page title is "Client Work"

## Test Execution Results ✅

All test steps were executed successfully:

- ✅ **Step 1**: Successfully navigated to https://www.epam.com/
- ✅ **Step 2**: Successfully navigated to Services page at https://www.epam.com/services
- ✅ **Step 3**: Successfully clicked "Explore Our Client Work" link
- ✅ **Step 4**: Verified "Client Work" text is visible on the page (found in heading and navigation)

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd elitea-web-tester
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (visible browser)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

### Run tests with UI mode
```bash
npm run test:ui
```

### Run tests on specific browsers
```bash
# Chromium only
npm run test:chrome

# Firefox only
npm run test:firefox

# WebKit (Safari) only
npm run test:webkit

# Mobile browsers
npm run test:mobile
```

## View Test Reports

After running tests, view the HTML report:
```bash
npm run report
```

## Test Structure

```
.
├── tests/
│   └── epam-services-client-work.spec.ts  # Main test suite
├── playwright.config.ts                     # Playwright configuration
├── package.json                             # Project dependencies
└── README.md                                # This file
```

## Test File

The main test file is located at `tests/epam-services-client-work.spec.ts` and includes:

- **Navigation Test**: Complete flow from homepage to Client Work page
- **Accessibility Test**: Verifies navigation elements are accessible
- **Content Verification Test**: Validates Client Work page content

## Configuration

The `playwright.config.ts` file includes:

- **Multiple browsers**: Chromium, Firefox, WebKit
- **Mobile testing**: Chrome and Safari mobile viewports
- **Screenshots**: Captured on test failure
- **Video recording**: Retained on failure
- **Traces**: Collected on retry
- **Parallel execution**: Tests run in parallel for faster execution

## CI/CD Integration

The test configuration is CI-ready with:
- Retry mechanism (2 retries on CI)
- JSON reporter for CI integration
- Fail-fast on `test.only`
- Configurable parallelization

## Notes

- Tests target the production EPAM website (https://www.epam.com)
- Timeouts are configured for slow network conditions
- Tests include multiple verification points for reliability
- All tests use Playwright's best practices for web automation

## License

MIT

## Author

Web Tester Agent - Automated Testing Solution
