import type { NextPage } from "next";

const Vote: NextPage = () => {
  return (
    <ul style={{ listStyle: "none", padding: 0, display: "flex", justifyContent: "space-around" }}>
      <li style={{ width: "20%", textAlign: "center", padding: "20px 0" }}>
        <a href='https://minecraft-mp.com/server/221984/vote/'>Minecraft-MP.com</a>
      </li>
      <li style={{ width: "20%", textAlign: "center", padding: "20px 0" }}>
        <a href='https://www.planetminecraft.com/server/dxrery-networks/vote/'>PlanetMinecraft.com</a>
      </li>
      <li style={{ width: "20%", textAlign: "center", padding: "20px 0" }}>
        <a href='https://minecraftservers.org/vote/637524/'>MinecraftServers.org</a>
      </li>
      <li style={{ width: "20%", textAlign: "center", padding: "20px 0" }}>
        <a href='https://topminecraftservers.org/server/28267/'>TopMinecraftServers</a>
      </li>
      <li style={{ width: "20%", textAlign: "center", padding: "20px 0" }}>
        <a href='https://topg.org/minecraft-servers/server-535007'>TopG.org</a>
      </li>
    </ul>
  );
};

export default Vote;
