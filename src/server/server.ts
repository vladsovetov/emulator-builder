import { Router, Application, GraphQLHTTP } from '/deps.ts'
import { schema } from '/graphql/schema.ts'

const app = new Application()

const router = new Router()
router.all('/graphql', (context) => {
  return GraphQLHTTP({
    schema,
    graphiql: true
  })(context.request.serverRequest)
})
app.use(router.routes(), router.allowedMethods())

const PORT = 4003
console.log(`Server start at http://localhost:${PORT}/graphql`)
await app.listen({ port: PORT })
