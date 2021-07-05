import React from "react";

function Item(props) {
  const { image, name, description, url, repoLink, techUsed } = props.props;
  const styling = {
    width: "25rem",
    marginBottom: "10px",
    marginRight: "10px",
    marginTop: "15px",
    backgroundColor: "white",
    opacity: "0.8",
  };

  // console.log(image);
  return (
    <div className="col-12 item" style={styling}>
      <div className="image" style={{ width: "100%", height: "220px" }}>
        <img
          style={{
            width: "inherit",
            height: "inherit",
            border: "solid lightgrey",
          }}
          src={window.location.origin + image}
          className="card-img-top"
          alt="project screenshot"
        />
      </div>

      <div className="card-body">
        <div className="card-text">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <br></br>
          <ul className="card-title">
            <span
              style={{
                fontSize: "19px",
                fontWeight: "bold",
              }}
            >
              Technologies Used:
            </span>
            {techUsed.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
        <br></br>
        <div className="buttons">
          <a href={url} target="_blank" className="btn btn-success btn-sm">
            Try it!
          </a>
          <a href={repoLink} target="_blank" className="btn btn-primary btn-sm">
            Go to Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default Item;
