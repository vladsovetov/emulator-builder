import { UUID } from '/types.ts'
import { runQuery } from '/db/DBClient.ts'

export interface Panel {
  id: UUID
  name: string
  properties: Record<string, unknown>
  // deno-lint-ignore camelcase
  parent_panel_id: UUID | null
  deleted: boolean
}

export type PanelCreate = Pick<Panel, 'name' | 'properties' | 'parent_panel_id'>

export const createPanel = async (panel: PanelCreate) => {
  // deno-lint-ignore camelcase
  const parent_panel_id = `'${panel.parent_panel_id}'` || 'NULL'
  const id = crypto.randomUUID()
  const res = await runQuery(`
    INSERT INTO panel
    (id, "name", properties, parent_panel_id, deleted)
    VALUES('${id}', '${panel.name}', '${JSON.stringify(
    panel.properties
  )}', ${parent_panel_id}, false);
    `)
  return {
    ...res,
    id
  }
}

export const fetchPanels = () => {
  return runQuery(`SELECT * FROM panel`)
}
