import FirstPost from "../components/FirstPost";

export default function HomePage() {
  return (
    <div className={"lg:container pt-[7.5rem] px-5"}>
      <FirstPost />
      <div className={"mt-8 flex flex-wrap"}>
        <div className={"basis-1/3"}>
          a
        </div>
      </div>
    </div>
  );
};