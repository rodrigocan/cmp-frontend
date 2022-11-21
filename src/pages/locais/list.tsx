import { List, TextField, Table, useTable } from "@pankod/refine-antd"

import { ILocal } from "interfaces"

export const LocalList: React.FC = () => {
  const { tableProps } = useTable<ILocal>()
  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="nome" title="nome" />
      </Table>
    </List>
  )
}
