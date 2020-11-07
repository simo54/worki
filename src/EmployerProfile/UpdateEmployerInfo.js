// This modal component will update the employer basic info 
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import apiUrl from "../config";
import axios from "axios";

export default function UpdatePersonalInfo(props) {
  const [show, setShow] = useState(false);
  const [companyname, setCompanyname] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [middlename, setMiddlename] = useState();
  const [email, setEmail] = useState();
  //   const [prefixNumber, setPrefixNumber] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  // const [companysize, setCompanysize] = useState();
  const [aboutus, setAboutus] = useState();
  const [nameLogo, setNameLogo] = useState();
  const [fileLogo, setFileLogo] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function that will update the employer info
  const updateInfo = () => {
    const id = props.data;
    // const mobile = `${prefixNumber + mobileNoPrefix}`;
    // Is it possible also to update the profile picture
    const dataLogo = new FormData();
    dataLogo.append("name", nameLogo);
    dataLogo.append("file", fileLogo);
    const myParam = {
      companyname: companyname,
      firstname: firstname,
      lastname: lastname,
      middlename: middlename,
      email: email,
      mobile: mobile,
      address: address,
      city: city,
      zip: zip,
      country: country,
      aboutus: aboutus,
    };
    // Filtering empty values and keep only fields not null in order to not overwrite account details with empty value
    Object.keys(myParam).forEach(
      (key) =>
        (myParam[key] === null || myParam[key] === "") && delete myParam[key]
    );
    // Updating data
    axios.put(`${apiUrl}employer/${id}/updateinfo`, myParam);

    // Updating profile picture
    if (fileLogo) {
      axios
        .put(`${apiUrl}employer/${id}/logo`, dataLogo)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    // Reloading page in order to see updated profile
    window.location.reload();
  };

  return (
    <>
    {/* Settings "Button" using a gear svg */}
      <span id="setting">
        <a onClick={handleShow}>
          <svg
            width="3em"
            height="1.9em"
            viewBox="0 0 16 16"
            className="bi bi-gear-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"
            />
          </svg>
        </a>
      </span>
          {/* Settings "Button" using a gear svg */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Settings
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col">
            <form>
              <div className="form-group">
                <label>
                  <h5>Company Name</h5>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setCompanyname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>
                  <h5>First Name</h5>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>
                    <h5>Last Name</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>
                    <h5>Middle Name</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setMiddlename(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-8">
                  <label>
                    <h5>Email</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>
                    <h5>Mobile</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>
                  <h5>Address</h5>
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-5">
                  <label>
                    <h5>City</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>
                    <h5>Country</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>
                    <h5>Zip</h5>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>
                  <h5>About us</h5>
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  rows="2"
                  onChange={(e) => setAboutus(e.target.value)}
                />
              </div>
              <form encType="multipart/form-data">
                <h3>Do you want to upload a logo of your company?</h3>
                <div className="d-flex justify-content-around">
                  {/* Hiding input for style purpouse */}
                  <input
                    id="check1"
                    onChange={(e) => {
                      const { value } = e.target;
                      setNameLogo(value);
                    }}
                    className="form-control-file w-25"
                  />
                  <input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setFileLogo(file);
                    }}
                    className="form-control-file"
                  />
                </div>
              </form>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateInfo()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
