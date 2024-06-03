const ProjectCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src="/Text-To-Audio.png" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Text to Audio</h2>
        <p>
          This app speaks text aloud and then produces an audio recording of it
          for your convenience
        </p>
        <div className="card-actions justify-end">
          <a
            className="btn btn-accent"
            href="https://text2audiobysam.netlify.app/"
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
