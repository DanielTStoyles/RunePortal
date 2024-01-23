/** @format */
import CurrentUsername from "../CurrentUsername";

const ProfileNameDisplayComp = () => {
  return (
    <div className="w-[349px] h-20 justify-start items-start gap-6 inline-flex">
      <img
        className="w-20 h-20 relative rounded-[47px]"
        src="https://via.placeholder.com/80x80"
      />
      <div className="flex-col justify-start items-start gap-4 inline-flex">
        <div className="relative">
          <div className="left-0 top-0 absolute text-zinc-200 text-4xl font-bold font-['Arial']">
            <CurrentUsername />
          </div>
          <div className="w-8 h-8 px-[5.82px] py-[11.64px] left-[213px] top-[5px] absolute rounded-md border-2 border-purple-900 flex-col justify-center items-center gap-[7.27px] inline-flex" />
        </div>
        <div className="self-stretch justify-start items-center gap-2 inline-flex">
          <div className="h-5 flex-col justify-center items-center gap-2.5 inline-flex">
            <img
              className="w-5 h-[19.33px]"
              src="https://via.placeholder.com/20x19"
            />
          </div>
          <div className="text-zinc-200 text-xl font-normal font-['Arial']">
            Ironman
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNameDisplayComp;
