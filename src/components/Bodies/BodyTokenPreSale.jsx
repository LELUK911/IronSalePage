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
          Token Pre-Sale Coming Soon! 🚀
        </h1>
        <p className="text-gray-300 text-lg mt-4">
          The first phase of the **Iron Badger** token sale is starting soon.
          Gain an **exclusive advantage** by participating in the Pre-Sale.
        </p>


        {/* Conto alla Rovescia */}
        <div className="flex justify-center space-x-6 text-center mt-8 text-4xl font-bold">
          {Object.keys(timeLeft).length > 0 ? (
            <>
              <div className="p-4 bg-obsidianBlack rounded-lg border border-mysticCyan">
                {/*timeLeft.days*/}0<span className="text-sm block text-gray-400">Days</span>
              </div>
              <div className="p-4 bg-obsidianBlack rounded-lg border border-etherealGreen">
                {/*timeLeft.hours*/} 0<span className="text-sm block text-gray-400">Hours</span>
              </div>
              <div className="p-4 bg-obsidianBlack rounded-lg border border-arcanePurple">
                {/*timeLeft.minutes*/} 0<span className="text-sm block text-gray-400">Minutes</span>
              </div>
              <div className="p-4 bg-obsidianBlack rounded-lg border border-mysticCyan">
                {/*timeLeft.seconds*/} 0<span className="text-sm block text-gray-400">Seconds</span>
              </div>
            </>

          ) : (
            <span className="text-3xl text-etherealGreen">Pre-Sale Active Now! 🚀</span>
          )}
        </div>


      </div>

      {/* Informazioni sulla Pre-Sale */}
      <div className="mt-16 px-6 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-mysticCyan">Why Join the Pre-Sale?</h2>
        <p className="text-gray-300 mt-4">
          🏆 **Exclusive price** for early participants.
          🎖️ **Staking benefits** for early adopters.
          🔥 **Early access** to exclusive features.
        </p>

      </div>

   
    </div>
  );
};


