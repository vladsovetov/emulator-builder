import { GraphQLSchema, GraphQLObjectType } from '/deps.ts'
import { JsonType, UuidType } from './types/scalars.ts'
import {
  PanelFetchResponseType,
  PanelCreateResponseType,
  PanelCreateType
} from './types/panel.ts'
import { createPanel, fetchPanels, PanelCreate } from '/services/panel.ts'

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      fetchPanels: {
        type: PanelFetchResponseType,
        async resolve() {
          const res = await fetchPanels()
          return {
            success: true,
            data: res?.rows
          }
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      createPanel: {
        type: PanelCreateResponseType,
        args: PanelCreateType.getFields(),
        async resolve(_parent: unknown, args: PanelCreate) {
          const res = await createPanel(args)
          return {
            success: !!res.rowCount,
            data: res.id
          }
        }
      }
    }
  }),
  types: [JsonType, UuidType]
})
