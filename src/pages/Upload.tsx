import { motion } from "framer-motion";
import { Upload as UploadIcon, Music } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Upload = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-2">Upload Track</h1>
          <p className="text-muted-foreground mb-8">Share your music with the world</p>

          <div className="border border-border rounded-xl p-8 bg-card gradient-card space-y-6">
            {/* File Upload */}
            <div className="space-y-2">
              <Label>Audio File</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <UploadIcon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag and drop your audio file here, or click to browse
                </p>
                <p className="text-xs text-muted-foreground">
                  Supported formats: MP3, WAV, FLAC (max 50MB)
                </p>
              </div>
            </div>

            {/* Cover Art */}
            <div className="space-y-2">
              <Label>Cover Art</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Music className="w-10 h-10 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Upload cover image (optional)
                </p>
              </div>
            </div>

            {/* Track Info */}
            <div className="space-y-2">
              <Label htmlFor="track-name">Track Name</Label>
              <Input
                id="track-name"
                type="text"
                placeholder="Enter track name"
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="genre">Genre</Label>
              <Input
                id="genre"
                type="text"
                placeholder="Electronic, Synthwave, etc."
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Tell us about your track..."
                className="bg-background min-h-24"
              />
            </div>

            <Button className="w-full gradient-primary glow-primary">
              Upload Track
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Upload;
