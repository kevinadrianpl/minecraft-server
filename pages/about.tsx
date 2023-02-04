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
            Dxrery Networks is a small Minecraft community on a server that is 
            currently hosted in Germany, but we occasionally move back to SA. 
            We have many players from all over the world that play on it, so
            we mainly speak English on the server and Discord. Welcome!
          </p>
          <p>
            We have many mod-like features on the server, including custom
            Quests, Jobs, a special BattlePass, SlimeFun, DeathChests, 
            Backpacks, Shops, PlayerWarps, Dynmap, PyroFishing, PyroMining,
            A resource world, SafariNets, Towny, Leveled Mobs, and more!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed
            aliquam tempora nihil magni natus mollitia. Doloribus,
            exercitationem iusto odio asperiores dolor, alias excepturi maxime
            distinctio quod eum saepe eos!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sed
            aliquam tempora nihil magni natus mollitia. Doloribus,
            exercitationem iusto odio asperiores dolor, alias excepturi maxime
            distinctio quod eum saepe eos!
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
