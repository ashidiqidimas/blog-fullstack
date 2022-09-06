export default function FirstPost({ photoURL, createdAt, postTitle, postBody, onClick }) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const localizedDate = new Date(createdAt).toLocaleDateString("id-ID", options)

  return (
    <div className={"flex gap-x-8 cursor-pointer"} onClick={onClick}>
      <div className={"basis-2/3"}>
        <img
          src={photoURL}
          alt=""
          className={"object-cover rounded-2xl aspect-video"}
        />
      </div>
      <div className={"basis-1/3"}>
        <div className={"flex flex-col gap-y-4"}>
          <p className={"text-lg leading-7 font-medium text-secondary-text"}>{localizedDate}</p>
          <h2 className={"text-4xl leading-10 font-medium text-white"}>{postTitle}</h2>
          <p className={"text-lg leading-7 font-medium text-secondary-text"}>
            {postBody.substring(0, 181) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
};