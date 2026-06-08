function QuestionCard({image, question, options}) {
  const user = JSON.parse(localStorage.getItem("user") || {});
  return (
    <div className={`${user.color} h-screen flex flex-col items-center`}>
      <div className="w-full h-1/2 flex items-center justify-center">
        <h1>opa</h1>
      </div>
    </div>
  );
}
export default QuestionCard;
