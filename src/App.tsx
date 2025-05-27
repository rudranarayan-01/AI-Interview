import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PublicLayout } from "@/layouts/public-layout"
import HomePage from "@/routes/home"

const App = () => {
  return(
    <Router>
      <Routes>
        {/* Public Routes  */}
        <Route element={<PublicLayout/>}>
          <Route index element={<HomePage/>}></Route>
        </Route>

        {/* protected route  */}
      </Routes>
    </Router>
  )
}
 
export default App