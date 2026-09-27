import type { Metadata } from "next";
import { AthleteStories } from "@/components/AthleteStories";
import { CoachSection } from "@/components/CoachSection";
import { Community } from "@/components/Community";
import { CTA } from "@/components/CTA";
import { DisciplineSection } from "@/components/DisciplineSection";
import { Hero } from "@/components/Hero";
import { InstagramSection } from "@/components/InstagramSection";
import { Intro } from "@/components/Intro";
import { Method } from "@/components/Method";
import { Philosophy } from "@/components/Philosophy";
import { PhotoJournal } from "@/components/PhotoJournal";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <DisciplineSection index="02" />
      <Philosophy />
      <Method index="04" />
      <AthleteStories index="05" />
      <PhotoJournal index="06" />
      <CoachSection index="07" />
      <Community index="08" />
      <InstagramSection index="09" />
      <CTA />
    </>
  );
}
