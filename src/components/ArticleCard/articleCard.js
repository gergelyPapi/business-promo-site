function ArticleCard({ title, description, content, onClick }) {
  return (
    <div className="article-card" onClick={() => onClick({ title, content })}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default ArticleCard;