import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";

const Landing = () => {
  return (
    <div className="min-h-screen bg-eden-dark">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Welcome to <span className="gradient-text">Eden</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            The future of event ticketing is here. Choose your path to get started.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/creators">
              <Button size="lg" className="btn-gradient w-full sm:w-auto">
                For Event Creators
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/users">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-eden-primary text-eden-primary w-full sm:w-auto"
              >
                For Event Goers
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;