const axios = require('axios')

const options = { baseURL: `http://localhost:3000`}
const getTherapyInfoByAccId = axios.create(options)

const getTherapyInfo =  async (accId, headers) => {
  return  await getTherapyInfoByAccId
  .get(`/v1/patients/${accId}/therapy-info?therapyStatus=001&therapyGroup=006`, {headers})

}
module.exports = {
  getTherapyInfo
};