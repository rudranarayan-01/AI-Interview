import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PublicLayout } from "@/layouts/public-layout"
import HomePage from "@/routes/home"
import AuthenticationLayout from "@/layouts/auth-layout"
import { SignInPage } from "@/routes/sign-in"
import { SignUpPage } from "@/routes/sign-up"
import ProtectedRoute from "@/layouts/protected-routes"
import { MainLayout } from "@/layouts/main-layout"
import { Generate } from "./components/generate"
import { Dashboard } from "./routes/dashboard"
import { CreateEditPage } from "./routes/create-edit-page"
import { Feedback } from "./routes/feedback"
import { MockLoadPage } from "./routes/mock-load-page"
import { MockInterviewPage } from "./routes/mock-interview-page"


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
        <Route element={<Generate/>} path="/generate">
          <Route index element={<Dashboard/> }/>
          <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
        </Route>
      </Routes> 
    </Router>
  )
}
 
export default App