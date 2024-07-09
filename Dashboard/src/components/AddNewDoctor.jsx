/* eslint-disable no-unused-vars */

import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const AddNewDoctor = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState("");
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const navigateTo = useNavigate();

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleAddNewDoctor = async (e) => {
    e.preventDefault();
    try {
      //forrmm data we can send a data in from of Strings and number
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("nic", nic);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("doctorDepartment", doctorDepartment);
      formData.append("docAvatar", docAvatar);
      await axios
        .post(
          "https://meddy-1-26cd.onrender.com/api/v1/user/doctor/addnew",
          formData,
          {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setNic("");
          setDob("");
          setGender("");
          setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <section className="page">
        <div className="container form-component add-doctor-form">
          <h1 className="form-title">Register a new Doctor</h1>
          <form onSubmit={handleAddNewDoctor}>
            <div className="first-wrapper">
              <div>
                <img
                  src={
                    docAvatarPreview
                      ? `${docAvatarPreview}`
                      : "data:image/webp;base64,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"
                  }
                  alt="Doctor Avatar"
                />
                <input type="file" onChange={handleAvatar} />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="NIC"
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
                />
                <input
                  type={"date"}
                  placeholder="Date of Birth"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <select
                  value={doctorDepartment}
                  onChange={(e) => {
                    setDoctorDepartment(e.target.value);
                  }}
                >
                  <option value="">Select Department</option>
                  {departmentsArray.map((depart, index) => {
                    return (
                      <option value={depart} key={index}>
                        {depart}
                      </option>
                    );
                  })}
                </select>
                <button type="submit">Register New Doctor</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddNewDoctor;
