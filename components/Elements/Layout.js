import Footer from "../Sections/Footer"
import Navbar from "../Sections/Navbar"

const Layout = ({ children }) => {


  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout