import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ArtistCard from "@/components/ArtistCard";
import AudioPlayer from "@/components/AudioPlayer";

const Home = () => {
  // Mock data - will be replaced with real data from Lovable Cloud
  const mockArtists = [
    { id: "1", name: "Neon Dreams", genre: "Electronic", trackCount: 12 },
    { id: "2", name: "Cyber Pulse", genre: "Synthwave", trackCount: 8 },
    { id: "3", name: "Digital Waves", genre: "Ambient", trackCount: 15 },
    { id: "4", name: "Future Bass", genre: "Bass", trackCount: 10 },
    { id: "5", name: "Retro Vibes", genre: "Vaporwave", trackCount: 6 },
    { id: "6", name: "Dark Matter", genre: "Techno", trackCount: 14 },
  ];

  return (
    <div className="min-h-screen pb-32">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">Decentralized Music</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover, share, and listen to music in a truly open ecosystem
          </p>
        </motion.div>

        {/* Featured Artists */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Featured Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockArtists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <ArtistCard {...artist} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <AudioPlayer 
        trackName="Neon Nights"
        artistName="Cyber Pulse"
      />
    </div>
  );
};

export default Home;
