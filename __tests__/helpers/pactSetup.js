const path = require("path")
const Pact = require("@pact-foundation/pact").Pact

global.provider = new Pact({
  port: 3000,
  log: path.resolve(process.cwd(), "__tests__/contract/logs", "mockserver-integration.log"),
  dir: path.resolve(process.cwd(), "__tests__/contract/pacts"),
  spec: 2,
  logLevel: 'debug',
  pactfileWriteMode: "overwrite",
  consumer: "DialogApi",
  provider: "CX",
})