import React, { useState, useEffect } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "src/context/firebaseConfig";
import { getAssetdetails } from "src/context/dbQueryFirebase";
import { useAuth } from "src/context/firebase-auth-context";

const dropdownStyles = {
  position: "relative",
  display: "inline-block",
};

const selectStyles = {
  appearance: "none",
  backgroundColor: "#f2f2f2",
  border: "none",
  borderRadius: "4px",
  color: "#333",
  cursor: "pointer",
  fontSize: "16px",
  padding: "10px 20px",
  width: "200px",
};

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchAssetDetails = async () => {
      try {
        console.log("WorkingStatus");
        const assetDetails = await getAssetdetails(user.orgId);
        const workingStatusOptions = assetDetails.map((asset) => asset.WorkingStatus);
        setOptions(workingStatusOptions);
      } catch (error) {
        console.log("Error fetching asset details:", error);
      }
    };

    if (user && user.orgId) {
      fetchAssetDetails();
    }
  }, [user]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown" style={dropdownStyles}>
      <select value={selectedOption} onChange={handleOptionChange} style={selectStyles}>
        <option value="">Select an option</option>
        {options.length > 0 ? (
          options.map((option) =>
            selectedOption === "repair" && option !== "Repair" ? null : (
              <option key={option} value={option}>
                {option}
              </option>
            )
          )
        ) : (
          <option value="" disabled>
            Loading...
          </option>
        )}
      </select>
    </div>
  );
};

export default Dropdown;
