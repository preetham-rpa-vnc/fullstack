import React, { useState }  from "react";
import { NavLink } from "react-router-dom";

const CropDetails = ({ crop, onDelete }) => {
  const {_Slno, StateName, DistrictName , MarketName, Commodity, Variety, Grade, MinPrice, MaxPrice, ModalPrice, PriceDate } = crop;
  return (
    // <tr>
    //   <td>{student._id}</td>
    //   <td>{student.name}</td>
    //   <td>{student.age}</td>
    //   <td>{student.email}</td>

    //   <td>
    //     <NavLink to={`/students/edit/${student._id}`}>
    //       <i className="fas fa-user-edit" />
    //     </NavLink>
    //   </td>
    //   <td>
    //     <button
    //       className="btn btn-danger btn-sm"
    //       onClick={() => onDelete(student._id)}
    //     >
    //       <i className="fas fa-user-times" />
    //     </button>
    //   </td>
    // </tr>
    <div className="card bg-light">
      <h3 className="text-primary text-left">{StateName}</h3>
      <ul className="list">
        <li>
          <i className="fas fa-envelope" />
          {" " +DistrictName}
        </li>
        <li>
        <i className="fa fa-user-circle-o"/>
          {" " + MarketName}
        </li>
        <li>
        <i className="fa fa-user-circle-o"/>
          {" " + Commodity}
        </li>
        <li>
        <i className="fa fa-user-circle-o"/>
          {" " + Variety}
        </li>
        <li>
        <i className="fa fa-user-circle-o"/>
          {" " + MinPrice}
        </li>
        <li>
        <i className="fa fa-user-circle-o"/>
          {" " + Grade}
        </li>
        <li>
        <i className="fa fa-user-circle-o"/>
          {" " + MaxPrice}
        </li>
        <li>
        <i className="fa fa-user-circle-o"/>
          {" " + ModalPrice}
        </li>
        <li>
        <i className="fa fa-user-circle-o"/>
          {" " +   PriceDate}
        </li>
      
      </ul>
      <p>
        <button className="btn btn-danger btn-sm" onClick={() => onDelete(_Slno)}>
          Delete
        </button>

        <NavLink to ={`/students/Profile/${_Slno}`} className="btn btn-primary btn-sm" >
          Buy It
        </NavLink>  
      </p>
    </div>
  );

};

export default CropDetails;
