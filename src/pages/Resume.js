import React from 'react'

function Resume() {
  return (
    <div class="container px-5 my-5">
      <div class="text-center mb-5">
        <h1 class="display-5 fw-bolder mb-0">
          <span class="text-gradient d-inline">Resume</span>
        </h1>
      </div>
      <div class="row gx-5 justify-content-center">
        <div class="col-lg-11 col-xl-9 col-xxl-8">
          <section>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h2 class="text-primary fw-bolder mb-0">Experience</h2>

              <a class="btn btn-primary px-4 py-3" href="#!">
                <div class="d-inline-block bi bi-download me-2"></div>
              </a>
            </div>
            {/* <!-- Experience Card 1--> */}
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-primary fw-bolder mb-2">
                        2022 - Present
                      </div>
                      <div class="small fw-bolder">Web Developer(MERN)</div>
                      <div class="small text-muted">
                        Vinove Software & Services
                      </div>
                      <div class="small text-muted">Noida, UttarPradesh</div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                      <ul>
                        <li>
                          Developed and maintained responsive and user-friendly
                          web applications using the MERN stack.
                        </li>
                        <li>
                          Collaborated closely with UX/UI designers and product
                          managers to ensure seamless integration of design and
                          functionality.
                        </li>
                        <li>
                          Implemented RESTful APIs for data retrieval and
                          manipulation, improving application performance and
                          user experience.
                        </li>
                        <li>
                          Designed and optimized database schemas using MongoDB
                          and Mongoose, ensuring efficient data storage and
                          retrieval.
                        </li>
                        <li>
                          Integrated user authentication and authorization using
                          JWT to enhance security and protect user data.
                        </li>
                        <li>
                          Implemented state management with Redux, leading to
                          improved application performance and a better user
                          experience.
                        </li>
                        <li>
                          Conducted thorough testing with Jest and Enzyme to
                          identify and fix bugs, resulting in robust and stable
                          applications.
                        </li>
                        <li>
                          Utilized Git and GitHub for version control and
                          collaboration with team members.
                        </li>
                        <li>
                          Deployed applications to cloud platforms like Heroku
                          and AWS, ensuring high availability and scalability.
                        </li>
                        <li>
                          Regularly participated in code reviews to maintain
                          code quality and consistency across the team.
                        </li>
                        <li>
                          Stayed up-to-date with the latest web development
                          trends and technologies to ensure the use of best
                          practices.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Experience Card 2--> */}
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-primary fw-bolder mb-2">
                        2022 - Present
                      </div>
                      <div class="small fw-bolder">Blockchain Developer</div>
                      <div class="small text-muted">
                        Vinove Software & Services
                      </div>
                      <div class="small text-muted">Noida, UttarPradesh</div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus laudantium, voluptatem quis repellendus eaque sit
                      animi illo ipsam amet officiis corporis sed aliquam non
                      voluptate corrupti excepturi maxime porro fuga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Education Section--> */}
          <section>
            <h2 class="text-secondary fw-bolder mb-4">Education</h2>
            {/* <!-- Education Card 1--> */}

            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-secondary fw-bolder mb-2">
                        2018 - 2022
                      </div>
                      <div class="mb-2">
                        <div class="small fw-bolder">
                          Dr. KN MODI FOUNDATION
                        </div>
                        <div class="small text-muted">
                          Modinagar, Ghaziabad UttarPradesh, (IN)
                        </div>
                      </div>
                      <div class="fst-italic">
                        <div class="small text-muted">Graduation</div>
                        <div class="small text-muted">B.tech</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                      Completed my graduation with specelization In CSE and ,
                      scored <b> 70 % </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-secondary fw-bolder mb-2">
                        2017 - 2018
                      </div>
                      <div class="mb-2">
                        <div class="small fw-bolder">
                          Prayag Public School & College
                        </div>
                        <div class="small text-muted">
                          LalgopalGanj, Allahabad UttarPradesh, (IN)
                        </div>
                      </div>
                      <div class="fst-italic">
                        <div class="small text-muted">
                          Senior School Certificate
                        </div>
                        <div class="small text-muted">PCM</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                      Completed Senior School Certificate from Home Town ,
                      scored <b> 64 % </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Education Card 2--> */}
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-secondary fw-bolder mb-2">
                        2015 - 2016
                      </div>
                      <div class="mb-2">
                        <div class="small fw-bolder">Prayag Public School</div>
                        <div class="small text-muted">
                          LalgopalGanj, Allahabad UttarPradesh, (IN)
                        </div>
                      </div>
                      <div class="fst-italic">
                        <div class="small text-muted">
                          Secondary School Certificate
                        </div>
                        <div class="small text-muted"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                      Completed Secondary School Certificate from Home Town ,
                      scored <b> 9.2 CGPA </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Divider--> */}
          <div class="pb-5"></div>
          {/* <!-- Skills Section--> */}
          <section>
            {/* <!-- Skillset Card--> */}
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                {/* <!-- Professional skills list--> */}
                <div class="mb-5">
                  <div class="d-flex align-items-center mb-4">
                    <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i class="bi bi-tools"></i>
                    </div>
                    <h3 class="fw-bolder mb-0">
                      <span class="text-gradient d-inline">
                        Professional Skills
                      </span>
                    </h3>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3 mb-4">
                    {/* <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        SEO/SEM Marketing
                      </div>
                    </div> */}
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Dapps(Ethereum)
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Web Development(MERN)
                      </div>
                    </div>
                  </div>
                  {/* <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Network Security
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Adobe Software Suite
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        User Interface Design
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* <!-- Languages list--> */}
                <div class="mb-0">
                  <div class="d-flex align-items-center mb-4">
                    <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                      <i class="bi bi-code-slash"></i>
                    </div>
                    <h3 class="fw-bolder mb-0">
                      <span class="text-gradient d-inline">Languages</span>
                    </h3>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3 mb-4">
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        HTML
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        CSS
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        JavaScript
                      </div>
                    </div>
                  </div>
                  <div class="row row-cols-1 row-cols-md-3">
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Solidity
                      </div>
                    </div>
                    <div class="col mb-4 mb-md-0">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Typescript
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Node.js
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                        Java
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Resume