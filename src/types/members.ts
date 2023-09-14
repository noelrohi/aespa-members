import { z } from "astro/zod";

export type Member = {
  name: {
    stage: string;
    fullname: string;
    native: string;
  };
  image: {
    icon: string;
    cover: string;
  };
  description: string;
  birthplace: string;
  birthdate: string;
  height?: string;
  weight?: string;
  bloodType: string;
  zodiac: string[];
  socials: z.infer<typeof socialSchema>;
};

const socialSchema = z.object({
  twitter: z.string().optional(),
  instagram: z.string().optional(),
  youtube: z.string().optional(),
});
