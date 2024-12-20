import { Step } from "react-joyride";

export const creatorSteps: Step[] = [
  {
    target: ".dashboard-header",
    content: "Welcome to your Creator Dashboard! This is where you'll manage your events and track your success.",
    disableBeacon: true,
  },
  {
    target: ".performance-metrics",
    content: "Track your event performance, ticket sales, and revenue in real-time.",
  },
  {
    target: ".events-list",
    content: "View and manage all your events in one place. Create new events and monitor their status.",
  },
  {
    target: "[data-create-event]",
    content: "Ready to create your first event? Click here to get started!",
  },
];

export const userSteps: Step[] = [
  {
    target: ".user-profile",
    content: "Welcome to Eden! This is your profile where you can manage your tickets and preferences.",
    disableBeacon: true,
  },
  {
    target: ".user-tickets",
    content: "View all your purchased tickets here. You can easily access and manage them.",
  },
  {
    target: ".user-rewards",
    content: "Track your rewards and benefits from being an active Eden member.",
  },
];