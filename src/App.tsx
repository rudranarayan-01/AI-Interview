import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PublicLayout } from "@/layouts/public-layout"
import HomePage from "@/routes/home"
import AuthenticationLayout from "@/layouts/auth-layout"
import { SignInPage } from "@/routes/sign-in"
import { SignUpPage } from "@/routes/sign-up"
import ProtectedRoute from "@/layouts/protected-routes"
import { MainLayout } from "@/layouts/main-layout"


const App = () => {
  return(
    <Router>
      <Routes>
        {/* Public Routes  */}
        <Route element={<PublicLayout/>}>
          <Route index element={<HomePage/>}></Route>
        </Route>

        {/* Authentication route  */}
        <Route element={<AuthenticationLayout/>}>
          <Route path="/signin/*" element={<SignInPage/>}></Route>
          <Route path="/signup/*" element={<SignUpPage/>}></Route>
        </Route>        

        {/* protected route  */}
        <Route element={<ProtectedRoute><MainLayout/></ProtectedRoute>} />

        {/* add all the project route  */}
      </Routes>
    </Router>
  )
}
 
export default App