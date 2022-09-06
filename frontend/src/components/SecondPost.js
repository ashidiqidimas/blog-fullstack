export default function SecondPost({ photoURL, createdAt, postTitle, postBody, onClick, onEdit }) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const localizedDate = new Date(createdAt).toLocaleDateString("id-ID", options);

  return (
    <div
      className={"flex flex-col basis-1/3 gap-y-4 pr-16 py-8 cursor-pointer"}
      onClick={onClick}
      onEdit={onEdit}>
      <img
        src={photoURL}
        alt=""
        className={"aspect-video object-cover rounded-xl"}
      />
      <p className={"text-lg leading-7 font-medium text-secondary-text"}>{localizedDate}</p>
      <h2 className={"text-2xl leading-8 font-medium text-white"}>{postTitle}</h2>
      <p className={"text-lg leading-7 font-medium text-secondary-text"}>
        {postBody.substring(0, 81) + "..."}
      </p>
      {
        onEdit ?
          <div className={"flex justify-end"}>
            <button
              className={"flex gap-x-2 px-4 py-2 border border-sky-600 rounded-lg leading-6 font-medium text-sky-600"}>
              <img src="/edit-post-icon.png" alt="" className={"h-6"} />
              Edit
            </button>
          </div>
          :
          ""
      }
    </div>
  );
};
