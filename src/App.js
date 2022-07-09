import Review from "./components/Review";
import { useState, useEffect } from "react";

function App() {
  const url = "https://testimonialapi.toolcarton.com/api";

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);
  const [usersID, setUsersID] = useState([]);

  const fetchData = async () => {
    const res = await fetch(url);

    if (res.ok) {
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } else {
      // Handle errors
      console.log(res.status, res.statusText);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addActiveClass = (id) => {
    const review = document.getElementById(id);
    const reviews = document.querySelectorAll(".review");
    reviews.forEach((review) => review.classList.add("hide"));
    review.classList.remove("hide");
  };

  useEffect(() => {
    if (!loading) {
      setUsersID(users.map((user) => user.id));
      setActive(0);
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      console.log("effect active class");
      const activeID = usersID[active];
      addActiveClass(activeID);
    }
  }, [active]);

  return (
    <>
      <h1 className="text-6xl text-slate-800   font-semibold mb-6 ">
        Testimonials
      </h1>
      <div className="h-1 w-24 bg-blue-400 mb-16"></div>

      <div className="review-cont">
        <Review users={users} setActive={setActive} active={active} />
      </div>
    </>
  );
}

export default App;
