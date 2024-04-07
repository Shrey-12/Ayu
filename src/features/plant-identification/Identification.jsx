import React, { useState } from "react";
import axios from "axios";
import "./plant.css"
import AyuLogo from '../../assets/images/AyuLogo.png';
import cartbg from '../../assets/images/cartbg.jpg'; // Replace 'backgroundImage.jpg' with your image file path

function Identification() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictions, setPredictions] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData
      );
      setPredictions(response.data.predictions);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${cartbg})`, backgroundSize: "cover", minHeight: "90vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1 className="plant-title"
         style={{ color: "white", fontSize: "6vw", marginBottom: "20px", marginTop:"50px"}}>
          Identify &nbsp; your &nbsp;  Plant&nbsp;
          </h1>
        <div className="bg-customGreen plant-container mb-16" style={{ padding: "65px", borderRadius: "2px", boxShadow: "0px 10px 50px rgba(147, 184, 159, 0)", backgroundColor: "rgba(255,255,255, 0.4)" }}>
          <h2 className="plant-desc mb-3"> Select your image below</h2>
        <input type="file"
               id="file" // Added id attribute
               accept="image/*"
               onChange={handleFileChange}
               className="file-input"/>
               <label htmlFor="file" className="custom-file-upload mx-10 my-4">
               Choose File
               </label>
        </div>
        {predictions.length > 0 && (
          <div>
            <h2>Predictions:</h2>
            <ul>
              {predictions.map((prediction, index) => (
                <li key={index}>{prediction}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Identification;
