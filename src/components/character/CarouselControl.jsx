import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
function CarouselControl({ currentCharacter, handleNext, handlePrevious }) {
  return (
    <div className="flex justify-center items-center gap-10 text-4xl">
      <button onClick={handlePrevious}>
        <TiArrowLeftThick className="text-amber-400" />
      </button>
      <h2
        className={`
          flex justify-center text-3xl ${currentCharacter.textColor}/20 bg-clip-text text-transparent font-semibold w-40 border-b-amber-400 border-b-2`}
      >
        {currentCharacter.name}
      </h2>
      <button onClick={handleNext}>
        <TiArrowRightThick className="text-amber-400" />
      </button>
    </div>
  );
}
export default CarouselControl;
