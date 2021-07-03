import projects from "../../Utils/GlobalStorage";
import Item from "../Item";

function Portfolio() {
  return (
    <div className="container portfolio">
      <div className="portfolio-header">
        <h2>My Work</h2>
      </div>
      <div className="row">
        {projects.map((el) => {
          return <Item props={el} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
