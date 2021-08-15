import {
  PanelFetchResponseType,
  PanelCreateResponseType,
  PanelCreateType
} from '/graphql/types/panel.ts'
import { createPanel, fetchPanels, PanelCreate } from '/services/panel.ts'

export const PanelFields = {
  query: {
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
  },
  mutation: {
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
}
