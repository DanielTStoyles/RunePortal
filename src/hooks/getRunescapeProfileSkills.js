/** @format */

const getRunescapeProfile = async (rsn) => {
  try {
    // console.log(rsn, "RSN log");
    const response = await fetch(`/api/playerStats/${rsn}`);
    const data = await response.text();
    // console.log(data, "data log line 8 runescapeprofile");

    if (!response.ok) {
      throw new Error(`Error fetching player data: ${response.statusText}`);
    }

    const dataLines = data.trim().split("\n");

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

    const clueScrolls = [
      "Clue Scrolls (all)",
      "Clue Scrolls (beginner)",
      "Clue Scrolls (easy)",
      "Clue Scrolls (medium)",
      "Clue Scrolls (hard)",
      "Clue Scrolls (elite)",
      "Clue Scrolls (master)",
    ];

    const miniGames = [
      "Rifts closed",
      "League Points ",
      "Deadman Points ",
      "Bounty Hunter - Hunter ",
      "Bounty Hunter - Rogue ",
      "Bounty Hunter (Legacy) - Hunter ",
      "Bounty Hunter (Legacy) - Rogue ",
      "Soul Wars Zeal",
    ];

    const bosses = [
      "Abyssal Sire",
      "Alchemical Hydra",
      "Artio",
      "Barrows Chests",
      "Bryophyta",
      "Callisto",
      "Cal'varion",
      "Cerberus",
      "Chambers of Xeric",
      "Chambers of Xeric: Challenge Mode",
      "Chaos Elemental",
      "Chaos Fanatic",
      "Commander Zilyana",
      "Corporeal Beast",
      "Crazy Archaeologist",
      " Dagannoth Prime",
      "Dagannoth Rex ",
      " Dagannoth Supreme",
      "Deranged Archaeologist ",
      " Duke Sucellus",
      "General Graardor ",
      " Giant Mole",
      "Grotesque Guardians ",
      "Hespori ",
      "Kalphite Queen ",
      "King Black Dragon ",
      "Kraken ",
      "Kree'Arra ",
      "K'ril Tsutsaroth ",
      "Mimic ",
      "Nex ",
      "Nightmare ",
      "Phosani's Nightmare ",
      "Obor ",
      "Phantom Muspah ",
      "Sarachnis ",
      "Scorpia ",
      "Skotizo ",
      "Spindel ",
      "Tempoross ",
      "The Gauntlet ",
      "The Corrupted Gauntlet ",
      "The Leviathan ",
      "The Whisperer ",
      "Theatre of Blood ",
      "Theatre of Blood: Hard Mode ",
      "Thermonuclear Smoke Devil ",
      "Tombs of Amascut ",
      "Tombs of Amascut: Expert Mode ",
      "TzKal-Zuk ",
      "TzTok-Jad ",
      "Vardorvis ",
      "Venenatis ",
      "Vet'ion ",
      "Vorkath ",
      "Wintertodt ",
      "Zalcano ",
      "Zulrah ",
    ];

    const playerSkills = dataLines
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

    const playerBossData = dataLines.slice(37, 37 + bosses.length);

    const playerClueScrolls = dataLines.slice(30, 30 + clueScrolls.length);

    const playerMiniGames = [
      ...dataLines.slice(24, 29),
      ...dataLines.slice(37, 40),
    ];

    // console.log(
    //   playerBossData,
    //   playerClueScrolls,
    //   playerSkills,
    //   playerMiniGames
    // );

    return {
      playerSkills,
      playerBossData,
      playerClueScrolls,
      playerMiniGames,
    };
  } catch (error) {
    console.error(
      `Error fetching player data line 150 in getRunescapeProfile: ${error.message}`
    );
    return null;
  }
};

export default getRunescapeProfile;
