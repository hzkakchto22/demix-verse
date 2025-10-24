import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ArtistCard from "@/components/ArtistCard";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const mockArtists = [
    { id: "1", name: "Neon Dreams", genre: "Electronic", trackCount: 12 },
    { id: "2", name: "Cyber Pulse", genre: "Synthwave", trackCount: 8 },
    { id: "3", name: "Digital Waves", genre: "Ambient", trackCount: 15 },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-6">Search</h1>
          
          <div className="relative max-w-2xl">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for artists or tracks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-card border-border"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6">
            {searchQuery ? "Search Results" : "Popular Artists"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockArtists.map((artist) => (
              <ArtistCard key={artist.id} {...artist} />
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Search;
