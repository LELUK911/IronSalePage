import { useEffect, useState } from 'react';
import alchemyBadger from '../../assets/TassoAlchimista.png'
import firstEdition from '../../assets/FirstInYourName.png'
import epicBadger from '../../assets/FirstInYourNameBadger.webp';
import { SaleSection } from '../nftSaleSection/SaleSection';


export const BodyNftSale = () => {
  const [actualMint, setActualmint] = useState(0)
  const [img, setImg] = useState(epicBadger)


  useEffect(() => {
    const _index = +actualMint.toString()

    if (_index <= 20) {
      setImg(alchemyBadger)
    } else if (_index > 20 & _index <= 100) {
      setImg(epicBadger)
    } else {
      setImg(firstEdition)
    }
  }, [actualMint])


  return (
    <div className=''>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="h-auto w-full rounded-lg p-2 mx-4 ">
          <img alt="Tasso epico" src={img}
            className="h-full w-full object-cover rounded-lg" />
        </div>
        <div className="h-auto w-full rounded-lg  lg:col-span-2">
          <SaleSection onChange={setActualmint} />
        </div>
      </div>
    </div>
  )
}
