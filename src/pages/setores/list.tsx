import { List, Table, useTable } from "@pankod/refine-antd"

import { ISetor } from "interfaces"

export const SetorList: React.FC = () => {
  const { tableProps } = useTable<ISetor>()
  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="nome" title="nome" />
      </Table>
    </List>
  )
}
