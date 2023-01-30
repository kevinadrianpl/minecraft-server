import type { NextPage } from "next";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Vote: NextPage = () => {
  return (
    <ul>
      <li>
        <a href='https://minecraft-mp.com/server/221984/vote/'>Minecraft-MP.com</a>
      </li>
      <li>
      <a href='https://www.planetminecraft.com/server/dxrery-networks/vote/'>PlanetMinecraft.com</a>
      </li>
      <li>
        <a href='https://minecraftservers.org/vote/637524/'>MinecraftServers.org</a>
      </li>
      <li>
        <a href='https://topminecraftservers.org/server/28267/'>TopMinecraftServers</a>
      </li>
      <li>
        <a href='https://topg.org/minecraft-servers/server-535007'>TopG.org</a>
      </li>
    </ul>
  );
};

export default Vote;