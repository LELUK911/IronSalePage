import { useReadContract } from "wagmi"
import jsonNftSale from '../../blockchainOp/abi/NFTSale.json'
import { useEffect, useState } from "react"
import { firstEdition, limitedEdition, rareEdition } from "./textSection/TextrSection"
import { NFTSALEaddress } from "../../App"
import { BuyNftButton } from "./BuyNftButton"

export const SaleSection = () => {
    const elements = ["Earth", "Air", "Fire", "Water"];
    const [texts, setTexts] = useState({
        name: "",
        description: "",
        image: "",
        attributes: [
            {
                trait_type: "",
                value: ""
            },
            {
                trait_type: "",
                value: ""
            }
        ]
    })
    const [buyAmount, setBuyAmount] = useState(0);
    const [avvalibleNFT, setAvvalible] = useState(1000)


    const { data, isLoading, isError } = useReadContract({
        address: NFTSALEaddress,
        abi: jsonNftSale.abi,
        functionName: 'returnActualmint',
        args: [],
    })


    useEffect(() => {
        if (data != null) {
            if (+data.toString() <= 20) {
                setTexts(limitedEdition)
            } else if (+data.toString() < 100) {
                setTexts(rareEdition)
            } else {
                setTexts(firstEdition)
            }
            setAvvalible((prev) => prev - (+data.toString()))
        }
    }, [data])

    const RenderNumber = () => {
        return (
            <>
                {isLoading ? (
                    <h4 className="text-yellow-700 text-2xl sm:text-3xl font-semibold underline animate-pulse">
                        Loading...
                    </h4>
                ) : isError ? (
                    <h4 className="text-red-500 text-2xl sm:text-3xl font-semibold underline">
                        Error loading data
                    </h4>
                ) : (
                    <h4 className="text-yellow-700 text-2xl sm:text-3xl font-semibold underline">
                        {texts.name} #<span>{data?.toString()}</span>
                    </h4>
                )}</>
        )
    }
    const RenderBuyButton = () => {
        return (
            <>
                {isLoading ? (
                    <h4 className="text-yellow-700 text-2xl sm:text-3xl font-semibold underline animate-pulse">
                        Loading...
                    </h4>
                ) : isError ? (
                    <h4 className="text-red-500 text-2xl sm:text-3xl font-semibold underline">
                        Error loading data
                    </h4>
                ) : (
                    <BuyNftButton element={1} amount={buyAmount} actualIndex={data.toString()} />
                )}</>
        )
    }
    const RenderSelectType = ()=>{
        
    }

    return (
        <div className="flex justify-center px-4 sm:px-6 lg:px-12 py-10">
            <div className="w-full max-w-4xl bg-obsidianBlack p-6 sm:p-8 rounded-lg shadow-lg">
                {/* Titolo e Sottotitolo */}
                <div className="text-center mb-6">
                    <h1 className="text-yellow-600 text-4xl sm:text-5xl font-bold mb-2">Iron Badger Character</h1>
                    <RenderNumber />
                </div>
                {/* Tipo di NFT */}
                <p className="text-white font-semibold text-lg sm:text-xl">
                    Type: <span className="text-arcanePurple">
                        {texts ? texts.attributes[0].value : "Loading"}
                    </span>
                </p>
                {/* Descrizione */}
                <div className="mb-6">
                    <h4 className="text-white text-2xl sm:text-3xl font-semibold mt-4">Knight's Description</h4>
                    <p className="text-gray-300 text-justify mt-2 leading-relaxed">
                        {texts ? texts.description : "Loading"}
                    </p>
                </div>
                {/* Sezione Lore */}
                <div className="mb-6">
                    <h4 className="text-white text-2xl sm:text-3xl font-semibold">Knight's Lore</h4>
                    <p className="text-gray-300 text-justify mt-2 leading-relaxed">
                        {texts ? texts.attributes[1].value : "Loading"}
                    </p>
                </div>


                <div className="bg-darkTeal p-6 rounded-lg shadow-md">
                    {/* Titolo */}
                    <h3 className="text-etherealGreen text-xl font-semibold text-center mb-4">
                        NFT Pricing Table
                    </h3>

                    {/* Tabella dei Prezzi */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-mysticCyan text-white">
                            <thead>
                                <tr className="bg-obsidianBlack text-mysticCyan">
                                    <th className="border border-mysticCyan px-4 py-2">NFT Range</th>
                                    <th className="border border-mysticCyan px-4 py-2">Price (ETH)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td className="border border-mysticCyan px-4 py-2">1 - 20</td>
                                    <td className="border border-mysticCyan px-4 py-2">0.007</td>
                                </tr>
                                <tr className="text-center bg-obsidianBlack">
                                    <td className="border border-mysticCyan px-4 py-2">21 - 99</td>
                                    <td className="border border-mysticCyan px-4 py-2">0.01</td>
                                </tr>
                                <tr className="text-center">
                                    <td className="border border-mysticCyan px-4 py-2">100 - 999</td>
                                    <td className="border border-mysticCyan px-4 py-2">0.015</td>
                                </tr>
                                {/*<tr className="text-center bg-obsidianBlack">
                                    <td className="border border-mysticCyan px-4 py-2">1000 - 1499</td>
                                    <td className="border border-mysticCyan px-4 py-2">0.02</td>
                                </tr>
                                <tr className="text-center">
                                    <td className="border border-mysticCyan px-4 py-2">1500 - 2000</td>
                                    <td className="border border-mysticCyan px-4 py-2">0.03</td>
                                </tr>*/}
                            </tbody>
                        </table>
                    </div>

                    {/* Disponibilità e Quantità */}
                    <div className="flex flex-col sm:flex-row items-center justify-between mt-6">
                        {/* Disponibilità */}
                        <p className="text-gray-400 text-lg">
                            Disponibili: <span className="font-bold text-mysticCyan">{avvalibleNFT} / 2000</span>
                        </p>

                        {/* Pulsanti per selezionare la quantità */}
                        <div className="flex items-center space-x-2">
                            <label className="text-gray-200 text-2xl mr-4 font-bold">Quantità: {buyAmount}</label>
                            {[1, 2, 3, 4, 5].map((num) => (
                                <button
                                    key={num}
                                    onClick={() => setBuyAmount(num)}
                                    className={`px-4 py-2 rounded-lg border border-mysticCyan text-white font-semibold transition-all 
                ${buyAmount === num ? "bg-mysticCyan text-obsidianBlack" : "bg-obsidianBlack hover:bg-etherealGreen"}`}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Pulsante Acquisto */}
                <RenderBuyButton />

            </div>
        </div>

    )
}
