const { Matchers } = require("@pact-foundation/pact")
const { getTherapyInfo } = require("../../../src/getTherapy")
const { eachLike, like } = Matchers


describe("when a call is made to access to the therapy info from CX", () => {
  afterEach(() => provider.verify())
  const entityFhirId = '7490f9f5-b1d2-48c8-9b1a-78bb0f6be369'
  const headers = {
    entityFhirId,
    Accept: "application/json, text/plain, */*",
  }

  const response = {
    "therapies": [
        {
            "usageTime": 224,
            "therapyGroup": "Sleep Apnea",
            "therapy": "CPAP treatment",
            "therapyStartDate": "2022-05-23",
            "therapyEndDate": "2022-05-25",
            "therapyStatus": "001",
            "usageTimeLastUpdate": "01/01/2022",
            "adherenceLevel": "red",
            "prescriber": {
                "name": "Mai"
            },
            "hospital": {
                "name": "Kairin Hospital",
                "address": {
                    "street": "1 avenue des champs Elysée",
                    "city": "Paris",
                    "postalCode": "75008",
                    "country": "France"
                },
                "phone": "123456789"
            },
            "prescriptions": [
                {
                    "startDate": "2022-04-24T09:00:00Z",
                    "endDate": "2022-05-24T09:00:00Z",
                    "daysBeforeExpiration": -250
                },
                {
                    "startDate": "2022-04-24T09:00:00Z",
                    "endDate": "2022-07-24T09:00:00Z",
                    "daysBeforeExpiration": -150
                },
                {
                    "startDate": "2022-06-24T09:00:00Z",
                    "endDate": "2022-07-24T09:00:00Z",
                    "daysBeforeExpiration": -120
                }
            ],
            "assets": [
                {
                    "deviceId": 0,
                    "brand": "Resmed",
                    "model": "Air Sense 10",
                    "serialNumber": "string",
                    "assignedSince": "01-25-2022"
                },
                {
                    "deviceId": 1,
                    "brand": "Resmed",
                    "model": "Air Sense 10",
                    "serialNumber": "string",
                    "assignedSince": "02-20-2022"
                }
            ]
        },
        {
            "usageTime": 224,
            "therapyGroup": "Sleep Apnea",
            "therapy": "CPAP treatment",
            "therapyStartDate": "2022-06-23",
            "therapyEndDate": "2022-09-25",
            "therapyStatus": "001",
            "usageTimeLastUpdate": "01/01/2022",
            "adherenceLevel": "red",
            "prescriber": {
                "name": "Juin"
            },
            "hospital": {
                "name": "Kairin Hospital",
                "address": {
                    "street": "1 avenue des champs Elysée",
                    "city": "Paris",
                    "postalCode": "75008",
                    "country": "France"
                },
                "phone": "123456789"
            },
            "prescriptions": [
                {
                    "startDate": "2022-04-24T09:00:00Z",
                    "endDate": "2022-05-24T09:00:00Z",
                    "daysBeforeExpiration": -250
                },
                {
                    "startDate": "2022-04-24T09:00:00Z",
                    "endDate": "2022-07-24T09:00:00Z",
                    "daysBeforeExpiration": -150
                },
                {
                    "startDate": "2022-06-24T09:00:00Z",
                    "endDate": "2022-07-24T09:00:00Z",
                    "daysBeforeExpiration": -120
                }
            ],
            "assets": [
                {
                    "deviceId": 0,
                    "brand": "Resmed",
                    "model": "Air Sense 10",
                    "serialNumber": "string",
                    "assignedSince": "01-25-2022"
                },
                {
                    "deviceId": 1,
                    "brand": "Resmed",
                    "model": "Air Sense 10",
                    "serialNumber": "string",
                    "assignedSince": "02-20-2022"
                }
            ]
        },
        {
            "usageTime": 224,
            "therapyGroup": "Sleep Apnea",
            "therapy": "CPAP treatment",
            "therapyStartDate": "2022-07-01",
            "therapyEndDate": "2022-09-25",
            "therapyStatus": "001",
            "usageTimeLastUpdate": "01/01/2022",
            "adherenceLevel": "red",
            "prescriber": {
                "name": "Juillet"
            },
            "hospital": {
                "name": "Kairin Hospital",
                "address": {
                    "street": "1 avenue des champs Elysée",
                    "city": "Paris",
                    "postalCode": "75008",
                    "country": "France"
                },
                "phone": "123456789"
            },
            "prescriptions": [
                {
                    "startDate": "2022-04-24T09:00:00Z",
                    "endDate": "2022-05-24T09:00:00Z",
                    "daysBeforeExpiration": -250
                },
                {
                    "startDate": "2022-04-24T09:00:00Z",
                    "endDate": "2022-07-24T09:00:00Z",
                    "daysBeforeExpiration": -150
                },
                {
                    "startDate": "2022-06-24T09:00:00Z",
                    "endDate": "2022-07-24T09:00:00Z",
                    "daysBeforeExpiration": -120
                }
            ],
            "assets": [
                {
                    "deviceId": 0,
                    "brand": "Resmed",
                    "model": "Air Sense 10",
                    "serialNumber": "string",
                    "assignedSince": "01-25-2022"
                },
                {
                    "deviceId": 1,
                    "brand": "Resmed",
                    "model": "Air Sense 10",
                    "serialNumber": "string",
                    "assignedSince": "02-20-2022"
                }
            ]
        }
    ],
    "_metaData": {
        "totalCount": 35,
        "limit": 10,
        "offset": 1
    }
}
  
  describe('and the consumer is authenticated ', () => {
    describe('and get the therapy info correctly', () => {
      beforeEach(async () => {
        const interaction = {
          state: '',
          uponReceiving:
            '(get TherapyInfo) Returns the therapy information for a specific ACC ID, therapy group, etc.',
          withRequest: {
            method: 'GET',
            path: '/v1/patients/ACC-0000754323/therapy-info',
            query: 'therapyStatus=001&therapyGroup=006',
            headers
          },
          willRespondWith: {
            status: 200,
            body: response
          }
        }
        return await provider.addInteraction(interaction)
      })

      test('returns correct body, header and statusCode', async () => {
        const accId = 'ACC-0000754323'
        const result = await getTherapyInfo(accId, headers)
        expect(result.data).toEqual(response)
        expect(result.status).toEqual(200)
      })
    })
   
  })
})

