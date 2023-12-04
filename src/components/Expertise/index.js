import React, { useEffect, useState } from 'react';

function Expertise() {
  const [expertiseItems, setExpertiseItems] = useState([
    { name: "Planning & Execution", color: "#3498db" },
    { name: "Agile Processes & Technical Practices", color: "#e74c3c" },
    { name: "Collaboration", color: "#27ae60" },
    // Add more expertise items as needed
  ]);

  useEffect(() => {
    // Function to display expertise items
    function displayExpertiseItems() {
      return expertiseItems.map((item) => (
        <div className="expertise-item" style={{backgroundColor: item.color}}>
          <p>{item.name}</p>
        </div>
      ));
    }

    displayExpertiseItems();
  }, [expertiseItems]);

  return (
    <section id="expertise">
      <h2>Expertise</h2>
      <div className="expertise-container" id="expertiseContainer">
        {expertiseItems.map((item) => (
          <div className="expertise-item" style={{backgroundColor: item.color}}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;