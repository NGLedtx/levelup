import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
function CarouselControl({ currentCharacter, handleNext, handlePrevious }) {
  return (
    <div className="flex justify-center items-center gap-10 text-4xl">
      <button onClick={handlePrevious}>
        <TiArrowLeftThick/>
      </button>
      <h2
        className={`
    text-3xl
    ${currentCharacter.textColor}
    bg-clip-text
    text-transparent
    font-semibold
  `}
      >
        {currentCharacter.name}
      </h2>
      <button onClick={handleNext}>
        <TiArrowRightThick />
      </button>
    </div>
  );
}
export default CarouselControl;
