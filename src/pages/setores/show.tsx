import { useShow, useOne } from "@pankod/refine-core"
import { Show, Typography } from "@pankod/refine-antd"

import { ILocal } from "interfaces"

const { Title, Text } = Typography

export const SetorShow = () => {
  const { queryResult } = useShow()
  const { data, isLoading } = queryResult
  const record = data?.data

  // const { data: categoryData } = useOne<ILocal>({
  //   resource: "locais",
  //   id: record?.local.id || "",
  //   queryOptions: {
  //     enabled: !!record?.local.id
  //   }
  // })

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Nome</Title>
      <Text>{record?.nome}</Text>

      <Title level={5}>Local</Title>
      {/* <Text>{categoryData?.data.nome}</Text> */}
    </Show>
  )
}
