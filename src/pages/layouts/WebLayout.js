import { Outlet } from "react-router-dom"
import Footer from "../../components/Footer"
import Container from "../containers/Container"
import Header from "./Header"

function WebLayout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer/>
    </>
  )
}

export default WebLayout