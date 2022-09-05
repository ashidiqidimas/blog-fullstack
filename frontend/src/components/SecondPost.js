export default function SecondPost() {
  return (
    <div className={"flex flex-col basis-1/3 gap-y-4 px-6 py-8"}>
      <img
        src={"https://images.unsplash.com/photo-1639066648921-82d4500abf1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
        alt=""
        className={"aspect-video object-cover rounded-xl"}
      />
      <p className={"text-lg leading-7 font-medium text-secondary-text"}>5 September 2022</p>
      <h2 className={"text-2xl leading-8 font-medium text-white"}>JavaScript, The Language That
        Powers The Web</h2>
      <p className={"text-lg leading-7 font-medium text-secondary-text"}>
        {"JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript".substring(0, 81) + "..."}
      </p>
    </div>
  );
};
