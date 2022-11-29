import { List, Table, useTable, ShowButton } from "@pankod/refine-antd"

import { IChamado } from "interfaces"

export const ChamadoList: React.FC = () => {
  const { tableProps } = useTable<IChamado>({
    metaData: {
      populate: ["local", "setor"]
    }
  })

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex={["local", "nome"]} title="Local" />
        <Table.Column dataIndex={["setor", "nome"]} title="Setor" />
        <Table.Column dataIndex="servico" title="Serviço" />
        <Table.Column<IChamado>
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
