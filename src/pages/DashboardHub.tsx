import { BookOpenText, FileText } from "lucide-react";
import HubCard from "@/components/HubCard";

const hubItems = [
  {
    title: "Privacy Policy",
    description: "Read how this portfolio handles and protects your data.",
    path: "/privacy-policy",
    icon: FileText,
    isExternal: false,
  },
  {
    title: "App Documentation",
    description: "Open the external technical docs for this application.",
    path: "https://vite.dev/guide/",
    icon: BookOpenText,
    isExternal: true,
  },
];

const DashboardHub = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-12 md:py-16">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Hub</h1>
          <p className="mt-2 text-muted-foreground">
            Central access to internal pages and external resources.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {hubItems.map((item) => (
            <HubCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default DashboardHub;
