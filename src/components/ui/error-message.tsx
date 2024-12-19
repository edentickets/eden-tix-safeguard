import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface ErrorMessageProps {
  title?: string;
  message: string;
  retry?: () => void;
}

export const ErrorMessage = ({ 
  title = "Something went wrong", 
  message, 
  retry 
}: ErrorMessageProps) => {
  return (
    <Alert variant="destructive" className="animate-fade-in">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="flex items-center gap-4">
        {message}
        {retry && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={retry}
            className="ml-auto"
          >
            Try Again
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
};