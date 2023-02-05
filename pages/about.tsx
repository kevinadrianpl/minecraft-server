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
            This server does not run with the help of any staff member, the
            owner has as little interaction within the server as possible.
            Everything runs on it's own, we do not expect people to stay or
            grow the server, we are content with small respectful numbers.
          </p>
          <p>
            The server rules can be found in-game using /rules, you can also
            find details about the ranks in-game using /ranks and /kits.
            Should you need any more information, Discord is where you will
            find it. Everyone on there is willing to help you.
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
