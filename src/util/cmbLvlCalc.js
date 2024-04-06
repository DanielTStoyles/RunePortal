/** @format */

const calculateCombatLevel = (playerSkillsData) => {
  const { skills } = playerSkillsData;
  const attack = skills[1].level;
  const strength = skills[2].level;
  const defence = skills[3].level;
  const hitpoints = skills[4].level;
  const ranged = skills[5].level;
  const prayer = skills[6].level;
  const magic = skills[7].level;

  const base = 0.25 * (defence + hitpoints + Math.floor(prayer / 2));
  const melee = 0.325 * (attack + strength);
  const range = 0.325 * (2 * ranged);
  const mage = 0.325 * (2 * magic);
  return Math.floor(base + Math.max(melee, range, mage));
};

export default calculateCombatLevel;
