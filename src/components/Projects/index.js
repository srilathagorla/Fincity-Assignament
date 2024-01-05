import './index.css'

const Projects = () => (
  <div className="bg-container">
    <h1 className="project-heading">Projects</h1>
    <div className="container1">
      <div className="con">
        <h1 className="heading">Project Name</h1>
        <p className="paragraph">
          I created this personal project in order to show how to create an
          interface in Figma using a portfolio as an example.
        </p>
        <button className="btn" type="button">
          View Project
        </button>
      </div>
      <img
        src="https://res.cloudinary.com/dbfpqkwko/image/upload/v1704427985/WhatsApp_Image_2024-01-05_at_09.39.39_a136ab80-yoga_gr8w9y.jpg"
        alt="yoga"
        className="image1"
      />
    </div>
    <div className="container1">
      <img
        src="https://res.cloudinary.com/dbfpqkwko/image/upload/v1704428003/WhatsApp_Image_2024-01-05_at_09.39.39_4a60d535-clndr_s3zvkt.jpg"
        alt="Calender"
        className="image2"
      />
      <div className="con1">
        <h1 className="heading">Project Name</h1>
        <p className="paragraph">
          What was your role, your deliverables, if the project was personal,
          freelancing.
        </p>
        <button className="btn" type="button">
          View Project
        </button>
      </div>
    </div>
    <div className="container1">
      <div className="con">
        <h1 className="heading">Project Name</h1>
        <p className="paragraph">
          You can also add in this description the type of the project, if it
          was for web, mobile, electron.
        </p>
        <button className="btn" type="button">
          View Project
        </button>
      </div>
      <img
        src="https://res.cloudinary.com/dbfpqkwko/image/upload/v1704428021/WhatsApp_Image_2024-01-05_at_09.38.36_bdc5d7be-phn_ygxfg0.jpg"
        alt="mobile"
        className="image3"
      />
    </div>
  </div>
)
export default Projects
