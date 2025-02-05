

export const SaleSection = () => {
    return (
        <div className="flex justify-center px-4 sm:px-6 lg:px-12 py-10">
            <div className="w-full max-w-4xl bg-obsidianBlack p-6 sm:p-8 rounded-lg shadow-lg">

                {/* Titolo e Sottotitolo */}
                <div className="text-center mb-6">
                    <h1 className="text-yellow-600 text-4xl sm:text-5xl font-bold mb-2">Iron Badger Character</h1>
                    <h4 className="text-yellow-700 text-2xl sm:text-3xl font-semibold underline">Iron Badger Knight #001</h4>
                </div>

                {/* Sezione Lore */}
                <div className="mb-6">
                    <h4 className="text-white text-2xl sm:text-3xl font-semibold">Knight's Lore</h4>
                    <p className="text-gray-300 text-justify mt-2 leading-relaxed">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Natoque nunc
                        faucibus torquent ex viverra pellentesque ullamcorper iaculis.
                        Maecenas a magnis parturient varius tempus purus suspendisse platea.
                    </p>
                </div>

                {/* Tipo di NFT */}
                <p className="text-white font-semibold text-lg sm:text-xl">
                    Type: <span className="text-arcanePurple">Legendary</span>
                </p>

                {/* Descrizione */}
                <div className="mb-6">
                    <h4 className="text-white text-2xl sm:text-3xl font-semibold mt-4">Knight's Description</h4>
                    <p className="text-gray-300 text-justify mt-2 leading-relaxed">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Natoque nunc
                        faucibus torquent ex viverra pellentesque ullamcorper iaculis.
                        Maecenas a magnis parturient varius tempus purus suspendisse platea.
                    </p>
                </div>

                {/* Prezzo e Quantità */}
                <div className="flex flex-col sm:flex-row items-center sm:justify-between bg-darkTeal p-4 rounded-lg shadow-md">

                    {/* Prezzo e Disponibilità */}
                    <div className="text-center sm:text-left">
                        <p className="text-lg font-semibold text-etherealGreen">Prezzo: 0.2 ETH</p>
                        <p className="text-gray-400">Disponibili: <span className="font-bold">189 / 200</span></p>
                    </div>

                    {/* Input Quantità */}
                    <div className="flex items-center mt-4 sm:mt-0">
                        <label className="text-gray-400 mr-2">Quantità:</label>
                        <input type="number" min="1" max="5" value="1"
                            className="w-16 p-2 rounded bg-obsidianBlack text-white text-center border border-mysticCyan" />
                    </div>

                </div>

                {/* Pulsante Acquisto */}
                <div className="mt-6 flex justify-center">
                    <button className="w-full sm:w-auto bg-etherealGreen hover:bg-mysticCyan text-white font-bold py-3 px-6 rounded-lg shadow-lg transition text-lg">
                        Acquista NFT
                    </button>
                </div>

            </div>
        </div>

    )
}
