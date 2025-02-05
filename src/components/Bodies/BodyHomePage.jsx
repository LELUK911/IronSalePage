import { FaTwitter, FaGithub, FaDiscord, FaMedium } from "react-icons/fa";
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
          Unisciti alla prima generazione di Iron Badgers!
          I primi 1000 **NFT Character** garantiranno vantaggi unici
          all’interno dell’ecosistema **Iron Badger**.
        </p>
        <img src={epicBadger} alt="Iron Badger NFT" className="w-64 sm:w-80 my-8 rounded-lg shadow-lg" />
        <button className="bg-etherealGreen hover:bg-mysticCyan text-white font-bold py-3 px-6 rounded-lg shadow-md transition text-lg">
          Mint Your NFT
        </button>
      </section>

      {/* Vantaggi del Minting */}
      <section className="py-16 px-6 bg-darkTeal">
        <h2 className="text-4xl font-bold text-center text-white mb-10">Perché Mintare un Iron Badger?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Minting Esclusivo", desc: "Solo 1000 NFT Character. 20 Limited Edition, 120 Rare, e il resto Prima Edizione.", color: "etherealGreen", icon: "🔥" },
            { title: "EXP Boost", desc: "I primi minter riceveranno un bonus EXP iniziale, iniziando con un rango maggiore.", color: "mysticCyan", icon: "⚔️" },
            { title: "Item Esclusivi", desc: "Chi minterà riceverà item di gioco a tiratura limitata quando verranno rilasciati.", color: "arcanePurple", icon: "🎁" },
            { title: "Sconti nel Mercatino", desc: "Sconti esclusivi sull’acquisto di Item nel mercatino quando sarà lanciato.", color: "etherealGreen", icon: "💰" },
            { title: "Accesso alla Pre-Sale", desc: "I partecipanti al minting avranno accesso prioritario alla pre-sale del token di governance.", color: "mysticCyan", icon: "🚀" },
            { title: "Governance", desc: "Gli NFT holder potranno partecipare alla governance dell’ecosistema dal rango Cavaliere in poi.", color: "arcanePurple", icon: "🏛️" }
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
              { title: "Lancio Tesnet", desc: "Distribuzione iniziale della piattaforma in testnet per debugging e sicurezza.", color: "etherealGreen" },
              { title: "Costruzione Community", desc: "Creazione di una community solida per sostenere l'ecosistema.", color: "mysticCyan" },
              { title: "Vendita NFT", desc: "Prima vendita di 1000 NFT con vantaggi esclusivi per i possessori.", color: "arcanePurple" },
              { title: "Pre-Sale Token Governance", desc: "Accesso anticipato al token di governance per gli NFT holders.", color: "etherealGreen" },
              { title: "Lancio Mainnet Iron Badger Finance", desc: "Attivazione della piattaforma su blockchain mainnet.", color: "mysticCyan" },
              { title: "Public-Sale Token Governance", desc: "Apertura della vendita pubblica del token di governance.", color: "arcanePurple" },
              { title: "Battlegame (Beta) in Tesnet", desc: "Versione iniziale del gioco di combattimento in testnet.", color: "etherealGreen" },
              { title: "Item di Gioco & Mercatino in Tesnet", desc: "Rilascio degli oggetti e del marketplace in testnet.", color: "mysticCyan" },
              { title: "Battlegame (Beta2) in Mainnet", desc: "Aggiornamento del gioco con integrazione completa in mainnet.", color: "arcanePurple" },
              { title: "Item di Gioco & Mercatino in Mainnet", desc: "Rilascio definitivo del mercato e degli oggetti su blockchain.", color: "etherealGreen" },
              { title: "Mercato Bond allo Scoperto", desc: "Introduzione di un mercato per lo short trading di bond NFT.", color: "mysticCyan" },
              { title: "Lancio DAO Gamificata con Governance Doppia", desc: "Creazione di un sistema di governance decentralizzato gamificato.", color: "arcanePurple" }
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


