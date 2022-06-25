import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Article = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-9">
          <div className="card">
            <div className="card-header bg-dpg-lightgray">
            </div>
            <div className="card-body text-body px-4 bg-light">
              <div>
                <div>
                  <FontAwesomeIcon icon="check-square"/>
                  Your <FontAwesomeIcon icon="coffee"/> is hot and ready!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
      </div>
    </div>
  )
}

export default Article
