"use client"

export default function SportsLeagues() {
  const leagues = [
    {
      name: 'Premier League',
      logo: '/premierleague.png',
      alt: 'Premier League logo'
    },
    {
      name: 'Indian Premier League',
      logo: '/ipl.png',
      alt: 'Indian Premier League logo'
    },
    {
      name: 'LaLiga',
      logo: '/laliga.png',
      alt: 'LaLiga logo'
    },
    {
      name: 'NBA',
      logo: '/nba.png',
      alt: 'NBA logo'
    },
    {
      name: 'Bundesliga',
      logo: '/bundsliga.png',
      alt: 'Bundesliga logo'
    },
    {
      name: 'MLS',
      logo: '/mls.png',
      alt: 'MLS logo'
    },
    {
      name: 'The Hundred',
      logo: '/hundread.png',
      alt: 'The Hundred logo'
    }
  ]

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-r from-[#0E1629] to-[#000000]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin text-center mb-16 ">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Invest In
          </span>
          <div className="w-40 h-px mx-auto bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mt-4" />

        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {leagues.map((league) => (
            <div
              key={league.name}
              className="w-32 h-16 relative flex items-center justify-center rounded-lg border-2 border-white border-opacity-50 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-opacity-100"
            >
              <img
                src={league.logo}
                alt={league.alt}
                width={128}
                height={64}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
