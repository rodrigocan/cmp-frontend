import React from "react"

import { Refine } from "@pankod/refine-core"
import {
  AuthPage,
  notificationProvider,
  Layout,
  ReadyPage,
  ErrorComponent
} from "@pankod/refine-antd"

import { DataProvider } from "@pankod/refine-strapi-v4"
import "@pankod/refine-antd/dist/styles.min.css"
import routerProvider from "@pankod/refine-react-router-v6"

import { axiosInstance } from "./authProvider"
import { API_URL } from "./constants"
import {
  LocalList,
  LocalShow,
  SetorList,
  SetorShow,
  ChamadoList,
  ServicoList,
  AreaList
} from "./pages"

function App() {
  return (
    <Refine
      dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
      LoginPage={AuthPage}
      notificationProvider={notificationProvider}
      Layout={Layout}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      routerProvider={routerProvider}
      resources={[
        { name: "locais", list: LocalList, show: LocalShow },
        { name: "setores", list: SetorList, show: SetorShow },
        { name: "areas", list: AreaList },
        { name: "servicos", list: ServicoList },
        { name: "chamados", list: ChamadoList }
      ]}
    />
  )
}

export default App
