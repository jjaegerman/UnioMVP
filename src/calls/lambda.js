import {API, Auth} from 'aws-amplify'

export async function testCall() {
    const user = await Auth.currentAuthenticatedUser()
    const token = user.signInUserSession.idToken.jwtToken
    console.log("token: ", token)

    const requestData = {
        headers: {
            Authorization: token
        },
        body: {
            name: "Test"
        },
        name: "Test2",
        queryStringParameters: {
            name: "Test3"
        }
    }
    const data = await API.post('apic2ea3c70', '/addUser', requestData)
    console.log("data: ", data)
  }

  export async function addUser() {
    const user = await Auth.currentAuthenticatedUser()
    const token = user.signInUserSession.idToken.jwtToken
    const requestData = {
        headers: {
            Authorization: token
        },
    }
    return await API.post('apic2ea3c70', '/addUser', requestData)
  }
