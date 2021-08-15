import { Pool } from '/deps.ts'

const pool = new Pool(
  {
    database: 'emulator_builder',
    hostname: '127.0.0.1',
    password: 'postgrespassword',
    port: 5432,
    user: 'postgres'
  },
  4,
  true
)

export async function runQuery(query: string) {
  let client
  try {
    client = await pool.connect()
  } catch (_e: unknown) {
    // TODO don't close whole pool. But if there is an error, then client is undefined
    //      we can not close just it
    pool.end()
  }
  const result = await client?.queryObject(query)
  client?.release()
  return result
}
