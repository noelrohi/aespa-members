import type { Member } from "@/types/members";
import { Icons } from "./icons";

export function SocialList({ socials }: { socials: Member["socials"] }) {
  return (
    <>
      {Object.entries(socials).map(([key, value]) => {
        const Icon = Icons[key as keyof typeof Icons];

        return (
          <a
            key={key}
            href={value}
            target="_blank"
            className="inline-flex gap-2"
          >
            <Icon />
            <span className="capitalize">{key}</span>
          </a>
        );
      })}
    </>
  );
}
