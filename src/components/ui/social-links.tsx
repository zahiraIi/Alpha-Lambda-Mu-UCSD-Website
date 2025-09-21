import React from "react";
import { cn } from "@/lib/utils";

interface Social {
  name: string;
  image: string;
  url?: string;
}

interface SocialLinksProps {
  socials: Social[];
  className?: string;
}

export function SocialLinks({ socials, className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110"
        >
          <img
            src={social.image}
            alt={social.name}
            className="h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <span className="sr-only">{social.name}</span>
        </a>
      ))}
    </div>
  );
}