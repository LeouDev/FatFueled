import { images, type Photo } from "./images";

export type Discipline = {
  slug: "triathlon" | "cycling" | "running" | "swimming";
  number: string;
  title: string;
  description: string;
  photo: Photo;
  /** Full-bleed slide used in the homepage hero. */
  hero: Photo;
};

export const disciplines: Discipline[] = [
  {
    slug: "triathlon",
    number: "01",
    title: "Triathlon",
    description: "Swim. Bike. Run. Build the endurance and consistency required to bring all three disciplines together.",
    photo: images.triathlonChute,
    hero: images.heroTriathlon,
  },
  {
    slug: "cycling",
    number: "02",
    title: "Cycling",
    description: "Build strength, endurance and confidence on the bike.",
    photo: images.cyclingAero,
    hero: images.heroCycling,
  },
  {
    slug: "running",
    number: "03",
    title: "Running",
    description: "Develop sustainable speed, endurance and consistency.",
    photo: images.runningJungle,
    hero: images.heroRunning,
  },
  {
    slug: "swimming",
    number: "04",
    title: "Swimming",
    description: "Improve efficiency, technique and endurance in the water.",
    photo: images.swimRaceStart,
    hero: images.heroSwimming,
  },
];
