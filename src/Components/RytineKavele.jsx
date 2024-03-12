import React from "react";

function Kavele({ color, fontWeight }) {
  return (
    <div>
      <h1 style={{ color: color, fontWeight: fontWeight }}>Skanios kaveles</h1>
      <h2 style={{ color: color, fontWeight: fontWeight }}>Grazios dieneles</h2>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0HJgs6tvKsTuJs5SQrZkCmlQQi32JHjqdHIrwOziJg&s"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}

export default Kavele;
