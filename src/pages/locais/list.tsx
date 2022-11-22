import { List, Table, useTable, ShowButton } from "@pankod/refine-antd"

import { ILocal } from "interfaces"

export const LocalList: React.FC = () => {
  const { tableProps } = useTable<ILocal>()
  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="nome" title="Nome" />
        <Table.Column dataIndex="cidade" title="Cidade" />
        <Table.Column dataIndex="email" title="E-mail" />
        <Table.Column dataIndex="telefone" title="Telefone" />
        <Table.Column<ILocal>
          title="Ações"
          dataIndex="actions"
          render={(_text, record): React.ReactNode => {
            return <ShowButton size="small" recordItemId={record.id} hideText />
          }}
        />
      </Table>
    </List>
  )
}
