import "./Quote.css";

const Quote = (props) => {
  function copyText() {
    navigator.clipboard
      .writeText(props.quoteObj.quote)
      .then(() => alert("Quote Copied"));
  }
  return (
    <div className="quote">
      <p>{props.quoteObj.quote}</p>
      <p>{props.quoteObj.author}</p>
    </div>
  );
};

export default Quote;