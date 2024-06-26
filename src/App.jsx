import { useEffect, useState } from "react";
import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
const key = "feedbackState";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const data = JSON.parse(localStorage.getItem(key)) || {
      good: 0,
      bad: 0,
      neutral: 0,
    };
    return data;
  });

  const updateFeedback = (type) => {
    setFeedback((prevfeedback) => ({
      ...prevfeedback,
      [type]: prevfeedback[type] + 1,
    }));
  };

  const reset = () => {
    setFeedback({ good: 0, bad: 0, neutral: 0 });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const rate = Math.round(((feedback.good + feedback.neutral) / total) * 100);

  useEffect(() => {
    if (total > 0) localStorage.setItem(key, JSON.stringify(feedback));
  }, [feedback, total]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} reset={reset} total={total} />
      {total !== 0 ? (
        <Feedback feedback={feedback} total={total} rate={rate} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
