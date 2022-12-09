import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { quotesList } from "./data.js";
import Header from "./components/Header.js";
import LikeCount from "./components/LikeCount.js";
import Quote from "./components/Quote.js";

function App() {
  const [data, setData] = useState(quotesList);
  const [likeCount, setLikeCounter] = useState(0);
  const [dislikeCount, setDislikeCounter] = useState(0);
  const [superlikeCount, setSuperlikeCounter] = useState(0);

  const quotes = quotesList.map((quote) => {
    return (
      <Quote
        en={quote.en}
        author={quote.author}
        id={quote.id}
        onQuoteClicked={onQuoteClicked}
      />
    );
  });

  function onQuoteClicked(newStatus) {
    /**
     * @todo ================TASK================
     * This method should run every time a button on a quote is clicked.
     *
     * Add functionality so that we can keep track of how many likes, dislikes
     * and superlikes there have been.
     *
     * You should update the three properties in the state:
     *
     * "likeCount", "dislikeCount" and "superCount"
     *
     * depending on which button has been clicked
     * */
    
  }

  function getQuotes() {
    /**
     * @todo ================TASK================
     * This function take the array of `data` from the state and
     * converts it into an array of Quote Components.
     *
     * This function should return that array of components.
     *
     * The Quote component should have the props "key", "id", "quote", "author" and "onClick".
     *
     * - To the key prop you should pass - quote.id
     * - To the id prop you should pass - quote.id
     * - To the quote prop you should pass - quote.en
     * - To the author prop you should pass - quote.author
     * - To the onClick prop you should pass - a function that calls onQuoteClicked(newStatus)
     * */
  }
  return (
    <div>
      <link rel="stylesheet" href="App.css"></link>
      <div className="App" id="App">
        <Header />
        <LikeCount
          likeCount={likeCount}
          dislikeCount={dislikeCount}
          superlikeCount={superlikeCount}
        />
        {getQuotes()}
      </div>
      {quotes}
    </div>
  );
}

export default App;
