import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { useState } from "react";

interface AudioPlayerProps {
  trackName?: string;
  artistName?: string;
  coverArt?: string;
}

const AudioPlayer = ({ trackName, artistName, coverArt }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [progress, setProgress] = useState([0]);

  if (!trackName) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          {/* Track Info */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
              {coverArt ? (
                <img src={coverArt} alt={trackName} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full gradient-primary" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-semibold truncate">{trackName}</div>
              <div className="text-sm text-muted-foreground truncate">{artistName}</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-2 flex-1 max-w-2xl">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <SkipBack className="w-5 h-5" />
              </Button>
              
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                size="icon"
                className="w-12 h-12 rounded-full gradient-primary hover:glow-primary"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 fill-white" />
                ) : (
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                )}
              </Button>

              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <SkipForward className="w-5 h-5" />
              </Button>
            </div>

            <div className="w-full flex items-center gap-2">
              <span className="text-xs text-muted-foreground">0:00</span>
              <Slider
                value={progress}
                onValueChange={setProgress}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-xs text-muted-foreground">3:45</span>
            </div>
          </div>

          {/* Volume */}
          <div className="hidden md:flex items-center gap-2 flex-1 justify-end max-w-xs">
            <Volume2 className="w-5 h-5 text-muted-foreground" />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AudioPlayer;
