require('dotenv-flow').config({ silent: true })
let publisher = require("@pact-foundation/pact-node")
let path = require("path")

let opts = {
    pactFilesOrDirs: [path.resolve(process.cwd(), "__tests__/contract/pacts")],
    pactBroker: process.env.PACT_BROKER_BASE_URL,
    pactBrokerToken: process.env.PACT_BROKER_TOKEN,
    consumerVersion: "1.0.1",
    providerVersion: "1.0.1",
    tags: "dev"
}

publisher.publishPacts(opts)