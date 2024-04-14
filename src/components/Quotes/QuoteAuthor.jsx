import React from "react";

const QuoteAuthor = ({ author, color }) => {
  return (
    <div id="quote-author" style={{ color: color }}>
      <span id="author">{author}</span>
    </div>
  );
};

export default QuoteAuthor;
