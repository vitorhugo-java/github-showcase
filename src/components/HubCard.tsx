import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface HubCardProps {
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
  isExternal: boolean;
}

const HubCard = ({ title, description, path, icon: Icon, isExternal }: HubCardProps) => {
  // Keep this component presentational-only so navigation decisions stay in props/config,
  // which makes the card reusable across hubs without coupling it to business logic.
  const content = (
    <Card className="h-full transition-colors hover:border-primary/40 hover:bg-accent/30">
      <CardHeader className="flex flex-row items-start gap-3 space-y-0">
        <Icon
          className="mt-0.5 h-5 w-5 shrink-0 text-primary"
          aria-hidden="true"
        />
        <div className="space-y-1">
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <span className="text-sm font-medium text-primary underline-offset-4 group-hover:underline">
          Open
        </span>
      </CardContent>
    </Card>
  );

  if (isExternal) {
    // External links use explicit safe-tab attributes to prevent the opened page from
    // gaining access to the current window context.
    return (
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label={`${title} (opens in a new tab)`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={path}
      className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={title}
    >
      {content}
    </Link>
  );
};

export default HubCard;
