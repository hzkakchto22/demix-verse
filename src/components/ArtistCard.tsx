import { motion } from "framer-motion";
import { Music, Play } from "lucide-react";
import { Link } from "react-router-dom";

interface ArtistCardProps {
  id: string;
  name: string;
  genre?: string;
  avatar?: string;
  trackCount: number;
}

const ArtistCard = ({ id, name, genre, avatar, trackCount }: ArtistCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link to={`/artist/${id}`}>
        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-all">
          <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-all">
                {avatar ? (
                  <img src={avatar} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <Music className="w-8 h-8 text-muted-foreground" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg truncate group-hover:text-gradient transition-all">
                  {name}
                </h3>
                {genre && (
                  <p className="text-sm text-muted-foreground">{genre}</p>
                )}
              </div>

              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:glow-primary transition-all">
                <Play className="w-5 h-5 text-primary fill-primary" />
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              {trackCount} {trackCount === 1 ? 'track' : 'tracks'}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ArtistCard;
