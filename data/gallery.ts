import { images } from "./images";

export const stories = [
  { label: "Race Day", line: "The finish line, earned.", photo: images.finishCongrats },
  { label: "Training", line: "Before sunrise, before everyone.", photo: images.morningRide },
  { label: "Triathlon", line: "Swim. Bike. Run. Repeat.", photo: images.t1Beach },
  { label: "Cycling", line: "Miles are better shared.", photo: images.cyclistsDuo },
  { label: "Running", line: "Under the lights.", photo: images.nightArms },
  { label: "Swimming", line: "Out of the water, onto the next.", photo: images.swimWalkout },
  { label: "Community", line: "Nobody trains alone here.", photo: images.openWaterGroup },
  { label: "Race Day", line: "All heart, every kilometer.", photo: images.heartHands },
];

/** Photo journal: "lg" tiles span two thirds of the row on desktop, "sm" one third. */
export const journal = [
  { label: "Community", size: "lg", photo: images.teamIronman },
  { label: "Race Day", size: "sm", photo: images.medalCarpet },
  { label: "Training", size: "sm", photo: images.bikeFit },
  { label: "Swimming", size: "lg", photo: images.swimCaps },
  { label: "Finish Line", size: "lg", photo: images.finishMedalArch },
  { label: "Triathlon", size: "sm", photo: images.ironmanCarpet },
] as const;

export const instagramFeed = [
  images.podium,
  images.swimSplash,
  images.poster5150,
  images.cyclistCity,
  images.swimStart,
  images.posterRaceDay,
  images.medalTrio,
  images.finisherMedal,
  images.stadiumCrew,
];

export const community = {
  main: images.groupRide,
  supporting: [images.cafeCrew, images.openWaterSwim, images.trackCrew, images.fieldGroup],
};
