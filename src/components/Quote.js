import { useState } from "react";

export default function Quote(props) {
  const [status, setStatusState] = useState(undefined);

  function setStatus(emojiClicked) {
    setStatusState(emojiClicked);
    props.onClick(emojiClicked);
  }

  /*
   * This method takes an emoji as a string and returns it wrapped in a <div>.
   * You should use it in your render function to show the emoji after a button is clicked.
   */
  function getStatusComponent(emoji) {
    return (
      <div id="like-status" className="like-status">
        {emoji}
      </div>
    );
  }

  /**
   * @todo ================TASK================
   * In this function you should return the JSX to render the component
   *
   * 1. In the {} in the <blockquote> add the quote from the props
   * 2. In the {} in the <p> add the author of the quote from the props
   *
   * Next, we need to chose two different sets of components depending on the
   * current state of the application.
   *
   * If the user has clicked one of the three buttons, it will remove all three of them
   * and show the selected emoji type.
   *
   * Before a user has clicked any of the buttons button we want to show the three buttons.
   *
   * DISLIKE BUTTON
   * 1. The id should be "dislike"
   * 2. When clicked, it hides the three buttons and shows a "👎" instead
   * 3. The text inside the button should be "👎 dislike"
   *
   * LIKE BUTTON
   * 1. The id should be "like"
   * 2. When clicked, it hides the three buttons and shows a "👍" instead
   * 3. The text inside the button should be "👍 like"
   *
   * SUPERLIKE BUTTON
   * 1. The id should be "superlike"
   * 2. When clicked, it hides the three buttons and shows a "💛" instead
   * 3. The text inside the button should be "💛 superlike"
   * */
  return (
    <div className="quote-block">
      <blockquote id="quote">{props.en}</blockquote>
      <p id="author">-- {props.author}</p>
      <div className="button-block">
        <button> dislike 👎</button>
        <button>like 👍</button>
        <button>superlike 💛</button>
      </div>
    </div>
  );
}
