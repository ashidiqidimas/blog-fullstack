export default function DetailPostPage() {
  const post = {
    post_id: 1,
    user_id: 1,
    post_title: "JavaScript, The Language That Powers The Web",
    post_body: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior,[12] often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.\n" +
      "\n" + "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).\n" +
      "\n" + "The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.\n" +
      "\n" + "JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js.\n" +
      "\n" + "Although Java and JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.",
    photo_URL: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
    createdAt: new Date()
  }

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const localizedDate = new Date(post.createdAt).toLocaleDateString("id-ID", options)

  return (
    <div className={"lg:container pt-14 px-5"}>
      <div className={"mt-6"}>
        <p className={"text-right text-secondary-text text-lg leading-7 font-medium"}>{localizedDate}</p>
      </div>
      <article className={"mt-4"}>
        <h1 className={"text-5xl leading-none font-semibold text-white w-3/5"}>{post.post_title}</h1>
        <img src={post.photo_URL} alt="" className={"mt-8 rounded-xl aspect-video"} />
        <p className={"mt-8 text-primary-text"} style={{whiteSpace: "pre-line"}}>
          {post.post_body}
        </p>
      </article>
    </div>
  );
};