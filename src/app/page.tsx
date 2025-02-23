import HeroView from "./_home/_sections/_hero/view";
import SkillsView from "./_home/_sections/_skills/view";
import ExperiencesView from "./_home/_sections/_experience/view";
import AboutMeView from "./_home/_sections/_about-me/view";
import ProjectsView from "./_home/_sections/_projects/view";
import ContactMeView from "./_home/_sections/_contact-me/view";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroView />
      <SkillsView />
      <ExperiencesView />
      <AboutMeView />
      <ProjectsView />
      <ContactMeView />
    </main>
  );
}
