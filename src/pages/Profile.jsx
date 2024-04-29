import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { db } from "../Services/firebase";
import { createImageUrl } from "../Services/movieServices";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(db, "users", `${user.email}`), (docSnapshot) => {
        if (docSnapshot.exists()) {
          setMovies(docSnapshot.data().favShows);
        }
      });
      return () => unsubscribe();
    }
  }, [user]);

  const slide = (offset) => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += offset;
  };

  const markFavShow = () => {
    setLike(!like);
  };

  if (!user) {
    return <p>fetching shows...</p>;
  }

  return (
    <div>
      <div>
        <img
          className="block w-full h-[500px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/dc905d8b-0f80-40e4-a471-964ef99dcbf5/NG-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="//"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]" />
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-nsans-bold">Myyy Shows</h1>
          <p className="font-nsans-light text-gray-400 text-lg">{user.email}</p>
        </div>
      </div>

      <h2 className="font-nsans-bold md:text-xl p-4 capitalize">Fav Show</h2>

      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => slide(-500)}
          className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 cursor-pointer size={40}"
        />
        <div
          id={`slider`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative w-[160px] sm:[200px] md:w-[240px] lg:w[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2"
            >
              <img
                className="w-full h-40 block object-cover object-top"
                src={createImageUrl(movie.backdrop_path ?? movie.poster_path, "w500")}
                alt={movie.title}
              />
              <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
                <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold">
                  {movie.title}
                </p>
                <p onClick={markFavShow} className="cursor-pointer">
                  {like ? (
                    <FaHeart size={20} className="absolute top-2 left-2 text-gray-300" />
                  ) : (
                    <FaRegHeart size={20} className="absolute top-2 left-2 text-gray-300" />
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={() => slide(500)}
          className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 cursor-pointer size={40}"
        />
      </div>
    </div>
  );
};

export default Profile;
