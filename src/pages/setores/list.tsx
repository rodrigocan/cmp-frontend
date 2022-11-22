import {
  FilterDropdown,
  List,
  Select,
  Table,
  TextField,
  useSelect,
  useTable
} from "@pankod/refine-antd"

import { ISetor, ILocal } from "interfaces"

export const SetorList: React.FC = () => {
  const { tableProps } = useTable<ISetor>({
    metaData: {
      populate: ["local"]
    }
  })

  const { selectProps } = useSelect({
    resource: "locais",
    optionLabel: "nome",
    optionValue: "id"
  })

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="nome" title="Nome" />
        <Table.Column dataIndex="email" title="E-mail" />
        <Table.Column dataIndex="ramal" title="Ramal" />
        <Table.Column dataIndex={["local", "nome"]} title="Local" />
      </Table>
    </List>
  )
}
