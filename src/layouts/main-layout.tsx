import Footer from "@/components/footer"
import Header from "@/components/header"
import { Container } from "@/components/ui/container"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
        {/* handler to store the user data  */}
        <Header/>

        <Container className="flex-grow">
            <main className="flex-grow">
                <Outlet/>
            </main>
        </Container>

        <Footer/>
    </div>
  )
}
