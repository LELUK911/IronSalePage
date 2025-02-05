import { useState, useEffect } from "react";
import { FaDiscord, FaTwitter, FaBell } from "react-icons/fa";

export const BodyTokenPreSale = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-03-01T00:00:00Z").getTime(); // Data di lancio della Pre-Sale
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        giorni: Math.floor(difference / (1000 * 60 * 60 * 24)),
        ore: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minuti: Math.floor((difference / 1000 / 60) % 60),
        secondi: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-obsidianBlack to-darkTeal min-h-screen flex flex-col items-center justify-center text-white">
      
      {/* Hero Section */}
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold text-etherealGreen">
          Pre-Sale del Token in Arrivo! 🚀
        </h1>
        <p className="text-gray-300 text-lg mt-4">
          La prima fase della vendita del token **Iron Badger** inizierà presto.  
          Ottieni un **vantaggio esclusivo** partecipando alla Pre-Sale.
        </p>

        {/* Conto alla Rovescia */}
        <div className="flex justify-center space-x-6 text-center mt-8 text-4xl font-bold">
          {Object.keys(timeLeft).length > 0 ? (
            <>
              <div className="p-4 bg-obsidianBlack rounded-lg border border-mysticCyan">
                {timeLeft.giorni} <span className="text-sm block text-gray-400">Giorni</span>
              </div>
              <div className="p-4 bg-obsidianBlack rounded-lg border border-etherealGreen">
                {timeLeft.ore} <span className="text-sm block text-gray-400">Ore</span>
              </div>
              <div className="p-4 bg-obsidianBlack rounded-lg border border-arcanePurple">
                {timeLeft.minuti} <span className="text-sm block text-gray-400">Minuti</span>
              </div>
              <div className="p-4 bg-obsidianBlack rounded-lg border border-mysticCyan">
                {timeLeft.secondi} <span className="text-sm block text-gray-400">Secondi</span>
              </div>
            </>
          ) : (
            <span className="text-3xl text-etherealGreen">Pre-Sale Attiva Ora! 🚀</span>
          )}
        </div>


      </div>

      {/* Informazioni sulla Pre-Sale */}
      <div className="mt-16 px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-mysticCyan">Perché Partecipare alla Pre-Sale?</h2>
        <p className="text-gray-300 mt-4">
          🏆 **Prezzo esclusivo** per i primi partecipanti.  
          🎖️ **Vantaggi in staking** per gli early adopters.  
          🔥 **Accesso anticipato** a funzionalità esclusive.  
        </p>
      </div>

      {/* Link alla Community */}
      <div className="mt-12 flex space-x-6">
        <a href="https://discord.com" className="text-gray-400 hover:text-indigo-500 transition text-3xl">
          <FaDiscord />
        </a>
        <a href="https://twitter.com" className="text-gray-400 hover:text-blue-500 transition text-3xl">
          <FaTwitter />
        </a>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Iron Badger Protocol. Tutti i diritti riservati.
      </footer>
      
    </div>
  );
};


