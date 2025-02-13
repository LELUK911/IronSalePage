import { BrowserRouter as Routers, Routes, Route } from "react-router-dom"
import { NftSale } from "./pages/NftSale"
import { TokenPreSale } from "./pages/TokenPreSale"
import { HomePage } from "./pages/HomePage"

export const NFTSALEaddress = '0x43E3CDE59234B423b06A5Bfee7273DCf334cF1fb'


function App() {


  return (
    <Routers>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nftsale" element={<NftSale />} />
        <Route path="/tokenpresale" element={<TokenPreSale />} />
      </Routes>
    </Routers>
  )
}

export default App
