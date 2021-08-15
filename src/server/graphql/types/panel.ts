import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList
} from '/deps.ts'
import { JsonType, UuidType } from './scalars.ts'

const PanelType = new GraphQLObjectType({
  name: 'PanelType',
  fields: {
    id: { type: UuidType },
    name: { type: GraphQLString },
    properties: { type: JsonType },
    parent_panel_id: { type: UuidType }
  }
})

export const PanelCreateType = new GraphQLObjectType({
  name: 'PanelType',
  fields: {
    name: { type: GraphQLString },
    properties: { type: JsonType },
    parent_panel_id: { type: UuidType }
  }
})

export const PanelFetchResponseType = new GraphQLObjectType({
  name: 'PanelFetchType',
  fields: {
    success: { type: GraphQLBoolean },
    data: { type: new GraphQLList(PanelType) }
  }
})

export const PanelCreateResponseType = new GraphQLObjectType({
  name: 'PanelCreateResponse',
  fields: {
    success: { type: GraphQLBoolean },
    data: { type: UuidType }
  }
})
