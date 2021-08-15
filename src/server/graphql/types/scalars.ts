import { GraphQLScalarType } from '/deps.ts'

export const JsonType = new GraphQLScalarType({
  name: 'JSON',
  description: 'JSON custom scalar type',
  parseValue(value: Record<string, unknown>) {
    return value
  },
  serialize(value: string) {
    return value
  }
})

export const UuidType = new GraphQLScalarType({
  name: 'UUID',
  description: 'UUID custom scalar type',
  parseValue(value: unknown) {
    return value
  },
  serialize(value: unknown) {
    return value
  }
})
