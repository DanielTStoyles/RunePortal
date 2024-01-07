/** @format */

const detectChanges = (existingData, newData) => {
  const changes = [];
  newData.skills.forEach((newSkillData) => {
    const oldSkillData = existingData.skills.find(
      (s) => s.skill === newSkillData.skill
    );

    if (oldSkillData) {
      if (oldSkillData.level !== newSkillData.level) {
        changes.push({
          type: "skill",
          detail: "level",
          skill: newSkillData.skill,
          oldValue: oldSkillData.level,
          newValue: newSkillData.level,
        });
      }
      if (oldSkillData.experience !== newSkillData.experience) {
        changes.push({
          type: "skill",
          detail: "experience",
          skill: newSkillData.skill,
          oldValue: oldSkillData.experience,
          newValue: newSkillData.experience,
        });
      }
      if (oldSkillData.rank !== newSkillData.rank) {
        changes.push({
          type: "skill",
          detail: "rank",
          skill: newSkillData.skill,
          oldValue: oldSkillData.rank,
          newValue: newSkillData.rank,
        });
      }
    }
  });

  newData.bosses.forEach((newBossData) => {
    const oldBossData = existingData.bosses.find(
      (b) => b.boss === newBossData.boss
    );

    if (oldBossData) {
      if (oldBossData.killCount !== newBossData.killCount) {
        changes.push({
          type: "boss",
          detail: "killCount",
          boss: newBossData.boss,
          oldValue: oldBossData.killCount,
          newValue: newBossData.killCount,
        });
      }
      if (oldBossData.rank !== newBossData.rank) {
        changes.push({
          type: "boss",
          detail: "rank",
          boss: newBossData.boss,
          oldValue: oldBossData.rank,
          newValue: newBossData.rank,
        });
      }
    }
  });

  newData.clueScrolls.forEach((newClueScrollData) => {
    const oldClueScrollData = existingData.clueScrolls.find(
      (cs) => cs.scroll === newClueScrollData.scroll
    );

    if (oldClueScrollData) {
      if (
        oldClueScrollData.completionCount !== newClueScrollData.completionCount
      ) {
        changes.push({
          type: "clueScroll",
          detail: "completionCount",
          scroll: newClueScrollData.scroll,
          oldValue: oldClueScrollData.completionCount,
          newValue: newClueScrollData.completionCount,
        });
      }
      if (oldClueScrollData.rank !== newClueScrollData.rank) {
        changes.push({
          type: "clueScroll",
          detail: "rank",
          scroll: newClueScrollData.scroll,
          oldValue: oldClueScrollData.rank,
          newValue: newClueScrollData.rank,
        });
      }
    }
  });

  newData.miniGames.forEach((newMiniGameData) => {
    const oldMiniGameData = existingData.miniGames.find(
      (mg) => mg.game === newMiniGameData.game
    );

    if (oldMiniGameData) {
      if (oldMiniGameData.score !== newMiniGameData.score) {
        changes.push({
          type: "miniGame",
          detail: "score",
          game: newMiniGameData.game,
          oldValue: oldMiniGameData.score,
          newValue: newMiniGameData.score,
        });
      }
      if (oldMiniGameData.rank !== newMiniGameData.rank) {
        changes.push({
          type: "miniGame",
          detail: "rank",
          game: newMiniGameData.game,
          oldValue: oldMiniGameData.rank,
          newValue: newMiniGameData.rank,
        });
      }
    }
  });

  return changes;
};

export default detectChanges;
