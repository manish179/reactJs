import React from "react";
import './card.css'

const Card = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card shadow.lg">
              <div className="custom-card-img">
                <img
                  src="/images/a.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <center>
                  {" "}
                  <h5 className="card-title">Nature</h5>
                </center>
                <center>
                  <button className="btn btn-primary">View Details</button>
                </center>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow.lg">
              <div className="custom-card-img">

              <img
                src="/images/b.jpg"
                className="card-img-top"
                alt="..."
              />
              </div>

              <div className="card-body">
                <center>
                  {" "}
                  <h5 className="card-title">Wonderlust</h5>
                </center>

                <center>
                  <button className="btn btn-primary">View Details</button>
                </center>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow.lg">
              <div className="custom-card-img">

              <img
                src="/images/c.jpg"
                className="card-img-top"
                alt="..."
              />
              </div>

              <div className="card-body">
                <center>
                  {" "}
                  <h5 className="card-title">Road Trip</h5>
                </center>

                <center>
                  <button className="btn btn-primary">View Details</button>
                </center>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow.lg">
              <div className="custom-card-img">

              <img
                src="/images/d.jpg"
                className="card-img-top"
                alt="..."
              />
              </div>
              <div className="card-body">
                <center>
                  {" "}
                  <h5 className="card-title">Voyage</h5>
                </center>

                <center>
                  <button className="btn btn-primary">View Details</button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
