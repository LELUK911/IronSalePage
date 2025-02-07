import { useReadContract, useWriteContract } from 'wagmi'
import jsonNftSale from '../../blockchainOp/abi/NFTSale.json'
import { NFTSALEaddress } from '../../App'

export const BuyNftButton = ({ element, amount, actualIndex, refetch }) => {
    const { writeContract, isLoading } = useWriteContract()
    const { data } = useReadContract({
        address: NFTSALEaddress,
        abi: jsonNftSale.abi,
        functionName: 'getDynamicPrice',
        args: [actualIndex.toString(), amount],
    })
    const buyNft = () => {
        console.log(data)
        if (data != null) {
            writeContract({
                abi: jsonNftSale.abi,
                address: NFTSALEaddress,
                functionName: 'buyNFT',
                args: [element, amount],
                value: BigInt(data.toString())
            })
            refetch()
        }
    }
    return (
        <>
            <button
                className="mx-4 group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
                onClick={buyNft} disabled={isLoading}
            >
                <span className="text-lg">Mint Character</span>
                <div
                    className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                >
                    <div className="relative h-full w-10 bg-white/20"></div>
                </div>
            </button>
        </>
    )
}
