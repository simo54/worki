import React from "react";
import "./Style/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer mt-auto py-5">
        <div className="container pt-5 border-bottom">
          <div className="row">
            <div id="footerTitle" className="col-md-3 col-sm-6 col-6 mb-3 p-0">
              <h2>Worki</h2>
            </div>
            {/* <div id="footerTitle" className="col-md-3 col-sm-6 col-6 mb-3 p-0">
              <div id="fbIcon" className="container">
                <img src="./icons/sk512x512.png" width="50px" height="auto" />
              </div>
            </div> */}
            <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 offset-md-3">
              <h5 class="mb-4 font-weight-bold text-uppercase">Company</h5>
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">About</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">For investors</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 ">
              <h5 class="mb-4 font-weight-bold text-uppercase">Documents</h5>
              <ul class="list-group">
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">About</a>
                </li>
                <li class="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="#">For investors</a>
                </li>
              </ul>
            </div>

            <div class="col-md-12">
              <div class="py-4 d-flex justify-content-center align-items-center">
                <a class="mr-4" href="#">
                  Privacy & terms
                </a>
                <a href="#">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
