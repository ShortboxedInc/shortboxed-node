/**
 * (c) Shortboxed Inc. and its affiliates. Confidential and proprietary.
 */
module.exports = {
    "collectCoverageFrom": ["src/**/*.ts"],
    "coverageDirectory": "./coverage",
    "detectLeaks": true,
    "moduleFileExtensions": ["js", "json", "ts"],
    "rootDir": "./",
    "testEnvironment": "node",
    "testEnvironmentOptions": {},
    "testTimeout": 20000,
    "transform": {
      "^.+\\.ts$": "ts-jest",
    },
  };
  