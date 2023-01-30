import type { NextPage } from "next";

const Vote: NextPage = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
      flexDirection: 'column',
      textAlign: 'center'
    }}>
      <p>Cast your vote for the server:</p>
      <br />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <a style={{ color: 'purple' }} href='https://minecraft-mp.com/server/221984/vote/'>Minecraft-MP.com</a>
        </li>
        <li>
          <a style={{ color: 'purple' }} href='https://www.planetminecraft.com/server/dxrery-networks/vote/'>PlanetMinecraft.com</a>
        </li>
        <li>
          <a style={{ color: 'purple' }} href='https://minecraftservers.org/vote/637524/'>MinecraftServers.org</a>
        </li>
        <li>
          <a style={{ color: 'purple' }} href='https://topminecraftservers.org/server/28267/'>TopMinecraftServers</a>
        </li>
        <li>
          <a style={{ color: 'purple' }} href='https://topg.org/minecraft-servers/server-535007'>TopG.org</a>
        </li>
      </ul>
    </div>
  );
};

export default Vote;
