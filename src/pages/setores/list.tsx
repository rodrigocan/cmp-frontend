import { List, Table, useTable } from "@pankod/refine-antd"

import { ISetor } from "interfaces"

export const SetorList: React.FC = () => {
  const { tableProps } = useTable<ISetor>()
  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="nome" title="Nome" />
        <Table.Column dataIndex="email" title="E-mail" />
        <Table.Column dataIndex="ramal" title="Ramal" />
        <Table.Column dataIndex="local" title="Local" />
      </Table>
    </List>
  )
}
