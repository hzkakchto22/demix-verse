import { motion } from "framer-motion";
import { Music, Play } from "lucide-react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Artist = () => {
  const { id } = useParams();

  const mockTracks = [
    { id: "1", name: "Neon Nights", duration: "3:45", plays: 1234 },
    { id: "2", name: "Digital Dreams", duration: "4:12", plays: 2341 },
    { id: "3", name: "Cyber Love", duration: "3:28", plays: 3456 },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        {/* Artist Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-48 h-48 rounded-xl bg-muted flex items-center justify-center border-2 border-primary/20 glow-primary">
              <Music className="w-24 h-24 text-primary" />
            </div>
            
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-2 text-gradient">Cyber Pulse</h1>
              <p className="text-xl text-muted-foreground mb-4">Electronic / Synthwave</p>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Creating futuristic soundscapes and cyberpunk vibes. Exploring the intersection of
                technology and emotion through music.
              </p>
              <div className="flex gap-4">
                <Button className="gradient-primary glow-primary">
                  <Play className="w-5 h-5 mr-2 fill-white" />
                  Play All
                </Button>
                <Button variant="outline">Follow</Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tracks List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-6">Tracks</h2>
          <div className="space-y-2">
            {mockTracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-5 h-5 text-primary fill-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{track.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {track.plays.toLocaleString()} plays
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">{track.duration}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Artist;
