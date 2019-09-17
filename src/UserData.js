import React from "react";

export default function UserData(props) {
  return (
    <div className="col-sm-4">
      <div className="card m-1">
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">Age : {props.data.age}</p>
          <p className="card-text">Gender : {props.data.gender}</p>
          <p className="card-text">Email : {props.data.email}</p>
          <p className="card-text">Phone No : {props.data.phoneNo}</p>
        </div>
      </div>
    </div>
  );
}
