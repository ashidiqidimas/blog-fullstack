export default function FirstPost() {
  return (
    <div className={"flex gap-x-8"}>
      <div className={"basis-2/3"}>
        <img
          src={"https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}
          alt=""
          className={"object-cover rounded-2xl"}
        />
      </div>
      <div className={"basis-1/3"}>
        <div className={"flex flex-col gap-y-4"}>
          <p className={"text-lg leading-7 font-medium text-secondary-text"}>5 September 2022</p>
          <h2 className={"text-4xl leading-10 font-medium text-white"}>JavaScript, The Language That Powers The Web</h2>
          <p className={"text-lg leading-7 font-medium text-secondary-text"}>
            {"JavaScript, often abbreviated JS, is a programming language that is one of the core " +
              "technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of " +
              "websites use JavaScript".substring(0, 181) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
};