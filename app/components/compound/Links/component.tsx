const Links = () => {
  return (
    <div className="grid grid-cols-2 gap-10 place-items-center max-w-3xl mx-auto">
      <a
        href="https://github.com/SamuelRCrider"
        target="_blank"
        className="flex justify-center items-center font-bold p-2"
      >
        <img src="/github-mark.png" alt="github" className="h-24 lg:h-32" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/samuel-crider-7b0695205/"
        className="flex justify-center items-center font-bold p-2"
      >
        <img src="/linkedin-mark.png" alt="linkedin" className="h-24 lg:h-32" />
      </a>
      <a
        target="_blank"
        href="mailto:samrobertcrider@gmail.com?subject=Your%20Subject&body=Your%20Message%20Here"
        className="col-span-2 flex justify-center items-center font-bold p-2"
      >
        <img src="/gmail-mark.png" alt="gmail" className="h-20 lg:h-28" />
      </a>
    </div>
  );
};

export default Links;
