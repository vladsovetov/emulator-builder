import { Application, Router, RouterContext, applyGraphQL, gql } from '/deps.ts'

const app = new Application()

const types = gql`
  type User {
    id: ID
    first_name: String
    last_name: String
  }

  type UserOutput {
    id: ID
  }

  type Query {
    fetchUser(id: ID): User
  }

  type Mutation {
    insertUser(first_name: String!, last_name: String!): UserOutput!
  }
`

const resolvers = {
  Query: {
    fetchUser: (parent: any, { id }: any, context: any, info: any) => {
      // make database calls or http requests inside and return data
      return {
        id: 'e540cdd6-a360-4e28-85a5-99aecd1dcc02',
        first_name: 'Praveen',
        last_name: 'Durairaju'
      }
    }
  },
  Mutation: {
    insertUser: (
      parent: any,
      { first_name, last_name }: any,
      context: any,
      info: any
    ) => {
      console.log('input:', first_name, last_name)
      return {
        id: 'e540cdd6-a360-4e28-85a5-99aecd1dcc02'
      }
    }
  }
}

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs: types,
  resolvers: resolvers,
  context: (ctx: RouterContext) => {
    console.log(ctx)
    return { user: 'Vlad' }
  }
})

app.use(GraphQLService.routes(), GraphQLService.allowedMethods())

const PORT = 4003
console.log(`Server start at http://localhost:${PORT}`)
await app.listen({ port: PORT })
