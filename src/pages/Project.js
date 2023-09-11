import React from "react";
import { Link } from "react-router-dom";

function Project() {
  return (
    <>
      <section class="py-5">
        <div class="container px-5 mb-5">
          <div class="text-center mb-5">
            <h1 class="display-5 fw-bolder mb-0">
              <span class="text-gradient d-inline">Projects</span>
            </h1>
          </div>
          <div class="row gx-5 justify-content-center">
            <div class="col-lg-11 col-xl-9 col-xxl-8">
              {/* <!-- Project Card 1--> */}
              <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                <div class="card-body p-0">
                  <div class="d-flex align-items-center">
                    <div class="p-5">
                      {/* <Link to={"https://propftx.dev.vinove.com/"}>
                        {" "} */}
                        <h2 class="fw-bolder">PropFTX</h2>
                      {/* </Link> */}

                      <p>
                        <ul>
                          <li>
                            Tokenization of real estate properties like
                            Commercial , Plots, Residential, Tokens are fungible
                            assets 
                          </li>
                          <li>Payments are done in native currency.</li>
                          <li>
                            People can invest in tokens based on price, Prices 
                            are based on AI. NFTS are minted  on private network
                            (Besu).
                          </li>
                          <li>
                            Technology Used : ReactJs MongoDB, NodeJs ,
                            TypeScript, Solidity, Slither , mocha{" "}
                          </li>
                          <li>
                            SmartContract deployed on the Private network
                            (Hyperledger Besu)
                          </li>
                        </ul>
                      </p>
                    </div>
                    <img class="img-fluid" src="propftx.png" alt="PropFtx" />
                  </div>
                </div>
              </div>
              {/* <!-- Project Card 2--> */}
              <div class="card overflow-hidden shadow rounded-4 border-0">
                <div class="card-body p-0">
                  <div class="d-flex align-items-center">
                    <div class="p-5">
                      <h2 class="fw-bolder">Automotive supply chain</h2>
                      <p>
                        <ul>
                          <li>
                            Led a team to design and deploy a blockchain
                            solution for tracking automotive products through
                            the supply chain.
                          </li>
                          <li>
                            Utilized smart contracts to automate quality control
                            checks and trigger alerts for deviations.
                          </li>
                          <li>
                            Improved supply chain visibility and reduced the
                            risk of counterfeit drugs.
                          </li>
                          <li>
                            Technologies Used: Ethereum(testNet),
                            Solidity,ReactJs
                          </li>
                        </ul>
                      </p>
                    </div>
                    <img
                      class="img-fluid"
                      src="https://dummyimage.com/300x400/343a40/6c757d"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Call to action section--> */}
      <section class="py-5 bg-gradient-primary-to-secondary text-white">
        <div class="container px-5 my-5">
          <div class="text-center">
            <h2 class="display-4 fw-bolder mb-4">
              Let's build something together
            </h2>
            <a
              class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
              href="contact.html"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
