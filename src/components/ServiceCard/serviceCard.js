import { useState } from "react";

function ServiceCard({ title, details, articleId }) {
  const [open, setOpen] = useState(false);
  const [expandedArticleId, setExpandedArticleId] = useState(null);

  return (
    <div 
      className={`service-card ${open ? 'expanded' : ''}`}
      onClick={() => setOpen(!open)}
      isExpanded={expandedArticleId === articleId}
      onToggle={() => setExpandedArticleId(expandedArticleId === articleId ? null : articleId)}
    >
      <span className="arrow">➤</span>
      <h3>{title}</h3>
      <div className="content-wrapper">
        {open && <p className="fade-in">{details}</p>}
      </div>
    </div>
  );
}

export default ServiceCard;