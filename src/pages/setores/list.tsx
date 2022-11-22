import { List, Table, useTable, ShowButton } from "@pankod/refine-antd"

import { ISetor } from "interfaces"

export const SetorList: React.FC = () => {
  const { tableProps } = useTable<ISetor>({
    metaData: {
      populate: ["local"]
    }
  })

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="nome" title="Nome" />
        <Table.Column dataIndex="email" title="E-mail" />
        <Table.Column dataIndex="ramal" title="Ramal" />
        <Table.Column dataIndex={["local", "nome"]} title="Local" />
        <Table.Column<ISetor>
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
