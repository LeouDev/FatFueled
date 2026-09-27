import { images } from "./images";

/** Brand philosophy — not a proprietary methodology claim. */
export const philosophy = [
  { number: "01", title: "Show up", text: "Consistency beats intensity. The work starts by being there, session after session." },
  { number: "02", title: "Build", text: "Fitness is layered week on week. Patience turns training into capacity." },
  { number: "03", title: "Adapt", text: "Life, fatigue and weather happen. Good training bends without breaking." },
  { number: "04", title: "Perform", text: "Race day is where the process shows. Trust the work and go." },
];

export const method = [
  { number: "01", title: "Assess", text: "Understand the athlete and the starting point." },
  { number: "02", title: "Plan", text: "Create a structured path toward the goal." },
  { number: "03", title: "Train", text: "Execute consistently and adapt along the way." },
  { number: "04", title: "Perform", text: "Bring the work together when it matters." },
];

export const coachingPillars = [
  { title: "Structured training", text: "Every session has a purpose and a place in the bigger plan." },
  { title: "Endurance development", text: "Build the aerobic engine that carries you further, for longer." },
  { title: "Consistency", text: "Sustainable training weeks that fit real life, stacked over months." },
  { title: "Athlete-specific planning", text: "Built around your goals, your schedule and your starting point." },
  { title: "Race preparation", text: "Pacing, fueling and race-day logistics rehearsed long before the start line." },
];

/** Add the client's real coaching packages here (never invent pricing). While empty, the page shows "Coming soon". */
export const packages: { name: string; detail: string }[] = [];

export const communityValues = ["Community", "Accountability", "Friendship", "Shared goals", "Race-day energy"];

export const aboutSections = [
  {
    number: "01",
    title: "The brand",
    text: "Fat Fueled is endurance coaching for triathlon, cycling, running and swimming — built on structure, consistency and the people who keep showing up.",
    photo: images.greenTrisuit,
  },
  {
    number: "02",
    title: "The coach",
    text: "Fat Fueled is led by UESCA Certified Coach Lee Stephen Fat. Coaching starts with understanding the athlete, then building a process that can be sustained.",
    photo: images.coachLee,
  },
  {
    number: "03",
    title: "The philosophy",
    text: "Big performances are built long before race day. Show up, build, adapt — then perform when it matters.",
    photo: images.aeroRide,
  },
  {
    number: "04",
    title: "The community",
    text: "Early rides, open-water swims, track sessions and finish lines. Endurance is an individual pursuit, but the journey doesn't have to be.",
    photo: images.nightCrew,
  },
];
