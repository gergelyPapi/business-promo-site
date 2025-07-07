import { useEffect, useState } from "react";

function ServiceCard({ title, pgraphs, articleId, isExpanded, onToggle }) {
  const [visible, setVisible] = useState(false);
  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    if (isExpanded) {
      setVisible(true);
      setFadeClass("");
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
    >
      <div tabIndex={-1} className="service-header" onClick={onToggle}>
        <span className="arrow">➤</span>
        <h3>{title}</h3>
      </div>
      {visible && pgraphs && (
        <div className={`service-details ${fadeClass}`}>
          {pgraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default ServiceCard;
