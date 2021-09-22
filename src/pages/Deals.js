import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import './deals.css'

const Deals = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid mt-5 mb-4">
        <h2>Deals and Promotion</h2>
        <p>Shop Today's deals, Lighting Deals, and Limited-time discounts</p>

        <div className="row d-flex justify-content-evenly">
          <div className="col-md-2">
            <b className="text-center">Department</b>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Arts,Craffts & Sewing
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Automotive & Motorcycle
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Baby
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Baby Clothing & Accessories
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Beauty
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Books
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Boys' Fashion
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Camera & Photo
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Cell Phones & Accessories
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Computers & Accessories
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Costumes & Accessories
              </label>
            </div>
            <b className="text-center">Deal Type</b>
            <ul> 
            <li ><Link to="#" className="text-decoration-none">Deal of the Day</Link></li>
            <li><Link to="#" className="text-decoration-none">Lightning Deals</Link></li>
            <li><Link to="#" className="text-decoration-none">Savings & Sales</Link></li>
            <li><Link to="#" className="text-decoration-none">Prime Early Access Deals</Link></li>
            </ul>
            <b className="text-center">Availability</b>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
            Active
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Upcoming
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                Missed
              </label>
            </div>

            <b className="text-center">Price</b>
            <ul> 
            <li><Link to="#" className="text-decoration-none">Under $25</Link></li>
            <li><Link to="#" className="text-decoration-none">$25 to $50</Link></li>
            <li><Link to="#" className="text-decoration-none">$100 to $200</Link></li>
            <li><Link to="#" className="text-decoration-none">$200 & Above</Link></li>
            </ul>
            <b className="text-center">Discount</b>
            <ul> 
            <li><Link to="#" className="text-decoration-none">10% off or More</Link></li>
            <li><Link to="#" className="text-decoration-none">25% off or More</Link></li>
            <li><Link to="#" className="text-decoration-none">50% off or More</Link></li>
            <li><Link to="#" className="text-decoration-none">70% off or More</Link></li>
            </ul>




          </div>
          <div className="col-md-9">
            {" "}
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
                        <h5 className="card-title text-danger">$500</h5>
                        
                      </center>
                      <center>
                        <button className="btn btn-primary">
                          View Details
                        </button>
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
                        <h5 className="card-title text-danger">$600</h5>
                      </center>

                      <center>
                        <button className="btn btn-primary">
                          View Details
                        </button>
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
                        <h5 className="card-title text-danger">$700</h5>
                      </center>

                      <center>
                        <button className="btn btn-primary">
                          View Details
                        </button>
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
                        <h5 className="card-title text-danger">$900</h5>
                      </center>

                      <center>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow.lg">
                    <div className="custom-card-img">
                      <img
                        src="/images/e.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <center>
                        {" "}
                        <h5 className="card-title text-danger">$1000</h5>
                      </center>

                      <center>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow.lg">
                    <div className="custom-card-img">
                      <img
                        src="/images/f.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <center>
                        {" "}
                        <h5 className="card-title text-danger">$550</h5>
                      </center>

                      <center>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </center>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card shadow.lg">
                    <div className="custom-card-img">
                      <img
                        src="/images/g.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <center>
                        {" "}
                        <h5 className="card-title text-danger">$450</h5>
                      </center>

                      <center>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow.lg">
                    <div className="custom-card-img">
                      <img
                        src="/images/h.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <center>
                        {" "}
                        <h5 className="card-title text-danger">$580</h5>
                      </center>

                      <center>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow.lg">
                    <div className="custom-card-img">
                      <img
                        src="/images/i.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <center>
                        {" "}
                        <h5 className="card-title text-danger">$650</h5>
                      </center>

                      <center>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </center>
                    </div>
                  </div>
                </div>
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
                        <h5 className="card-title text-danger">$490</h5>
                      </center>

                      <center>
                        <button className="btn btn-primary">
                          View Details
                        </button>
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
                        <h5 className="card-title text-danger">$599</h5>
                      </center>

                      <center>
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Deals;
