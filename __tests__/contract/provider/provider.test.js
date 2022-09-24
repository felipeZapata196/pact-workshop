const { Verifier } = require("@pact-foundation/pact")

const SERVER_URL = 'http://18.217.133.22:8001'
jest.setTimeout(50000)

  describe("Clients Service Verification", () => {
    it("validates the expectations of CX", () => {
      let opts = {
            provider: "CX",
            logLevel: "DEBUG",
            providerBaseUrl: SERVER_URL,
            pactUrls: ['https://chs.pactflow.io/pacts/provider/CX/consumer/DialogApi/latest'],
            consumerVersionTags: ["dev"],
            providerVersionTags: ["dev"],
            publishVerificationResult: true,
            providerVersion: "1.0.1",
            changeOrigin: 'true',
            validateSSL: false
          }
        return new Verifier(opts).verifyProvider().then(output => {
            console.log("Pact Verification Complete!")
            console.log(output)
        })
    })
  })