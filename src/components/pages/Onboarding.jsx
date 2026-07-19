import QuestionCard from "../onboarding/QuestionCard";
import { useState } from "react";
import Questions from "../data/OnboardingQuestions";
function Onboarding() {
  const user = JSON.parse(localStorage.getItem("user") || {});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div className={`${user.color} h-screen flex flex-col items-center`}>
      <QuestionCard {...Questions[currentQuestion]} />
    </div>
  );
}
export default Onboarding;
