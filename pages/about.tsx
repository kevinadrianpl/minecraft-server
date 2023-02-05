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
            Dxrery Networks is a small Minecraft community on a server 
            currently hosted in Germany, but we occasionally move to SA.
            We have many players from all over the world that play on it,
            we mainly speak English on the server and Discord. Welcome.
          </p>
          <p>
            We have many mod-like features on the server, including custom
            Quests, Jobs, special BattlePass, SlimeFun, DeathChests, Shops,
            Backpacks, PlayerWarps, Dynmap, PyroFishing, PyroMining, Towny,
            A resource world, SafariNets, Leveled Mobs, and Custom Terrain.
          </p>
          <p>
            This server is mostly automated and runs on its own, staff
            interference is very minimal. Everyone has a fair chance to
            make it big within the server given enough time. Ranks allow
            everyone the opportunity to fly and gain resources. We are NOT
            pay to win. Everything can be earned with out timed ranks.
          </p>
          <p>
            This server has a 16+ age restriction due to the fact that
            many players swear occasionally or the conversation is more
            adult orientated. If you are under 16, you join at your own
            risk. We are a family friendly server, as long as you don't
            mind a little language here and there. It is mostly decent.
          </p>
          <p>
            We realize this is a small server, we do not care. We would
            rather have 5 dedicated players who are good people than 50
            chaotic players. If you do not want to play because we are 
            smaller than other servers, you are welcome to leave. We will
            always remain small and niche. Focusing on individuals rather 
            than groups of bad people. We ban without warning if players
            are being chaotic or nasty to others. You have been warned!
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
