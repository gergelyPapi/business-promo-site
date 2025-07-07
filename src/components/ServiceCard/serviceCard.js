import { useEffect, useState } from "react";

function ServiceCard({ title, details, articleId, isExpanded, onToggle }) {
  const [visible, setVisible] = useState(false);
  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    if (isExpanded) {
      setVisible(true);
      setFadeClass(""); // Reset class first
      setTimeout(() => setFadeClass("fade-in"), 10);
    } else if (visible) {
      setFadeClass("fade-out");
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isExpanded]);

  return (
    <div
      className={`service-card ${isExpanded ? "expanded" : ""}`}
      onClick={onToggle}
    >
      <div tabIndex={-1} className="service-header">
        <span className="arrow">➤</span>
        <h3>{title}</h3>
      </div>
      {visible && (
        <div className={`service-details ${fadeClass}`}>
          <p>{details}</p>
        </div>
      )}
    </div>
  );
}

export default ServiceCard;
