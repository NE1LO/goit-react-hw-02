import css from "./Options.module.css";

const Options = ({ updateFeedback, reset, total }) => {
  return (
    <div>
      <ul className={css.btnList}>
        <li>
          <button onClick={() => updateFeedback("good")} type="button">
            Good
          </button>
        </li>
        <li>
          <button onClick={() => updateFeedback("neutral")} type="button">
            Neutral
          </button>
        </li>
        <li>
          <button onClick={() => updateFeedback("bad")} type="button">
            Bad
          </button>
        </li>
        {total ? (
          <li>
            <button onClick={reset} type="button">
              Reset
            </button>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Options;
