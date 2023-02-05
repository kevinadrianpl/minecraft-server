import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page
        title="About"
        description="All about Dxrery Networks."
      >
        <Prose>
          <p>
            Dxrery Networks is a Minecraft community on a server currently hosted in 
            EU. We have players from all over that play here but we mainly speak 
            English. We have mod-like features including Quests, Jobs, BattlePass, 
            SlimeFun, DeathChests, Shops, Backpacks, PlayerWarps, Dynmap, PyroFishing, 
            PyroMining, Towny, Resource World, SafariNet, and Leveled Mobs.
          </p>
          <p>
            This server is 16+ due to players swearing or the conversation is more 
            adult orientated. If you are under 16, you join at your own risk. We would 
            rather have 5 dedicated good players than 50 chaotic players so we focus 
            on individuals rather than groups. We ban without warning if players are 
            being chaotic or nasty to others. You have been warned!
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
