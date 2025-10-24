import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Music, Search, Upload, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:glow-primary transition-all">
            <Music className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-bold text-gradient">DeMusic</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/search">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
              <Search className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/upload">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
              <Upload className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10">
              <User className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
