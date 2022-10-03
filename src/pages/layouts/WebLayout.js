import { Outlet } from "react-router-dom"
import Container from "../containers/Container"
import Header from "./Header"

function WebLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default WebLayout