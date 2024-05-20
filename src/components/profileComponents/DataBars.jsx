/** @format */

import overall from "../../images/overall.png";
import calculateCombatLevel from "../../util/cmbLvlCalc";

export const CombatLevelData = ({ playerSkillsData }) => {
  const combatLevel = calculateCombatLevel(playerSkillsData);

  return (
    <div className="bg-[#1E1B23] rounded-lg border border-progress-brd justify-center items-center gap-2 inline-flex sm:w-[247px] px-2 ">
      <div className="justify-center items-center flex">
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect x="0.833496" width="20" height="20" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_382_8493" transform="scale(0.0526316)" />
            </pattern>
            <image
              id="image0_382_8493"
              width="19"
              height="19"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAk1JREFUOE+NlF9IU1Ecx79HhQida01nsEYux0ZKoSXocqWT3hIDKaIe0kcfBB9GPRr0EFT6UPgQURASPZQESb1lYrgGYQg1iIn2B5pbs2X7IxXZTtxzd869526r3ad7f/f8Pnx/39/v/AhAKKSHEvn7X19yLlFg2Y1foJWfWZaptglAOUBCM+lVlkP+7EaNZRsYTAmuJ7ZQb6sqE6iBeJ4iQihLJD8y0P+BGujD6jpqTBbYrI1cGRPKSlWA2cwGnE31JRRqoFBkBS5LowAp1ujMJnRlKYWv5gh+vwuj9Ug3qiqj2F59NO8hoT82XyAWa0A0EoTd04VcZhdcbWbhsaFzKnDtWxjkZ4QlWE1JmBsOI/XlJZIZKxYXHqHdN1AAYvUVNl4Gnh0eQ3jxAQMFZ66jq3+0KKgETPVQUejvbxGgmakr6BwaRl3KI5WmF1NyQB0OB3396jKymx24NzmG1p4zaN7jx6nTbiwtx4vmlYARmohNCZC9xQenbQCDIx3odO3Ew7k3RQc7D5OvhQKKx924OX4Rh3r6JFDgzm3sq95iTTFeQwH7fs0Ks8+N9N4JfFqrwMSlAA54z6HN0ycUNbf3Ynb6PsZnnzBg7fsAUgvL2HE+yZRKc8aBQ1crsL/7OA46B9F7wi7m7NaNeaRzQbydf4q7F3ISqEg3CeXAucS0DsQLIvT54yj8tpMFIAOM0MljBCPPKDiQeEMGowmlIa8A8fN8ywjP5B+qQu6FZrQxrgnIeyYH9Inqu3638a7LMS6EraDCpPJ3rXpSZfwF0xspI0bHR7YAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      </div>
      <div className="text-zinc-500 text-xl font-normal font-['Arial']">
        Combat Level
      </div>
      <div className="text-zinc-200 text-xl font-normal font-['Arial']">
        {combatLevel}
      </div>
    </div>
  );
};

export const OverallXpData = ({ playerSkillsData }) => {
  const overallXp =
    playerSkillsData?.skills?.[0]?.xp?.toLocaleString() || "N/A";

  return (
    <div
      className="flex bg-[#1E1B23] rounded-lg border border-progress-brd justify-center items-center gap-2 "
      style={{
        minWidth: "300px",
        width: "auto",

      }}
    >
      <div className="flex justify-center items-center gap-2.5 ">
        <img src={overall} alt="overall xp icon" className="w-19 h-19" />
      </div>
      <div className="text-zinc-500 text-xl font-normal font-['Arial'] text-nowrap">
        Overall Exp.
      </div>
      <div className="text-zinc-200 text-xl font-normal font-['Arial']">
        {overallXp}
      </div>
    </div>
  );
};

export const OverallLvlData = ({ playerSkillsData }) => {
  const overallLevel = playerSkillsData?.skills?.[0]?.level || "N/A";

  return (
    <div
      className="bg-[#1E1B23] rounded-lg border border-progress-brd justify-center items-center gap-2 inline-flex sm:w-[247px] sm:py-2"
      style={{ paddingLeft: "10px", paddingRight: "10px" }}
    >
      <div className="justify-center items-center gap-2.5 flex">
        <img src={overall} alt="overall level icon" className="w-19 h-19" />
      </div>
      <div className="text-zinc-500 text-xl font-normal font-['Arial']">
        Overall Lvl.
      </div>
      <div className="text-zinc-200 text-xl font-normal font-['Arial']">
        {overallLevel}
      </div>
    </div>
  );
};
