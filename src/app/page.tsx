import { Suspense } from "react";
import HeroView from "./_home/_sections/_hero/view";
import SkillsView from "./_home/_sections/_skills/view";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroView />
      <Suspense fallback={"Loading..."}>
        <SkillsView />
      </Suspense>
    </main>
  );
}
