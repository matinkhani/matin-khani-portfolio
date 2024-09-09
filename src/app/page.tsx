"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import HeroView from "./_home/_sections/_hero/view";
import SkillsView from "./_home/_sections/_skills/view";

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    // Ensure this runs only in the browser
    if (typeof window !== "undefined") {
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener(
          "beforeinstallprompt",
          handleBeforeInstallPrompt,
        );
      }
    };
  }, []);

  // Call this when your custom install button is clicked
  const installApp = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <main className="flex flex-col">
      <HeroView />
      <SkillsView />
      <Button onClick={installApp}>Install PWA</Button>
    </main>
  );
}
