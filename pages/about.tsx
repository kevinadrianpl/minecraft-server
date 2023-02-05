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
        </Prose>
      </Page>
    </>
  );
};

export default About;
