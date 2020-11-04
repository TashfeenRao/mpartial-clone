import React from "react";
import { Button } from "react-bootstrap";
import "../../css/Contact.css";

export default function ContactFrom() {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control contact__input "
                autocomplete="off"
              />
              <label>Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control contact__input "
                autocomplete="off"
              />
              <label>Email address</label>
            </div>

            <div className="form-group">
              <input
                type="cell"
                className="form-control contact__input "
                autocomplete="off"
              />
              <label>cell</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <textarea
                className="form-control contact__input "
                rows="7"
                autocomplete="off"
              />
              <label>Write Your Message</label>
            </div>
          </div>

        <div className="col-md-12 text-center mt-4">
        <Button className="contact__submit">Submit</Button>
        </div>

        </div>
      </form>
    </div>
  );
}
