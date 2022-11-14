import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import downArrow from "../Assets/universal/downarrow.svg";
import categoryData from "../DummyDataSets/Category";

const CreateServicesHandyman = ({
  setBackButtonVisibility,
  backButtonVisibility,
  hm_id,
  setIndividualHMServices,
}) => {
  const [tOWInput, setTOWInput] = useState("");
  const [tOWArray, setTOWArray] = useState([]);
  const [placeholder, setPlaceholder] = useState("e.g. Sink Repair");
  const [specialities, setSpecialities] = useState(false);
  const [categorySelection, setCategorySelection] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [finalTow, setFinalTow] = useState();
  const [price, setPrice] = useState(0);
  const [serviceImage, setServiceImage] = useState("");
  const [currentCategorySelection, setCurrentCategorySelection] = useState(
    "Select your category"
  );

  const navigate = useNavigate();

  //==================== Type Of Work Array  ======================
  const handleAddTOW = (details) => {
    const array = [...tOWArray, details];
    setTOWArray(array);
    clearInput();
  };

  const handleTOWDelete = (item) => {
    console.log(item);
    const remainingArray = tOWArray.filter((d, i) => d !== item);
    setTOWArray(remainingArray);
    setPlaceholder("Add another?");
    console.log("clicked");
  };
  //--------------------clear input field---------------------
  function clearInput() {
    var getValue = document.getElementById("TOWinput");
    if (getValue.value != "") {
      getValue.value = "";
    }
  }

  //============================= BACKEND FETCHING ================================

  //============================UPLOAD SERVICE IMAGE=============================

  const uploadServicesImage = (event) => {
    setServiceImage(event.target.files[0]);
  };

  //============================= Create Services ================================

  console.log(hm_id);

  const createServicesDB = async () => {
    if (!hm_id) return;

    if (serviceImage) {
      try {
        const file = serviceImage;

        // GET SECURE URL FROM OUR SERVER TO ACCESS S3 BUCKET
        const { url } = await fetch("http://localhost:8001/s3url").then((res) =>
          res.json()
        );
        console.log(url);

        // POST THE IMAGE DIRECTLY TO THE S3 BUCKET
        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: file,
        });

        const imageUrl = url.split("?")[0];

        try {
          const res = await fetch("http://127.0.0.1:8001/services/", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              hm_id: hm_id,
              description: description,
              category: categorySelection,
              types_of_work: tOWArray,
              price_from: price,
              title: title,
              image_url: imageUrl,
            }),
          });
        } catch (e) {
          console.log(e);
        }
        navigate("/home");
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        const res = await fetch("http://127.0.0.1:8001/services/", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            hm_id: hm_id,
            description: description,
            category: categorySelection,
            types_of_work: tOWArray,
            price_from: price,
            title: title,
          }),
        });
      } catch (e) {
        console.log(e);
      }
      navigate("/home");
    }
  };

  //=========================================================

  //================= Handle Button Clicks ===================
  const handleClickSpecialities = () => {
    setSpecialities((current) => !current);
  };
  const handleClickSpecialitiesSelection = (e) => {
    setCurrentCategorySelection(e);
    setSpecialities((current) => !current);
    setCategorySelection(e.toLowerCase());
    console.log(categorySelection);
  };
  const handleSubmitCreateServices = () => {
    setBackButtonVisibility(false);
    setFinalTow(tOWArray);
    createServicesDB();
  };

  //======================= Use Effect =========================
  // useEffect(() => {
  //   // setBackButtonVisibility(true);
  // });

  console.log(hm_id, description, categorySelection, tOWArray, price, title);

  return (
    <>
      <Navbar backButtonVisibility={backButtonVisibility} />
      <div className="mb36">
        <div className="create--services--container">
          <div className="create--profile--header--container mb24 mt36">
            <p className="fs24 fw700 mb8 white create--profile--header--font">
              Let's create your services.
            </p>
            <span className="fs14 fw400 white">
              Fill up the below information to let users know what kind of
              services you provide
            </span>
          </div>
          <div className="create--profile--middle--container">
            <div className="mb24">
              <span className="fs16 fw700 white">Category</span>
              <div
                className="specialities--box--selection  mt8 relative"
                onClick={() => handleClickSpecialities()}
              >
                {currentCategorySelection}
                <img
                  src={downArrow}
                  className="absolute create--account--downarrow"
                ></img>
              </div>
              {specialities && (
                <div className="dropdown--menu--specialities absolute">
                  {categoryData.map((items) => {
                    return (
                      <div
                        className="specialities--selection  fs14 fw300"
                        onClick={() =>
                          handleClickSpecialitiesSelection(items.category)
                        }
                      >
                        {items.category}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <span className="fs16 fw700 white">Title</span>
            <div className="legal--name--container mt8 mb24">
              <div className="universal--input--forms--full">
                <input
                  type="text"
                  placeholder="e.g. Plumbing services (30 characters)"
                  className="create--account--input ml12"
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength={30}
                />
              </div>
            </div>
            <span className="fs16 fw700 white">Description</span>
            <div className="legal--name--container mt8 mb24">
              <div className="about--business--input--forms--full">
                <textarea
                  type="text"
                  placeholder="Let others know more about your services (200 characters)"
                  className="create--account--input ml12 mt12"
                  onChange={(e) => setDescription(e.target.value)}
                  maxLength={200}
                />
              </div>
            </div>
            <p className="fs16 fw700 white m0">Type of work</p>
            <div className="services--type--of--work--added--container mt0">
              {tOWArray.map((items) => {
                return (
                  <div className="services--type--of--work--added mt8">
                    <div className="services--type--of--work--added--text">
                      {items}
                    </div>
                    <button
                      className="services--type--of--work--delete--button mb8 mt8"
                      onClick={() => {
                        handleTOWDelete(items);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="services--type--of--work--container mt8 mb24">
              <div className="universal--input--forms--full">
                <input
                  type="text"
                  placeholder={placeholder}
                  className="create--account--input ml12"
                  onChange={(e) => {
                    setTOWInput(e.target.value);
                  }}
                  id="TOWinput"
                />
              </div>
              <button
                className="services--type--of--work--button mt8 fs24 fw300"
                value="clear"
                onClick={() => {
                  handleAddTOW(tOWInput);
                  setTOWInput(null);
                }}
              >
                +
              </button>
            </div>

            <span className="fs16 fw700 white">Image</span>
            <div className="legal--name--container mt8 mb24">
              <form className="universal--create--service--image--forms--full">
                <input
                  type="file"
                  accept="image/*"
                  className="services--image--upload--input"
                  onChange={(e) => {
                    uploadServicesImage(e);
                  }}
                ></input>
                {serviceImage && (
                  <p className="services--image--upload--button fs16 fw300">
                    {serviceImage.name}
                  </p>
                )}
                {!serviceImage && (
                  <p className="services--image--upload--button fs16 fw300">
                    Upload Image
                  </p>
                )}
              </form>
            </div>

            <span className="fs16 fw700 white">Price from</span>
            <div className="legal--name--container mt8">
              <div className="universal--input--forms--full">
                <input
                  type="text"
                  placeholder="e.g. $150"
                  className="create--account--input ml12"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="buttons--align--center--box">
              <button
                className="user--create--account--button"
                onClick={() => handleSubmitCreateServices()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateServicesHandyman;
