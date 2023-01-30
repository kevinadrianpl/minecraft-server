import type { NextPage } from "next";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const Vote: NextPage = () => {
  return (
    <Page
      title="Voting Links"
      description="List of links to vote for the server."
    >
      <Prose>
        <ul style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <li>
            <a style={{ color: "purple" }} href='https://minecraft-mp.com/server/221984/vote/'>Minecraft-MP.com</a>
          </li>
          <li>
            <a style={{ color: "purple" }} href='https://www.planetminecraft.com/server/dxrery-networks/vote/'>PlanetMinecraft.com</a>
          </li>
          <li>
            <a style={{ color: "purple" }} href='https://minecraftservers.org/vote/637524/'>MinecraftServers.org</a>
          </li>
          <li>
            <a style={{ color: "purple" }} href='https://topminecraftservers.org/server/28267/'>TopMinecraftServers</a>
          </li>
          <li>
            <a style={{ color: "purple" }} href='https://topg.org/minecraft-servers/server-535007'>TopG.org</a>
          </li>
        </ul>
      </Prose>
    </Page>
  );
};

export default Vote;
