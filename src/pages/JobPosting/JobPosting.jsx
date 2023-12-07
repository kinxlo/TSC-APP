import React, { useState } from "react";
import "./JobPosting.css";
import { useNavigate } from "react-router-dom";

const JobPosting = () => {
  // =============================GO BACK LOGIC===============================
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/findtalent");
  };

  // ==============================FULL FORM LOGIC===============================

  const [formDataFill, setFormDataFill] = useState({
    jobTitle: "",
    jobLocation: "",
    jobType: "",
    experienceLevel: "",
    jobDescription: "",
    minimumQualification: "",
    addSkills: "",
    addTools: "",
    responsibilities: "",
    payRange: "",
    applicationDeadline: "",
  });

  const handleChangeFill = (event) => {
    const { name, value } = event.target;
    setFormDataFill({
      ...formDataFill,
      [name]: value,
    });
  };

  const handleSubmitFill = (event) => {
    event.preventDefault();
    // add form submission logic here
    console.log("Form Submitted:", formDataFill);
    // Reset the form after submission
    setFormDataFill({
      jobTitle: "",
      jobLocation: "",
      jobType: "",
      experienceLevel: "",
      jobDescription: "",
      minimumQualification: "",
      addSkills: "",
      addTools: "",
      responsibilities: "",
      payRange: "",
      applicationDeadline: "",
    });
  };

  // ========================FORM CANCEL LOGIC========================
  // USE SAME CANCEL LOGIC ABOVE

  // ======================DROPDOWN LOGIC==============================

  const [showJobTypeDropdown, setShowJobTypeDropdown] = useState(false);
  const [showExperienceLevelDropdown, setShowExperienceLevelDropdown] =
    useState(false);

  const handleDropdownToggle = (dropdownType) => {
    if (dropdownType === "jobType") {
      setShowJobTypeDropdown(!showJobTypeDropdown);
      setShowExperienceLevelDropdown(false);
    } else if (dropdownType === "experienceLevel") {
      setShowExperienceLevelDropdown(!showExperienceLevelDropdown);
      setShowJobTypeDropdown(false);
    }
  };

  const handleDropdownSelect = (value, dropdownType) => {
    setFormDataFill({
      ...formDataFill,
      [dropdownType]: value,
    });
    handleDropdownToggle(dropdownType);
  };

  // ======================DROPDOWN LOGIC 2==============================

  const [showPayRangeDropdownTwo, setShowPayRangeDropdownTwo] = useState(false);
  const [
    showApplicationDeadlineDropdownTwo,
    setShowApplicationDeadlineDropdownTwo,
  ] = useState(false);

  const handleDropdownToggleTwo = (dropdownType) => {
    if (dropdownType === "payRange") {
      setShowPayRangeDropdownTwo(!showPayRangeDropdownTwo);
      setShowApplicationDeadlineDropdownTwo(false);
    } else if (dropdownType === "applicationDeadline") {
      setShowApplicationDeadlineDropdownTwo(
        !showApplicationDeadlineDropdownTwo
      );
      setShowPayRangeDropdownTwo(false);
    }
  };

  const handleDropdownSelectTwo = (value, dropdownType) => {
    setFormDataFill({
      ...formDataFill,
      [dropdownType]: value,
    });
    handleDropdownToggleTwo(dropdownType);
  };

  // ====================================FILL 5 LOGIC===SKILLS & TOOLS==========================================

  const [selectedSkillButtons, setSelectedSkillButtons] = useState([]);
  const [selectedToolButtons, setSelectedToolButtons] = useState([]);

  const handleButtonClick = (buttonText, inputName) => {
    if (inputName === "addSkills") {
      setSelectedSkillButtons((prevButtons) =>
        prevButtons.includes(buttonText)
          ? prevButtons
          : [...prevButtons, buttonText]
      );
    } else if (inputName === "addTools") {
      setSelectedToolButtons((prevButtons) =>
        prevButtons.includes(buttonText)
          ? prevButtons
          : [...prevButtons, buttonText]
      );
    }
  };

  const handleImageClick = (inputName) => {
    const selectedButtons =
      inputName === "addSkills" ? selectedSkillButtons : selectedToolButtons;

    if (selectedButtons.length > 0) {
      setFormDataFill((prevData) => ({
        ...prevData,
        [inputName]: selectedButtons.join(", "),
      }));

      // if (inputName === "addSkills") {
      //   setSelectedSkillButtons([]);
      // } else if (inputName === "addTools") {
      //   setSelectedToolButtons([]);
      // }
    }
  };

  // =============////=====================////====RETURN========////=============////=====================

  return (
    <div className="body">
      <div className="con">
        <button className="cancel" onClick={handleCancel}>
          <img src="../../../src/assets/Vectorp21.svg" alt="arrow" />
          CANCEL & GO BACK
        </button>
        <p className="maint m-0">Job Requirement</p>
      </div>

      {/* <!-- ======================================================FILL 1===================================================================== --> */}

      <form className="bigf" onSubmit={handleSubmitFill}>
        <div className="fill-1">
          <div>
            <p className="m-0">Job title</p>
            <input
              className="in-1"
              type="text"
              name="jobTitle"
              value={formDataFill.jobTitle}
              onChange={handleChangeFill}
              placeholder="Enter job title for this job post"
            />
          </div>
          <div>
            <p className="m-0">Job location</p>
            <input
              className="in-2"
              type="text"
              name="jobLocation"
              value={formDataFill.jobLocation}
              onChange={handleChangeFill}
              placeholder="Enter job location for this job post"
            />
          </div>
        </div>

        {/* <!-- ============================================================FILL 2====================================================================== --> */}

        <div className="fill-2">
          <div>
            <p className="m-0">What position type are you offering?</p>
            <div className="inner-3">
              <input
                className="in-3"
                type="text"
                name="jobType"
                value={formDataFill.jobType}
                onChange={handleChangeFill}
                placeholder="Select Job Type"
                onClick={() => handleDropdownToggle("jobType")}
              />
              <div
                className="in-img1"
                style={{
                  transform: showJobTypeDropdown
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
                onClick={() => handleDropdownToggle("jobType")}
              >
                <img src="../../../src/assets/Vectordrop.png" alt="arrowd" />
              </div>
              {showJobTypeDropdown && (
                <div className="dropdown">
                  <div
                    onClick={() =>
                      handleDropdownSelect("Web Development", "jobType")
                    }
                  >
                    <p className="m-0">Web Development</p>
                  </div>
                  <div
                    onClick={() =>
                      handleDropdownSelect("Product Design", "jobType")
                    }
                  >
                    <p className="m-0">Product Design</p>
                  </div>
                  <div
                    onClick={() =>
                      handleDropdownSelect("Data Analysis", "jobType")
                    }
                  >
                    <p className="m-0">Data Analysis</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <p className="m-0">What level of experience do you want?</p>
            <div className="inner-4">
              <input
                className="in-4"
                type="text"
                name="experienceLevel"
                value={formDataFill.experienceLevel}
                onChange={handleChangeFill}
                placeholder="Choose the minimum experience level required"
                onClick={() => handleDropdownToggle("experienceLevel")}
              />
              <div
                className="in-img2"
                style={{
                  transform: showExperienceLevelDropdown
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
                onClick={() => handleDropdownToggle("experienceLevel")}
              >
                <img src="../../../src/assets/Vectordrop.png" alt="arrowd" />
              </div>
              {showExperienceLevelDropdown && (
                <div className="dropdown">
                  <div
                    onClick={() =>
                      handleDropdownSelect("4-6 Months", "experienceLevel")
                    }
                  >
                    <p className="m-0">4-6 Months</p>
                  </div>
                  <div
                    onClick={() =>
                      handleDropdownSelect("1-2 years", "experienceLevel")
                    }
                  >
                    <p className="m-0">1-2 years</p>
                  </div>
                  <div
                    onClick={() =>
                      handleDropdownSelect("2-3 years", "experienceLevel")
                    }
                  >
                    <p className="m-0">2-3 years</p>
                  </div>
                  <div
                    onClick={() =>
                      handleDropdownSelect("3-4 years ", "experienceLevel")
                    }
                  >
                    <p className="m-0">3-4 years</p>
                  </div>
                  <div
                    onClick={() =>
                      handleDropdownSelect("4-5 years", "experienceLevel")
                    }
                  >
                    <p className="m-0">4-5 years</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <!-- ============================================================FILL 3================================================================ --> */}

        <div className="fill-3">
          <p className="m-0">Job Description</p>
          <textarea
            name="jobDescription"
            id=""
            cols="128"
            rows="12"
            value={formDataFill.jobDescription}
            onChange={handleChangeFill}
            placeholder="Enter the title of position you want to fill"
          ></textarea>
        </div>

        {/* <!-- =====================================================================FILL 4===================================================================== --> */}

        <div className="fill-4">
          <p className="m-0">Minimum Qualification</p>
          <textarea
            name="minimumQualification"
            id=""
            cols="128"
            rows="12"
            value={formDataFill.minimumQualification}
            onChange={handleChangeFill}
            placeholder="Enter the minimum level of qualification for the position you are hiring for "
          ></textarea>
        </div>

        {/* <!-- ============================================================FILL 5============================================================================ --> */}

        <div className="fill-5">
          <div className="inner-5">
            <p className="m-0 skills">
              What skills or languages are you looking to hire?
            </p>
            <div
              className="in-img5"
              onClick={() => handleImageClick("addSkills")}
            >
              <input
                className="in-5"
                type="text"
                name="addSkills"
                value={formDataFill.addSkills}
                onChange={handleChangeFill}
                placeholder="Add new skill"
              />
              <div className="inimg5">
                <img src="../../../src/assets/Vector+.png" alt="plus" />
              </div>
            </div>
            <div className="bot-5">
              <div className="b-1">
                <button
                  className={`m-0 ${
                    selectedSkillButtons.includes("UI/UX Design")
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleButtonClick("UI/UX Design", "addSkills")}
                >
                  UI/UX Design
                </button>
                <button
                  className={`m-0 ${
                    selectedSkillButtons.includes("Android Development")
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleButtonClick("Android Development", "addSkills")
                  }
                >
                  Android Development
                </button>
              </div>
              <div className="b-2">
                <button
                  className={`m-0 ${
                    selectedSkillButtons.includes("Front End Development")
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleButtonClick("Front End Development", "addSkills")
                  }
                >
                  Front End Development
                </button>
                <button
                  className={`m-0 ${
                    selectedSkillButtons.includes("Back End Development")
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleButtonClick("Back End Development", "addSkills")
                  }
                >
                  Back End Development
                </button>
              </div>
            </div>
          </div>
          <div className="inner-6">
            <p className="m-0 tools">What tools would be used?</p>
            <div
              className="in-img6"
              onClick={() => handleImageClick("addTools")}
            >
              <input
                className="in-6"
                type="text"
                name="addTools"
                value={formDataFill.addTools}
                onChange={handleChangeFill}
                placeholder="Add new tool"
              />
              <div className="inimg6">
                <img src="../../../src/assets/Vector+.png" alt="plus" />
              </div>
            </div>
            <div className="bot-6">
              <div className="b-3">
                <button
                  className={`m-0 ${
                    selectedToolButtons.includes("Figma") ? "selected" : ""
                  }`}
                  onClick={() => handleButtonClick("Figma", "addTools")}
                >
                  Figma
                </button>
                <button
                  className={`m-0 ${
                    selectedToolButtons.includes("Adobe XD") ? "selected" : ""
                  }`}
                  onClick={() => handleButtonClick("Adobe XD", "addTools")}
                >
                  Adobe XD
                </button>
                <button
                  className={`m-0 ${
                    selectedToolButtons.includes("Invision") ? "selected" : ""
                  }`}
                  onClick={() => handleButtonClick("Invision", "addTools")}
                >
                  Invision
                </button>
                <button
                  className={`m-0 ${
                    selectedToolButtons.includes("Cinema 3D") ? "selected" : ""
                  }`}
                  onClick={() => handleButtonClick("Cinema 3D", "addTools")}
                >
                  Cinema 3D
                </button>
              </div>
              <div className="b-4">
                <button
                  className={`m-0 ${
                    selectedToolButtons.includes("Illustrator")
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleButtonClick("Illustrator", "addTools")}
                >
                  Illustrator
                </button>
                <button
                  className={`m-0 ${
                    selectedToolButtons.includes("Corel Draw") ? "selected" : ""
                  }`}
                  onClick={() => handleButtonClick("Corel Draw", "addTools")}
                >
                  Corel Draw
                </button>
                <button
                  className={`m-0 ${
                    selectedToolButtons.includes("Photoshop") ? "selected" : ""
                  }`}
                  onClick={() => handleButtonClick("Photoshop", "addTools")}
                >
                  Photoshop
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ===============================================FILL 6======================================================== --> */}

        <div className="fill-6">
          <p className="m-0">Responsibilities</p>
          <textarea
            name="responsibilities"
            id=""
            cols="128"
            rows="12"
            value={formDataFill.responsibilities}
            onChange={handleChangeFill}
            placeholder="Enter the list of responsibilities accompanying the position"
          ></textarea>
        </div>

        {/* <!-- ====================================================FILL 7================================================================ --  */}
        <div className="fill-7">
          <div>
            <p className="m-0">What is the pay range?</p>
            <div className="inner-7">
              <input
                className="in-7"
                type="text"
                name="payRange"
                value={formDataFill.payRange}
                onChange={handleChangeFill}
                placeholder="Select Amount"
                onClick={() => handleDropdownToggleTwo("payRange")}
              />
              <div
                className="in-img7"
                style={{
                  transform: showPayRangeDropdownTwo
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
                onClick={() => handleDropdownToggleTwo("payRange")}
              >
                <img src="../../../src/assets/Vectordrop.png" alt="arrowd" />
              </div>
              {showPayRangeDropdownTwo && (
                <div className="dropdown">
                  <div
                    onClick={() =>
                      handleDropdownSelectTwo("N150,000-250,000", "payRange")
                    }
                  >
                    <p className="m-0">N150,000-250,000</p>
                  </div>
                  <div
                    onClick={() =>
                      handleDropdownSelectTwo("N250,000-350,000", "payRange")
                    }
                  >
                    <p className="m-0">N250,000-350,000</p>
                  </div>
                  <div
                    onClick={() =>
                      handleDropdownSelectTwo("N350,000-450,000", "payRange")
                    }
                  >
                    <p className="m-0">N350,000-450,000</p>
                  </div>
                  <div
                    onClick={() =>
                      handleDropdownSelectTwo("N350,000-450,000", "payRange")
                    }
                  >
                    <p className="m-0">N350,000-450,000</p>
                  </div>
                  <div
                    onClick={() =>
                      handleDropdownSelectTwo("N650,000-750,000", "payRange")
                    }
                  >
                    <p className="m-0">N650,000-750,000</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <p className="m-0">For how long will you be taking applicants?</p>
            <div className="inner-8">
              <input
                className="in-8"
                type="text"
                name="applicationDeadline"
                value={formDataFill.applicationDeadline}
                onChange={handleChangeFill}
                placeholder="Set application deadline"
                onClick={() => handleDropdownToggleTwo("applicationDeadline")}
              />
              <div
                className="in-img8"
                style={{
                  transform: showApplicationDeadlineDropdownTwo
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
                onClick={() => handleDropdownToggleTwo("applicationDeadline")}
              >
                <img src="../../../src/assets/Vectordrop.png" alt="arrowd" />
              </div>
              {showApplicationDeadlineDropdownTwo && (
                <div className="dropdown">
                  <div
                    onClick={() =>
                      handleDropdownSelectTwo(
                        "2-3 Weeks",
                        "applicationDeadline"
                      )
                    }
                  >
                    <p className="m-0">2-3 Weeks</p>
                  </div>
                  <div
                    onClick={() =>
                      handleDropdownSelectTwo("1 Month", "applicationDeadline")
                    }
                  >
                    <p className="m-0">1 Month</p>
                  </div>
                  <div
                    onClick={() =>
                      handleDropdownSelectTwo("2 Months", "applicationDeadline")
                    }
                  >
                    <p className="m-0">2 Months</p>
                  </div>
                  <div
                    onClick={() =>
                      handleDropdownSelectTwo("3 Months", "applicationDeadline")
                    }
                  >
                    <p className="m-0">3 Months</p>
                  </div>
                  <div
                    onClick={() =>
                      handleDropdownSelectTwo("4 Months", "applicationDeadline")
                    }
                  >
                    <p className="m-0">4 Months</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <!-- ========================================================FILL 10======================================================================== --> */}

        <div className="fill-10">
          <button className="canc" type="button" onClick={handleCancel}>
            CANCEL
          </button>
          <button className="subm" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobPosting;
