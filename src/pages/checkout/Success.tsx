import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const verifySession = async () => {
      if (!sessionId) {
        toast({
          variant: "destructive",
          title: "Invalid session",
          description: "No session ID found. Please try purchasing again.",
        });
        navigate("/explore");
        return;
      }

      try {
        const { data: session } = await supabase.auth.getSession();
        
        if (!session.session) {
          // If no session, we'll need to create an account
          setShowSignup(true);
          setIsVerifying(false);
          return;
        }

        const { data, error } = await supabase
          .from("tickets")
          .select("*")
          .eq("stripe_session_id", sessionId)
          .single();

        if (error || !data) {
          throw new Error("Could not verify ticket purchase");
        }

        setIsVerifying(false);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Verification failed",
          description: "Could not verify your ticket purchase. Please contact support.",
        });
        navigate("/explore");
      }
    };

    verifySession();
  }, [sessionId, navigate, toast]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/profile`,
        },
      });

      if (error) throw error;

      toast({
        title: "Account created!",
        description: "Please check your email to verify your account.",
      });
      
      setShowSignup(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not create account. Please try again.",
      });
    }
  };

  if (isVerifying) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <p className="text-lg text-gray-400">Verifying your purchase...</p>
        </div>
      </div>
    );
  }

  if (showSignup) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-lg w-full p-8 space-y-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-gray-500 mb-6">
              Create an account to access your tickets
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-lg w-full p-8 space-y-6 text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold">Payment Successful!</h1>
        <p className="text-gray-500">
          Thank you for your purchase. Your tickets are now available in your profile.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button onClick={() => navigate("/profile")} className="flex-1">
            View My Tickets
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate("/explore")}
            className="flex-1 group"
          >
            Explore More Events
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>
    </div>
  );
}