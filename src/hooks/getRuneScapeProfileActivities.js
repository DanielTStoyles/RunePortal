/** @format */

const getRunescapeProfileActivites = async (rsn) => {
  try {
    const response = await fetch(`/api/playerStats/${rsn}`);
    const data = await response.text();

    if (!response.ok) {
      throw new Error(`Error fetching player data: ${response.statusText}`);
    }

    const activities = [
      "League Points ",
      "Deadman Points ",
      "Bounty Hunter - Hunter ",
      "Bounty Hunter - Rogue ",
      "Bounty Hunter (Legacy) - Hunter ",
      "Bounty Hunter (Legacy) - Rogue ",
      "Clue Scrolls (all)",
      "Clue Scrolls (beginner)",
      "Clue Scrolls (easy)",
      "Clue Scrolls (medium)",
      "Clue Scrolls (hard)",
      "Clue Scrolls (elite)",
      "Clue Scrolls (master)",
      "Soul Wars Zeal",
      "Rifts closed",
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

    const activitiesKillCount = data
      .trim()
      .split("\n")
      .slice(0, activities.length)
      .map((line, index) => {
        const [rank, level] = line
          .split(",")
          .map((value) => parseInt(value.toString().trim(), 10));

        return {
          activity: activities[index],
          rank,
          level,
        };
      });

    console.log("Parsed profile activities:", activitiesKillCount);

    return activitiesKillCount;
  } catch (error) {
    console.error(`Error fetching player data: ${error.message}`);
    return null;
  }
};

export default getRunescapeProfileActivites;
