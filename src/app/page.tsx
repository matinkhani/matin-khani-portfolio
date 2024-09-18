import { Suspense } from "react";
import HeroView from "./_home/_sections/_hero/view";
import SkillsView from "./_home/_sections/_skills/view";
import ExperiencesView from "./_home/_sections/_experience/view";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroView />
      <Suspense fallback={"Loading..."}>
        <SkillsView />
      </Suspense>
      <ExperiencesView />
    </main>
  );
}
