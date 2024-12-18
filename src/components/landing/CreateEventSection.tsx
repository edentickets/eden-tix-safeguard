import { useSession } from "@supabase/auth-helpers-react";
import { CreateEventForm } from "@/components/events/CreateEventForm";

export const CreateEventSection = () => {
  const session = useSession();

  if (!session) return null;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
          Create Your Event
        </h2>
        <CreateEventForm />
      </div>
    </section>
  );
};