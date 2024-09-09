import HeroView from "./_home/_sections/_hero/view";
import SkillsView from "./_home/_sections/_skills/view";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroView />
      <SkillsView />
    </main>
  );
}
