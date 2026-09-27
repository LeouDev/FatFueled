import type { StaticImageData } from "next/image";

import heroTriathlon from "@/public/images/hero-triathlon.jpg";
import heroCycling from "@/public/images/hero-cycling.jpg";
import heroRunning from "@/public/images/hero-running.jpg";
import heroSwimming from "@/public/images/hero-swimming.jpg";
import triathlonChute from "@/public/images/triathlon-chute.jpg";
import cyclingAero from "@/public/images/cycling-aero.jpg";
import runningJungle from "@/public/images/running-jungle.jpg";
import swimSunrise from "@/public/images/swim-sunrise.jpg";
import swimRaceStart from "@/public/images/swim-race-start.jpg";
import runnerOrange from "@/public/images/runner-orange.jpg";
import nightRun from "@/public/images/night-run.jpg";
import testingFingertip from "@/public/images/testing-fingertip.jpg";
import coachSession from "@/public/images/coach-session.jpg";
import coachLee from "@/public/images/coach-lee.jpg";
import finishCongrats from "@/public/images/finish-congrats.jpg";
import morningRide from "@/public/images/morning-ride.jpg";
import t1Beach from "@/public/images/t1-beach.jpg";
import cyclistsDuo from "@/public/images/cyclists-duo.jpg";
import nightArms from "@/public/images/night-arms.jpg";
import swimWalkout from "@/public/images/swim-walkout.jpg";
import openWaterGroup from "@/public/images/open-water-group.jpg";
import heartHands from "@/public/images/heart-hands.jpg";
import teamIronman from "@/public/images/team-ironman.jpg";
import medalCarpet from "@/public/images/medal-carpet.jpg";
import bikeFit from "@/public/images/bike-fit.jpg";
import ironmanCarpet from "@/public/images/ironman-carpet.jpg";
import startFinishCrew from "@/public/images/start-finish-crew.jpg";
import swimExitSmile from "@/public/images/swim-exit-smile.jpg";
import groupRide from "@/public/images/group-ride.jpg";
import fieldCrew from "@/public/images/field-crew.jpg";
import cafeCrew from "@/public/images/cafe-crew.jpg";
import openWaterSwim from "@/public/images/open-water-swim.jpg";
import trackCrew from "@/public/images/track-crew.jpg";
import fieldGroup from "@/public/images/field-group.jpg";
import finishArch from "@/public/images/finish-arch.jpg";
import cyclingCrowd from "@/public/images/cycling-crowd.jpg";
import dinnerCrew from "@/public/images/dinner-crew.jpg";
import greenTrisuit from "@/public/images/green-trisuit.jpg";
import testingTrainer from "@/public/images/testing-trainer.jpg";
import runnerHat from "@/public/images/runner-hat.jpg";
import aeroRide from "@/public/images/aero-ride.jpg";
import nightCrew from "@/public/images/night-crew.jpg";
import medalTrio from "@/public/images/medal-trio.jpg";
import finisherMedal from "@/public/images/finisher-medal.jpg";
import stadiumCrew from "@/public/images/stadium-crew.jpg";
import swimStart from "@/public/images/swim-start.jpg";
import cyclistCity from "@/public/images/cyclist-city.jpg";
import swimSplash from "@/public/images/swim-splash.jpg";
import podium from "@/public/images/podium.jpg";
import poster5150 from "@/public/images/poster-5150.jpg";
import posterRaceDay from "@/public/images/poster-race-day.jpg";
import swimCaps from "@/public/images/swim-caps.jpg";
import kayakSwim from "@/public/images/kayak-swim.jpg";
import finishMedalArch from "@/public/images/finish-medal-arch.jpg";
import trackGroup from "@/public/images/track-group.jpg";
import fieldGroup2 from "@/public/images/field-group-2.jpg";

export type Tag = "race-day" | "training" | "triathlon" | "cycling" | "running" | "swimming" | "community";

export const tagLabels: Record<Tag, string> = {
  "race-day": "Race Day",
  training: "Training",
  triathlon: "Triathlon",
  cycling: "Cycling",
  running: "Running",
  swimming: "Swimming",
  community: "Community",
};

export type Photo = {
  src: StaticImageData;
  alt: string;
  /** Drives the athlete gallery filters. Graphics/posters have none, so they stay out of it. */
  tags: Tag[];
  /** CSS object-position used wherever the photo is cropped, e.g. "50% 25%". */
  position?: string;
};

/**
 * Every photo on the site is registered here, sourced from the @fat_fueled Instagram feed.
 * To swap one: overwrite the file in /public/images (same name), or point the import at a new file.
 */
export const images = {
  heroTriathlon: { src: heroTriathlon, alt: "Triathlete in a white-and-black trisuit crossing the finish with arms spread wide", tags: ["race-day", "triathlon"], position: "50% 22%" },
  heroCycling: { src: heroCycling, alt: "Three cyclists in helmets and sunglasses riding close together during a race", tags: ["cycling", "race-day"], position: "50% 30%" },
  heroRunning: { src: heroRunning, alt: "Runner in an orange race kit smiling mid-stride on a lit city course at night", tags: ["running", "race-day"], position: "45% 40%" },
  heroSwimming: { src: heroSwimming, alt: "Triathlete in a white trisuit wading out of the sea through splashing water", tags: ["swimming", "triathlon"], position: "50% 40%" },

  triathlonChute: { src: triathlonChute, alt: "Triathlete running down a finishing chute past an IRONMAN flag between city towers", tags: ["triathlon", "race-day"], position: "55% 50%" },
  cyclingAero: { src: cyclingAero, alt: "Cyclist in a pink-and-blue kit racing past green traffic cones", tags: ["cycling", "race-day"] },
  runningJungle: { src: runningJungle, alt: "Runner in a triathlon kit striding along a road lined with tropical trees", tags: ["running", "triathlon"], position: "50% 45%" },
  swimRaceStart: { src: swimRaceStart, alt: "Open-water swimmers in caps and goggles sprinting into the sea at a race start", tags: ["swimming", "race-day"], position: "40% 50%" },
  swimSunrise: { src: swimSunrise, alt: "Open-water swimmers at sunrise beside large orange race buoys", tags: ["swimming", "race-day"] },

  runnerOrange: { src: runnerOrange, alt: "Runner in an orange-and-white kit gesturing to the camera mid-race", tags: ["running", "race-day"], position: "50% 35%" },
  nightRun: { src: nightRun, alt: "Runner giving a thumbs-up on a dark road during a night race", tags: ["running", "race-day"], position: "60% 50%" },
  testingFingertip: { src: testingFingertip, alt: "Gloved hands taking a fingertip sample from an athlete during a testing session", tags: ["training"] },
  coachLee: { src: coachLee, alt: "Coach Lee Stephen Fat riding his road bike along a tree-lined road", tags: ["cycling", "training"], position: "50% 55%" },
  coachSession: { src: coachSession, alt: "A Fat Fueled session: fingertip testing on an athlete riding an indoor trainer", tags: ["training", "cycling"], position: "40% 30%" },

  finishCongrats: { src: finishCongrats, alt: "Triathlete in an orange-and-white kit jogging under a Congratulations banner at the finish", tags: ["race-day", "triathlon"] },
  morningRide: { src: morningRide, alt: "Cyclists gathering with their road bikes outside a building before a ride", tags: ["cycling", "training"] },
  t1Beach: { src: t1Beach, alt: "Triathlete running up the beach out of the swim at a race, checking their watch", tags: ["triathlon", "swimming", "race-day"], position: "62% 50%" },
  cyclistsDuo: { src: cyclistsDuo, alt: "Two cyclists in matching kits posing with their road bikes", tags: ["cycling", "community"] },
  nightArms: { src: nightArms, alt: "Runner in a black race kit with arms outstretched at a night race", tags: ["running", "race-day"] },
  swimWalkout: { src: swimWalkout, alt: "Triathlete in a blue trisuit walking out of the sea after the swim", tags: ["swimming", "triathlon"] },
  openWaterGroup: { src: openWaterGroup, alt: "Group of swimmers standing waist-deep in the sea with orange tow floats", tags: ["swimming", "community", "training"] },
  heartHands: { src: heartHands, alt: "Runner making a heart shape with both hands under the race lights", tags: ["running", "race-day"], position: "50% 30%" },

  teamIronman: { src: teamIronman, alt: "Fat Fueled athletes posing together in front of an IRONMAN wall", tags: ["community", "race-day"] },
  medalCarpet: { src: medalCarpet, alt: "Triathlete showing a finisher's medal on the red carpet at a 5150 triathlon", tags: ["race-day", "triathlon"] },
  bikeFit: { src: bikeFit, alt: "Athlete smiling on an indoor bike trainer during a testing session", tags: ["training", "cycling"] },
  ironmanCarpet: { src: ironmanCarpet, alt: "Triathlete running on the red carpet beside IRONMAN barriers", tags: ["triathlon", "race-day", "running"], position: "35% 40%" },
  startFinishCrew: { src: startFinishCrew, alt: "Four triathletes with medals under a Start/Finish arch", tags: ["community", "race-day"] },
  swimExitSmile: { src: swimExitSmile, alt: "Smiling triathlete in a dark trisuit jogging out of the water", tags: ["swimming", "triathlon"] },

  groupRide: { src: groupRide, alt: "A group of cyclists lined up with their bikes on a roadside before a ride", tags: ["cycling", "community", "training"] },
  fieldCrew: { src: fieldCrew, alt: "A large group of athletes posing together on a sunny sports field", tags: ["community"], position: "50% 60%" },
  cafeCrew: { src: cafeCrew, alt: "Athletes and friends relaxing together at a café", tags: ["community"] },
  openWaterSwim: { src: openWaterSwim, alt: "Swimmers with tow floats gathering in clear water for an open-water session", tags: ["swimming", "training"] },
  trackCrew: { src: trackCrew, alt: "Athletes lined up together on a red running track", tags: ["community", "running"] },
  fieldGroup: { src: fieldGroup, alt: "Six athletes in race shirts standing together on a sports field", tags: ["community"] },
  finishArch: { src: finishArch, alt: "Athlete crossing under the IRONMAN 70.3 finish arch between city towers", tags: ["triathlon", "race-day"] },
  cyclingCrowd: { src: cyclingCrowd, alt: "Cyclist in a helmet riding past a crowd of spectators during a race", tags: ["cycling", "race-day"], position: "50% 35%" },
  dinnerCrew: { src: dinnerCrew, alt: "Fat Fueled athletes and friends gathered around a long table on a night out", tags: ["community"] },

  greenTrisuit: { src: greenTrisuit, alt: "Close-up of a triathlete in a green trisuit mid-race", tags: ["triathlon", "race-day"] },
  testingTrainer: { src: testingTrainer, alt: "Athlete riding a road bike on an indoor trainer during a testing session", tags: ["training", "cycling"] },
  aeroRide: { src: aeroRide, alt: "Triathlete in a Fat Fueled Multisport kit riding on aero bars during a race", tags: ["cycling", "triathlon", "race-day"], position: "50% 10%" },
  runnerHat: { src: runnerHat, alt: "Runner in a sun hat and sleeveless trisuit running along a tree-lined road", tags: ["running", "race-day"] },
  nightCrew: { src: nightCrew, alt: "Five friends in running gear posing together under palm trees at night", tags: ["community", "running"] },
  medalTrio: { src: medalTrio, alt: "Three athletes in matching pink shirts showing their medals by the sea", tags: ["community", "race-day"] },
  finisherMedal: { src: finisherMedal, alt: "Smiling athlete in a trisuit wearing a finisher's medal after a race", tags: ["race-day", "triathlon"] },
  stadiumCrew: { src: stadiumCrew, alt: "Group of runners and families posing on a stadium field", tags: ["community", "running"] },
  swimStart: { src: swimStart, alt: "Swimmers in caps crowded together at a race start", tags: ["swimming", "race-day"] },
  cyclistCity: { src: cyclistCity, alt: "Cyclist in a white kit riding past fountains in the city", tags: ["cycling", "race-day"] },
  swimSplash: { src: swimSplash, alt: "Smiling triathlete splashing out of the sea with other swimmers", tags: ["swimming", "triathlon"] },
  swimCaps: { src: swimCaps, alt: "Swimmers in matching caps gathering on the shore before an open-water start", tags: ["swimming", "race-day"] },
  kayakSwim: { src: kayakSwim, alt: "Swimmers holding onto a kayak during an open-water session", tags: ["swimming", "training"] },
  finishMedalArch: { src: finishMedalArch, alt: "Athlete showing a medal in front of a green FINISH arch", tags: ["race-day", "triathlon"], position: "50% 40%" },
  trackGroup: { src: trackGroup, alt: "Runners in colorful kits posing on a running track", tags: ["community", "running"] },
  fieldGroup2: { src: fieldGroup2, alt: "A mixed group of athletes and friends posing on a grass field", tags: ["community"] },

  podium: { src: podium, alt: "Two athletes on the podium at the Adlaw sa Kublan Aquathlon", tags: [] },
  poster5150: { src: poster5150, alt: "Fat Fueled athletes featured on a 5150 Triathlon race graphic", tags: [] },
  posterRaceDay: { src: posterRaceDay, alt: "Fat Fueled race-day graphic for a swim-bike-run event in Bohol", tags: [] },
} satisfies Record<string, Photo>;
