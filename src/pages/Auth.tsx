import { motion } from "framer-motion";
import { Music } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="p-3 rounded-xl gradient-primary glow-primary">
              <Music className="w-8 h-8 text-white" />
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-gradient mb-2">Welcome to DeMusic</h1>
          <p className="text-muted-foreground">Join the decentralized music revolution</p>
        </div>

        <div className="border border-border rounded-xl p-6 bg-card gradient-card">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-background"
                  />
                </div>
                <Button type="submit" className="w-full gradient-primary glow-primary">
                  Sign In
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Artist Name</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="Your stage name"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-background"
                  />
                </div>
                <Button type="submit" className="w-full gradient-primary glow-primary">
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
