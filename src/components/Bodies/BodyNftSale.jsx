import epicBadger from '../../assets/FirstInYourNameBadger.webp';
import { SaleSection } from '../nftSaleSection/SaleSection';
export const BodyNftSale = () => {
  return (
    <div className=''>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="h-auto w-full rounded-lg p-2 mx-4 ">
          <img alt="Tasso epico" src={epicBadger} 
          className="h-full w-full object-cover rounded-lg"/>
        </div>
        <div className="h-auto w-full rounded-lg  lg:col-span-2">
          <SaleSection/>
        </div>
      </div>

    </div>
  )
}
