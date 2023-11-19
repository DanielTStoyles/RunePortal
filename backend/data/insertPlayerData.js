/** @format */

const insertPlayerBossData = async (playerId, playerBossData) => {
  for (const bossData of playerBossData) {
    const query =
      "INSERT INTO your_boss_data_table (player_id, boss_name, kill_count) VALUES (?, ?, ?)";
    await connection.query(query, [
      playerId,
      bossData.bossName,
      bossData.killCount,
    ]);
  }
};

export default insertPlayerBossData;
