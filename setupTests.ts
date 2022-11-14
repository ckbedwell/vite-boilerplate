import '@testing-library/jest-dom'
import 'whatwg-fetch'
import React from "react"
import { rest } from 'msw'
import { setupServer } from 'msw/node'


global.React = React

const handlers = []

export const nodeServer = setupServer(
  ...handlers,

  rest.delete(`*`, (request, response, context) => {
    console.log(`Please add a MSW request DELETE handler for ${request.url.toString()}`)

    return response(
      context.status(500),
      context.json({
        error: `Please add DELETE a request handler`,
      })
    )
  }),

  rest.post(`*`, (request, response, context) => {
    console.log(`Please add a MSW request POST handler for ${request.url.toString()}`)

    return response(
      context.status(500),
      context.json({
        error: `Please add POST a request handler`,
      })
    )
  }),

  rest.put(`*`, (request, response, context) => {
    console.log(`Please add a MSW request PUT handler for ${request.url.toString()}`)

    return response(
      context.status(500),
      context.json({
        error: `Please add PUT a request handler`,
      })
    )
  }),

  rest.get(`*`, (request, response, context) => {
    console.log(`Please add a MSW request GET handler for ${request.url.toString()}`)

    return response(
      context.status(500),
      context.json({
        error: `Please add a GET request handler`,
      })
    )
  })
)

beforeAll(() => {
  nodeServer.listen()
})
