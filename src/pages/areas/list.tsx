import { List, Table, useTable, ShowButton } from "@pankod/refine-antd"

import { IArea } from "interfaces"

export const AreaList: React.FC = () => {
  const { tableProps } = useTable<IArea>({
    metaData: {
      populate: ["servicos"]
    },
    initialSorter: [
      {
        field: "nome",
        order: "asc"
      }
    ]
  })

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="nome" title="Nome" />
        <Table.Column<IArea>
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
