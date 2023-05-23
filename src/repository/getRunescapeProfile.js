const getRunescapeProfile = async (rsn) => {
    try {
      const response = await fetch(`/api/playerStats/${rsn}`);
      const data = await response.text();
  
      if (!response.ok) {
        throw new Error(`Error fetching player data: ${response.statusText}`);
      }
  
      const skills = [
        "Overall",
        "Attack",
        "Defence",
        "Strength",
        "Hitpoints",
        "Ranged",
        "Prayer",
        "Magic",
        "Cooking",
        "Woodcutting",
        "Fletching",
        "Fishing",
        "Firemaking",
        "Crafting",
        "Smithing",
        "Mining",
        "Herblore",
        "Agility",
        "Thieving",
        "Slayer",
        "Farming",
        "Runecraft",
        "Hunter",
        "Construction",
      ];
  
      const playerStats = data
        .trim()
        .split("\n")
        .slice(0, skills.length)
        .map((line, index) => {
          const [rank, level, experience] = line
            .split(",")
            .map((value) => parseInt(value.toString().trim(), 10));
  
          return {
            skill: skills[index],
            rank,
            level,
            experience,
          };
        });
  
      console.log("Parsed playerStats:", playerStats);
  
      return playerStats;
    } catch (error) {
      console.error(`Error fetching player data: ${error.message}`);
      return null;
    }
};

export default getRunescapeProfile;