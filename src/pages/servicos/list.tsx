import { List, Table, useTable, ShowButton } from "@pankod/refine-antd"

import { IServico } from "interfaces"

export const ServicoList: React.FC = () => {
  const { tableProps } = useTable<IServico>({
    metaData: {
      populate: ["area"]
    },
    initialSorter: [
      {
        field: "area.nome",
        order: "asc"
      },
      {
        field: "descricao",
        order: "asc"
      }
    ]
  })

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex={["area", "nome"]} title="Área" />
        <Table.Column dataIndex="descricao" title="Descrição" />
        <Table.Column<IServico>
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
