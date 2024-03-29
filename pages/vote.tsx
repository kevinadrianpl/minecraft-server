import type { NextPage } from "next";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const Vote: NextPage = () => {
  return (
    <Page
      title="Voting Links"
      description="Hey! Help us get more players by casting your vote for the server using one of or all of the links below. Each vote gives you B500 in-game money and either 3 diamonds or 3 emeralds."
    >
      <Prose>
        <ul style={{ display: "flex", flexDirection: "column"}}>
          <li>
            <a style={{ color: "gold" }} href='https://minecraft-mp.com/server/221984/vote/'>Minecraft-MP.com ZA</a>
          </li>
          <li>
            <a style={{ color: "gold" }} href='https://minecraft-mp.com/server/315282/vote/'>Minecraft-MP.com EU</a>
          </li>
          <li>
            <a style={{ color: "gold" }} href='https://minecraftservers.org/vote/637524/'>MinecraftServers.org</a>
          </li>
          <li>
            <a style={{ color: "gold" }} href='https://topminecraftservers.org/server/28267/'>TopMinecraftServers</a>
          </li>
          <li>
            <a style={{ color: "gold" }} href='https://topg.org/minecraft-servers/server-535007'>TopG.org</a>
          </li>
        </ul>
      </Prose>
    </Page>
  );
};

export default Vote;
