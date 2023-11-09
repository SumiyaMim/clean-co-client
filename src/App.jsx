import { Outlet } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import Container from "./components/ui/Container"
import Footer from "./components/layout/Footer"

function App() {

  return (
    <>
      <MainLayout></MainLayout>
        <Container>
          <Outlet />
          <Footer/>
        </Container>
    </>
  )
}

export default App
