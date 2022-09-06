"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Posts", [
      {
        post_id: 1,
        user_id: 1,
        post_title: "JavaScript, The Language That Powers The Web",
        post_body: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior,[12] often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.\n" +
          "\n" + "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).\n" +
          "\n" + "The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.\n" +
          "\n" + "JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js.\n" +
          "\n" + "Although Java and JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.",
        photo_URL: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 2,
        user_id: 1,
        post_title: "Execute Your JS Code in the Client with NodeJS",
        post_body: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a \"JavaScript everywhere\" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.\n" +
          "\n" + "Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).\n" +
          "\n" + "The Node.js distributed development project was previously governed by the Node.js Foundation, and has now merged with the JS Foundation to form the OpenJS Foundation, which is facilitated by the Linux Foundation's Collaborative Projects program.",
        photo_URL: "https://images.unsplash.com/photo-1561233835-f937539b95b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 3,
        user_id: 1,
        post_title: "What on Earth is V8 Engine?",
        post_body: "V8 is a free and open-source JavaScript engine developed by the Chromium Project for Google Chrome and Chromium web browsers. The project’s creator is Lars Bak. The first version of the V8 engine was released at the same time as the first version of Chrome: 2 September 2008. It has also been used on the server side, for example in Couchbase and Node.js.\n" +
          "\n" + "The V8 assembler is based on the Strongtalk assembler. On 7 December 2010, a new compiling infrastructure named Crankshaft was released, with speed improvements. In version 41 of Chrome in 2015, project TurboFan was added to provide more performance improvements with previously challenging workloads such as asm.js. Much of V8's development is strongly inspired by the Java HotSpot Virtual Machine developed by Sun Microsystems, with the newer execution pipelines being very similar to those of HotSpot's.\n" +
          "\n" + "In 2016, the Ignition interpreter was added to V8 with the design goal of reducing the memory usage on small memory Android phones in comparison with TurboFan and Crankshaft. Ignition is a register based machine and shares a similar (albeit not the exact same) design to the templating interpreter utilized by HotSpot.\n" +
          "HotSpot.",
        photo_URL: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_id: 4,
        user_id: 1,
        post_title: "Git, an Open Source VCS",
        post_body: "Git is free and open source software for distributed version control: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems).\n" +
          "\n" + "Git was originally authored by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development. Since 2005, Junio Hamano has been the core maintainer. As with most other distributed version control systems, and unlike most client–server systems, every Git directory on every computer is a full-fledged repository with complete history and full version-tracking abilities, independent of network access or a central server. Git is free and open-source software distributed under the GPL-2.0-only license.",
        photo_URL: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2376&q=80",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
