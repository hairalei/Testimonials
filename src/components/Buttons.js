import {
  FaChevronLeft,
  FaChevronRight,
} from "../../node_modules/react-icons/fa";

function Buttons({ users, setActive, active }) {
  const getNextReview = () => {
    if (active === users.length - 1) {
      setActive(0);
    } else {
      const nextRev = active + 1;
      setActive(nextRev);
    }
  };

  const getPrevReview = () => {
    if (active === 0) {
      setActive(users.length - 1);
    } else {
      const nextRev = active - 1;
      setActive(nextRev);
      console.log(active);
    }
  };

  const getRandomReview = () => {
    const random = Math.floor(Math.random() * users.length);
    setActive(random);
  };

  return (
    <div className="absolute bottom-8 flex items-center justify-center flex-col gap-5 mt-6">
      <div>
        <button
          className="p-2 hover:bg-sky-100 rounded-full mr-4 "
          onClick={getPrevReview}
        >
          <FaChevronLeft className="text-blue-400 text-2xl" />
        </button>

        <button
          className="p-2 hover:bg-sky-100 rounded-full"
          onClick={getNextReview}
        >
          <FaChevronRight className="text-blue-400 text-2xl" />
        </button>
      </div>

      <button
        className="text-blue-700 bg-sky-100 py-1 px-4 hover:bg-blue-500 hover:text-white"
        onClick={getRandomReview}
      >
        Surprise Me
      </button>
    </div>
  );
}

export default Buttons;
