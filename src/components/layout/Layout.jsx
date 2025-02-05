
import { NavBar } from '../navBar/NavBar'
import { Footer } from '../footer/Footer'

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}
