import React, { Fragment, Component } from "react";
import CropDetails from "./CropDetails";
import axios from "axios";
import { NavLink } from "react-router-dom";

export class Crops extends Component {
  state = {
    CropDetails: []
  };
  componentWillMount() {
    this.getCrops();
  }
  getCrops = async () => {
    try {
      const res =  axios.get(`${process.env.REACT_APP_API_URI}/getallcrops`);
      this.setState({ cropDetails: res.data });
    } catch (error) {
      console.error(error.message);
    }
  };
  onDelete = async Slno => {
    try {
       axios.delete(`/api/crops/${Slno}`);
      this.getCrops();
    } catch (err) {
      console.log(err);
    }
  };
  filterCrops = text => {
    const filtered = this.state.crops.filter(crop => {
      const regex = new RegExp(`${text}`, "gi");
      return crop.commodity.match(regex) || crop.StateName.match(regex);
    });
    this.setState({ cropDetails: filtered });
  };
  onChange = e => {
    if (this.refs.text.value !== "") {
      this.filterCrops(e.target.value);
    } else {
      this.getCrops();
    }
  };

  render() {
    const { crops } = this.state;

    return (
      <div>
        <h1 className="text-primary text-center">Crops Details</h1>
        {crops.length > 0 ? (
          <Fragment>
            {/* <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                {students.map(student => (
                  <StudentItem
                    key={student._id}
                    student={student}
                    onDelete={this.onDelete}
                  />
                ))}
              </tbody>
              
            </table> */}
            <form>
              <input
                ref="text"
                type="text"
                placeholder="Filter Students"
                onChange={this.onChange}
              />
            </form>
            <div className="grid-3">
              {cropDetails.map(cropDetails => (
                <CropDetails
                  key={CropDetails.Slno}
                  CropDetails={cropDetails}
                  onDelete={this.onDelete}
                />
              ))}
            </div>
            <br />
            {/* <NavLink to="/students/add" className="btn btn-primary btn-block">
              <i className="fas fa-user-plus" />
              Add student
            </NavLink> */}
            <br />
            <br />
          </Fragment>
        ) : (
          <Fragment>
            <p className="lead">No crops records..!! Add one</p>
            {/* <NavLink to="/students/add" className="btn btn-primary btn-block">
              <i className="fas fa-user-plus" />
              Add student
            </NavLink> */}
          </Fragment>
        )}
      </div>
    );
  }
}

export default Crops;
