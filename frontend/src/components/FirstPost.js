export default function FirstPost({ photoURL, createdAt, postTitle, postBody, onClick }) {
  return (
    <div className={"flex gap-x-8"} onClick={onClick}>
      <div className={"basis-2/3"}>
        <img
          src={photoURL}
          alt=""
          className={"object-cover rounded-2xl"}
        />
      </div>
      <div className={"basis-1/3"}>
        <div className={"flex flex-col gap-y-4"}>
          <p className={"text-lg leading-7 font-medium text-secondary-text"}>{createdAt}</p>
          <h2 className={"text-4xl leading-10 font-medium text-white"}>{postTitle}</h2>
          <p className={"text-lg leading-7 font-medium text-secondary-text"}>
            {postBody.substring(0, 181) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
};