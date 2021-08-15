import { GraphQLSchema, GraphQLObjectType } from '/deps.ts'
import { JsonType, UuidType } from './types/scalars.ts'
import { PanelFields } from './fields/panel.ts'

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ...PanelFields.query
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      ...PanelFields.mutation
    }
  }),
  types: [JsonType, UuidType]
})
