import { useShow, useList } from "@pankod/refine-core"
import { Show, Typography } from "@pankod/refine-antd"

import { ISetor } from "interfaces"

const { Title, Text } = Typography

export const LocalShow = () => {
  const { queryResult } = useShow({
    metaData: {
      populate: ["setores"]
    }
  })
  const { data, isLoading } = queryResult
  const record = data?.data

  const setorListQueryResult = useList<ISetor>({
    resource: "setores",
    config: {
      sort: [{ order: "asc", field: "nome" }],
      filters: [
        {
          field: "local",
          operator: "eq",
          value: record?.nome
        }
      ]
    }
  })

  console.log(setorListQueryResult)

  return (
    <>
      <Show isLoading={isLoading}>
        <Title level={5}>Nome</Title>
        <Text>{record?.nome}</Text>

        <Title level={5}>Endereço</Title>
        <Text>{`${record?.endereco}, ${record?.numero}, ${record?.cidade} - ${record?.estado}`}</Text>

        <Title level={5}>CEP</Title>
        <Text>{record?.cep}</Text>

        <Title level={5}>Telefone</Title>
        <Text>{record?.telefone}</Text>

        <Title level={5}>E-mail</Title>
        <Text>{record?.email}</Text>
      </Show>
    </>
  )
}
