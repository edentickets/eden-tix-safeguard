import { useEffect, useState } from "react";
import Joyride, { CallBackProps, STATUS, Step } from "react-joyride";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface OnboardingTutorialProps {
  steps: Step[];
  type: "creator" | "user";
}

export const OnboardingTutorial = ({ steps, type }: OnboardingTutorialProps) => {
  const [run, setRun] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: profile } = await supabase
        .from("profiles")
        .select("onboarding_completed")
        .eq("id", user.id)
        .single();

      if (!profile?.onboarding_completed) {
        setRun(true);
      }
    };

    checkOnboardingStatus();
  }, []);

  const handleJoyrideCallback = async (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from("profiles")
        .update({ onboarding_completed: true })
        .eq("id", user.id);

      if (error) {
        toast({
          title: "Error updating onboarding status",
          description: "Please try again later",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: `Welcome to Eden!`,
        description: type === "creator" 
          ? "You're ready to start creating amazing events."
          : "You're ready to discover amazing events.",
      });
    }
  };

  return (
    <Joyride
      callback={handleJoyrideCallback}
      continuous
      hideCloseButton
      run={run}
      scrollToFirstStep
      showProgress
      showSkipButton
      steps={steps}
      styles={{
        options: {
          arrowColor: "#1a1a1a",
          backgroundColor: "#1a1a1a",
          overlayColor: "rgba(0, 0, 0, 0.5)",
          primaryColor: "#7c3aed",
          textColor: "#fff",
        },
      }}
    />
  );
};