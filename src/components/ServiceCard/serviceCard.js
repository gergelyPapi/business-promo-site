import { useState } from "react";

function ServiceCard({ title, details }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="service-card" onClick={() => setOpen(!open)}>
      <h3>{title}</h3>
      {open && <p className="fade-in">{details}</p>}
    </div>
  );
}

export default ServiceCard;