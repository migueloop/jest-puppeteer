const axios = require('axios');

const getUser = user => axios.get(`https://api.github.com/users/${user}`)

// A simple example test
describe('#getUser() using Promises', () => {
  it('should load user data', async () => {
    const response = await getUser('migueloop')
    expect(response.data).toBeDefined()
    expect(response.data.name).toEqual('Miguel Ruiz')
  })
})
