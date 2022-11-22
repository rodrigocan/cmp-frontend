import { useShow, useOne } from "@pankod/refine-core"
import { Show, Typography } from "@pankod/refine-antd"

const { Title, Text } = Typography

export const SetorShow = () => {
  const { queryResult } = useShow()
  const { data, isLoading } = queryResult
  const record = data?.data

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>Nome</Title>
      <Text>{record?.nome}</Text>
    </Show>
  )
}
