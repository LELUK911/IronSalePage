import { Link } from "react-router-dom";
import epicBadger from "../../assets/FirstInYourNameBadger.webp";

export const BodyHomePage = () => {
  return (
    <div className="bg-obsidianBlack text-white min-h-screen">

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-etherealGreen">
          Iron Badger Brotherhood
        </h1>
        <p className="text-gray-400 max-w-2xl mt-4">
          Join the first generation of Iron Badgers!
          The first 1000 **NFT Characters** will grant unique benefits
          within the **Iron Badger** ecosystem.
        </p>
        <img src={epicBadger} alt="Iron Badger NFT" className="w-64 sm:w-80 my-8 rounded-lg shadow-lg" />
        <button className="bg-etherealGreen hover:bg-mysticCyan text-yellow-600 font-bold py-3 px-6 rounded-lg shadow-md transition text-lg">
          <Link to={'/nftsale'} >
            Mint Your NFT
          </Link>
        </button>
      </section>

      {/* Vantaggi del Minting */}
      <section className="py-16 px-6 bg-darkTeal">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Perché Mintare un Iron Badger?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { "title": "Exclusive Minting", "desc": "Only 1000 NFT Characters. 20 Limited Edition, 120 Rare, and the rest First Edition.", "color": "etherealGreen", "icon": "🔥" },
            { "title": "EXP Boost", "desc": "Early minters will receive an initial EXP bonus, starting with a higher rank.", "color": "mysticCyan", "icon": "⚔️" },
            { "title": "Exclusive Items", "desc": "Minters will receive limited-edition in-game items when they are released.", "color": "arcanePurple", "icon": "🎁" },
            { "title": "Marketplace Discounts", "desc": "Exclusive discounts on item purchases in the marketplace when launched.", "color": "etherealGreen", "icon": "💰" },
            { "title": "Pre-Sale Access", "desc": "Minters will have priority access to the governance token pre-sale.", "color": "mysticCyan", "icon": "🚀" },
            { "title": "Governance", "desc": "NFT holders can participate in the ecosystem’s governance from Knight rank onward.", "color": "arcanePurple", "icon": "🏛️" }
          ].map((benefit, index) => (
            <div
              key={index}
              className={`p-6 bg-obsidianBlack border-2 border-${benefit.color} text-white rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl relative`}
            >
              {/* Icona */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-4xl">
                {benefit.icon}
              </div>

              <h3 className={`text-2xl font-bold text-${benefit.color} mt-8`}>{benefit.title}</h3>
              <p className="text-gray-300 mt-4">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Roadmap */}
      <section className="py-16 px-6 bg-darkTeal text-white text-center">
        <h2 className="text-4xl font-bold mb-10 text-etherealGreen">Roadmap</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Linea centrale */}
          <div className="border-l-4 border-mysticCyan absolute h-full left-1/2 transform -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {[
              { "title": "Testnet Launch", "desc": "Initial deployment of the platform in testnet for debugging and security.", "color": "etherealGreen" },
              { "title": "Community Building", "desc": "Establishing a strong community to support the ecosystem.", "color": "mysticCyan" },
              { "title": "NFT Sale", "desc": "First sale of 1000 NFTs with exclusive benefits for holders.", "color": "arcanePurple" },
              { "title": "Governance Token Pre-Sale", "desc": "Early access to the governance token for NFT holders.", "color": "etherealGreen" },
              { "title": "Mainnet Launch of Iron Badger Finance", "desc": "Activation of the platform on the main blockchain.", "color": "mysticCyan" },
              { "title": "Governance Token Public Sale", "desc": "Opening of the public sale for the governance token.", "color": "arcanePurple" },
              { "title": "Battlegame (Beta) in Testnet", "desc": "Initial version of the combat game in testnet.", "color": "etherealGreen" },
              { "title": "Game Items & Marketplace in Testnet", "desc": "Release of in-game items and the marketplace in testnet.", "color": "mysticCyan" },
              { "title": "Battlegame (Beta2) in Mainnet", "desc": "Game update with full integration into mainnet.", "color": "arcanePurple" },
              { "title": "Game Items & Marketplace in Mainnet", "desc": "Final release of the marketplace and in-game items on blockchain.", "color": "etherealGreen" },
              { "title": "Short Trading Bond Market", "desc": "Introduction of a market for short trading NFT bonds.", "color": "mysticCyan" },
              { "title": "Launch of Gamified DAO with Dual Governance", "desc": "Creation of a decentralized gamified governance system.", "color": "arcanePurple" }
            ].map((step, index) => (
              <div key={index} className={`flex items-center justify-${index % 2 === 0 ? "start" : "end"} relative`}>
                {/* Box Testuale a sinistra/destra alternato */}
                <div className={`w-1/2 hidden sm:flex justify-${index % 2 === 0 ? "end" : "start"} px-6`}>
                  <div className={`bg-${step.color} text-white p-4 rounded-lg shadow-lg border border-white transform transition hover:scale-105 max-w-sm`}>
                    <p className="text-lg font-bold">{index + 1}. {step.title}</p>
                    <p className="text-sm mt-2">{step.desc}</p>
                  </div>
                </div>

                {/* Punto di connessione alla linea centrale */}
                <div className="w-6 h-6 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2 border-4 border-mysticCyan"></div>

                {/* Mobile-friendly: Box sempre centrato sotto il punto */}
                <div className={`w-1/2 sm:hidden flex justify-center`}>
                  <div className={`bg-${step.color} text-white p-4 rounded-lg shadow-lg border border-white transform transition hover:scale-105 max-w-sm`}>
                    <p className="text-lg font-bold">{index + 1}. {step.title}</p>
                    <p className="text-sm mt-2">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};


