/* https://fakerestapi.azurewebsites.net/index.html выбираете любое API.
Покрываете все запросы в этом API тестами. Тестируете статус код и json schema.
Можно использовать jest, mocha, jasmine на выбор. */
const axios = require('axios');
const siteURL = 'https://fakerestapi.azurewebsites.net'
const validator = require('jsonschema')
const fakerestapiUsers = require('../data/fakerestapi.v1Users.json')
const fakerestapiUser = require('../data/fakerestapi.v1User.json')
const fakerestapiEmpty = require('../data/fakerestapi.v1Empty.json')

describe('API tests', function () {
    // testing GET (status code and json schema)
    test('GET request /api/v1/Users should be 200', async () => {
        const response = await axios.get(siteURL + '/api/v1/Users', {
            headers: {
                accept: 'text/plain; v=1.0'
            }
        })
        await expect(response.status).toEqual(200)
    })

    test('GET /api/v1/Users should be valid jsonschema', async () => {
        const response = await axios.get(siteURL + '/api/v1/Users', {
            headers: {
                accept: 'text/plain; v=1.0'
            }
        })
        const result = validator.validate(response.data, fakerestapiUsers)
        await expect(result.valid).toEqual(true)
    })

    // testing POST (status code and json schema)
    test('POST /api/v1/Users request should be 200', async () => {
        const response = await axios.post(siteURL + '/api/v1/Users', {
            "id": 123456,
            "userName": "Katya",
            "password": "hello"
        },
            {
                headers: {
                    accept: '*/*',
                    'Content-Type': 'application/json; v=1.0'
                }
            })
        await expect(response.status).toEqual(200)
    })

    test('POST /api/v1/Users should be valid jsonschema', async () => {
        const response = await axios.post(siteURL + '/api/v1/Users', {
            "id": 123456,
            "userName": "Katya",
            "password": "hello"
        },
            {
                headers: {
                    accept: '*/*',
                    'Content-Type': 'application/json; v=1.0'
                }
            })
        const result = validator.validate(response.data, fakerestapiUser)
        await expect(result.valid).toEqual(true)
    })

    // testing GET (status code and json schema)
    test('GET /api/v1/Users/{id} request should be 200', async () => {
        const response = await axios.get(siteURL + '/api/v1/Users/1', {
            headers: {
                accept: '*/*'
            }
        })
        await expect(response.status).toEqual(200)
    })

    test('GET /api/v1/Users/{id} should be valid jsonschema', async () => {
        const response = await axios.get(siteURL + '/api/v1/Users/1', {
            headers: {
                accept: '*/*'
            }
        })
        const result = validator.validate(response.data, fakerestapiUser)
        await expect(result.valid).toEqual(true)
    })

    // testing PUT (status code and json schema)
    test('PUT /api/v1/Users/{id} request should be 200', async () => {
        const response = await axios.put(siteURL + '/api/v1/Users/2', {
            "id": 2,
            "userName": "Katya",
            "password": "hello"
        },
            {
                headers: {
                    accept: '*/*',
                    'Content-Type': 'application/json; v=1.0'
                }
            })
        await expect(response.status).toEqual(200)
    })

    test('PUT /api/v1/Users/{id} should be valid jsonschema', async () => {
        const response = await axios.put(siteURL + '/api/v1/Users/1', {
            "id": 1,
            "userName": "Katya",
            "password": "hello"
        },
            {
                headers: {
                    accept: '*/*',
                    'Content-Type': 'application/json; v=1.0'
                }
            })
        const result = validator.validate(response.data, fakerestapiUser)
        await expect(result.valid).toEqual(true)
    })

    // testing DELETE (status code and json schema)
    test('DELETE /api/v1/Users/{id} request should be 200', async () => {
        const response = await axios.delete(siteURL + '/api/v1/Users/3', {
            headers: {
                accept: '*/*'
            }
        })
        await expect(response.status).toEqual(200)
    })

    test('DELETE /api/v1/Users/{id} should be valid jsonschema', async () => {
        const response = await axios.delete(siteURL + '/api/v1/Users/3', {
            headers: {
                accept: '*/*'
            }
        })
        const result = validator.validate(response.data, fakerestapiEmpty)
        await expect(result.valid).toEqual(true)
    })


    // // Второй вариант 
    // // testing GET (status code and json schema)
    //     const responseGetUsers = axios.get(siteURL+'/api/v1/Users', {
    //         headers : {
    //             accept: 'text/plain; v=1.0'
    //         }
    //     })
    //     test('GET request should be 200', async () => {
    //         const response = await responseGetUsers
    //         expect(response.status).toEqual(200)
    //     })
    //     test('GET should be valid jsonschema', async () => {
    //         const response = await responseGetUsers
    //         expect(validator.validate(response.data, fakerestapiUsers).valid).toEqual(true)
    //     })

    // // testing POST (status code and json schema)
    //     const responsePostUsers = axios.post(siteURL+'/api/v1/Users',{ 
    //         "id": 123456,
    //         "userName": "Katya",
    //         "password": "hello"
    //     }, 
    //     {
    //         headers : {
    //             accept : '*/*',
    //             'Content-Type' : 'application/json; v=1.0'
    //         }
    //     })
    //     test('POST request should be 200', async () => {
    //         const response = await responsePostUsers
    //         expect(response.status).toEqual(200)
    //     })
    //     test('POST should be valid jsonschema', async () => {
    //         const response = await responsePostUsers
    //         expect(validator.validate(response.data, fakerestapiUser).valid).toEqual(true)
    //     })
    // // testing GET (status code and json schema)
    //     const responseGetUsersByID = axios.get(siteURL+'/api/v1/Users/1', {
    //         headers : {
    //             accept : '*/*'
    //         }
    //     })
    //     test('GET request should be 200', async () => {
    //         const response = await responseGetUsersByID
    //         expect(response.status).toEqual(200)
    //     })
    //     test('GET should be valid jsonschema', async () => {
    //         const response = await responseGetUsersByID
    //         const result = validator.validate(response.data, fakerestapiUser)
    //         expect(result.valid).toEqual(true)
    //     })

    // // testing PUT (status code and json schema)
    //     const responsePutUsers = axios.put(siteURL+'/api/v1/Users/2',{ 
    //         "id": 2,
    //         "userName": "Katya",
    //         "password": "hello"
    //     },
    //     {
    //         headers : {
    //             accept : '*/*',
    //             'Content-Type' : 'application/json; v=1.0'
    //     }
    //     })
    //     test('PUT request should be 200', async () => {
    //         const response = await responsePutUsers
    //         expect(response.status).toEqual(200)
    //     })
    //     test('PUT should be valid jsonschema', async () => {
    //         const response = await responsePutUsers
    //         const result = validator.validate(response.data, fakerestapiUser)
    //         expect(result.valid).toEqual(true)
    //     })
    // // testing DELETE (status code and json schema)
    //     const responseDeleteUsers = axios.delete(siteURL+'/api/v1/Users/3', {
    //         headers : {
    //             accept : '*/*'
    //         }
    //     }) 
    //     test('DELETE request should be 200', async () => {
    //         const response = await responseDeleteUsers
    //         expect(response.status).toEqual(200)
    //     })

    //     test('DELETE should be valid jsonschema', async () => {
    //         const response = await responseDeleteUsers
    //         const result = validator.validate(response.data, fakerestapiEmpty)
    //         expect(result.valid).toEqual(true)
    //     })     
})
