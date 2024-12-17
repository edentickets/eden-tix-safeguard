import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LayoutDashboard, Users, UserPlus } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-eden-dark/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Eden</span>
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-eden-primary">
                    <Users className="w-4 h-4 mr-2" />
                    Community
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <Link 
                        to="/creators" 
                        className="flex items-center space-x-2 hover:bg-eden-light/10 p-2 rounded-md transition-colors"
                      >
                        <UserPlus className="w-4 h-4 text-eden-primary" />
                        <div>
                          <div className="font-medium">Creators</div>
                          <p className="text-sm text-muted-foreground">
                            Discover event organizers and promoters
                          </p>
                        </div>
                      </Link>
                      <Link 
                        to="/users" 
                        className="flex items-center space-x-2 hover:bg-eden-light/10 p-2 rounded-md transition-colors"
                      >
                        <Users className="w-4 h-4 text-eden-secondary" />
                        <div>
                          <div className="font-medium">Users</div>
                          <p className="text-sm text-muted-foreground">
                            Connect with other event enthusiasts
                          </p>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/explore">
              <Button variant="ghost" className="text-white hover:text-eden-primary">
                Explore
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="ghost" className="text-white hover:text-eden-primary flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Button>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-eden-primary">
              Sign In
            </Button>
            <Button className="btn-gradient">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};