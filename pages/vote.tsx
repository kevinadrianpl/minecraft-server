import type { NextPage } from "next";
import { useEffect } from 'react';

const Vote: NextPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div>
        <p style={{ textAlign: "center" }}>Please vote for us on the following servers:</p>
        <br />
        <ul style={{ textAlign: "center" }}>
          <li>
            <a style={{ color: "purple" }} href='https://minecraft-mp.com/server/221984/vote/'>Minecraft-MP.com</a>
          </li>
          <br />
          <li>
            <a style={{ color: "purple" }} href='https://www.planetminecraft.com/server/dxrery-networks/vote/'>PlanetMinecraft.com</a>
          </li>
          <br />
          <li>
            <a style={{ color: "purple" }} href='https://minecraftservers.org/vote/637524/'>MinecraftServers.org</a>
          </li>
          <br />
          <li>
            <a style={{ color: "purple" }} href='https://topminecraftservers.org/server/28267/'>TopMinecraftServers</a>
          </li>
          <br />
          <li>
            <a style={{ color: "purple" }} href='https://topg.org/minecraft-servers/server-535007'>TopG.org</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Vote;
