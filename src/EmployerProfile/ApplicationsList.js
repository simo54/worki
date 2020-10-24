import React from "react";

// We are taking this "model" in order to display the list of people that applied to a certain job
export default function ApplicationsList() {
  return (
    <div>
      <div className="container">
        <div className="list-group">
          <a href="#" className="list-group-item list-group-item-action">
            Cras justo odio
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Dapibus ac facilisis in
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            Morbi leo risus
          </a>
          <a href="#" clasclassNames="list-group-item list-group-item-action">
            Porta ac consectetur ac
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action disabled"
            tabindex="-1"
            aria-disabled="true"
          >
            Vestibulum at eros
          </a>
        </div>
      </div>
    </div>
  );
}
