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
            Dxrery Networks is a small Minecraft community on a server currently hosted in 
            Germany. We have many players from all over the world that play here but we 
            mainly speak English on the server and Discord. We have mod-like features on 
            the server including custom Quests, Jobs, special BattlePass, SlimeFun, 
            DeathChests, Shops, Backpacks, PlayerWarps, Dynmap, PyroFishing, PyroMining, 
            Towny, A resource world, SafariNets, Leveled Mobs, and Custom Terrain.
          </p>
          <p>
            This server has a 16+ age restriction due to players swearing or the 
            conversation is more adult orientated. If you are under 16, you join at 
            your own risk. As long as you don't mind a little language, it's mostly 
            decent. We would rather have 5 dedicated good players than 50 chaotic 
            players so we focus on individuals rather than groups. We ban without 
            warning if players are being chaotic or nasty to others. You have been 
            warned!
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
