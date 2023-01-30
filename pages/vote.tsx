import type { NextPage } from "next";

const Vote: NextPage = () => {
  return (
    <>
      <p>Please vote for our server at the following links:</p>
      <ul style={{ paddingLeft: "20px" }}>
        <li style={{ marginBottom: "10px" }}>
          <a href='https://minecraft-mp.com/server/221984/vote/'>Minecraft-MP.com</a>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <a href='https://www.planetminecraft.com/server/dxrery-networks/vote/'>PlanetMinecraft.com</a>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <a href='https://minecraftservers.org/vote/637524/'>MinecraftServers.org</a>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <a href='https://topminecraftservers.org/server/28267/'>TopMinecraftServers</a>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <a href='https://topg.org/minecraft-servers/server-535007'>TopG.org</a>
        </li>
      </ul>
    </>
  );
};

export default Vote;
