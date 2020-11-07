// Footer component that will be displayed in every page, linkable images are redirecting only to our page
import React from "react";
import "./Style/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer className="footer mt-auto py-5">
        <div className="container pt-5 border-top border-bottom">
          <div className="row">
            <div id="footerTitle" className="col-md-3 col-sm-6 col-6 mb-3 p-0">
              <h2>
                <span>Worki</span>
              </h2>
            </div>
            <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 offset-md-3">
              <h5 className="mb-4 font-weight-bold text-uppercase">Company</h5>
              <ul className="list-group">
                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="http://localhost:3000/">About</a>
                </li>
                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="http://localhost:3000/">For investors</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 ">
              <h5 className="mb-4 font-weight-bold text-uppercase">Press</h5>
              <ul className="list-group">
                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="http://localhost:3000/">Partners</a>
                </li>
                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                  <a href="http://localhost:3000/">Careers</a>
                </li>
              </ul>
            </div>

            <div className="col-md-12">
              <div className="py-4 d-flex justify-content-center align-items-center">
                <a className="mr-4" href="http://localhost:3000/">
                  Privacy & terms
                </a>
                <a href="http://localhost:3000/">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
        <div id="credits" className="d-flex justify-content-center pb-0 mt-5">
          <a href="https://stories.freepik.com/job" className="mr-2">
            Illustration by Freepik Stories
          </a>
          Icons made by
          <a
            href="https://www.flaticon.com/authors/pixel-buddha"
            title="Pixel Buddha"
            className="mr-2"
          >
            Pixel Buddha
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon" className="mr-2">
            www.flaticon.com
          </a>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
            className="mr-2"
          >
            Pixel perfect
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon" className="mr-2">
            www.flaticon.com
          </a>
          Icons made by{" "}
          <a href="http://www.freepik.com/" title="Freepik" className="mr-2">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon" className="mr-2">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </div>
  );
}
