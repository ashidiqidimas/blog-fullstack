import FirstPost from "../components/FirstPost";
import SecondPost from "../components/SecondPost";

export default function HomePage() {
  return (
    <div className={"lg:container pt-[7.5rem] px-5"}>
      <FirstPost />
      <div className={"mt-16 flex flex-wrap"}>
        <SecondPost />
        <SecondPost />
        <SecondPost />
        <SecondPost />
        <SecondPost />

      </div>
    </div>
  );
};