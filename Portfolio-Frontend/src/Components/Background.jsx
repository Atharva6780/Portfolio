const SpaceBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleDelay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };

    const generateShootingStars = () => {
      const newShootingStars = [];
      for (let i = 0; i < 5; i++) {
        newShootingStars.push({
          id: i,
          delay: Math.random() * 10 + 5,
        });
      }
      setShootingStars(newShootingStars);
    };

    generateStars();
    generateShootingStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>

      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.twinkleDelay}s`,
            animationDuration: "2s",
          }}
        />
      ))}

      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-80"
          style={{
            top: "20%",
            right: "-20px",
            animationDelay: `${shootingStar.delay}s`,
            animationDuration: "3s",
          }}
        />
      ))}

      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse blur-xl"></div>
      <div
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse blur-xl"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-3/4 w-20 h-20 bg-indigo-400 rounded-full opacity-20 animate-pulse blur-xl"
        style={{ animationDelay: "4s" }}
      ></div>

    </div>
  );
};
