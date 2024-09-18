import React, { useContext, useEffect, useState } from "react";
import userCommentIcon from "../Assets/images/user comment.com.png";
import "./Reviews.css";
import axios from "axios";

export default function Reviews(teacher) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [trueSendComment, setTrueSendComment] = useState(false);
  const [rating, setRating] = useState(0);
  console.log();
  let teach = teacher.teacher;
  let user = JSON.parse(sessionStorage.getItem("user"));
  // console.log(user);
  const [inputComment, setInputComment] = useState({
    teach: teach,
    comment: "",
    rate: "",
  });
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (trueSendComment) {
      getData();
      setTrueSendComment(false);
    }
  }, [trueSendComment]);
  async function getData() {
    try {
      let response = await axios.get(
        `https://unih0me.com/api/reviews/${teach}`
      );
      setData(response.data.data.reviews);
    } catch (error) {
      setError(error.message);
    }
  }
  async function inputData() {
    try {
      let response = await axios.post(
        `https://unih0me.com/api/auth/review`,
        inputComment,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );
      setTrueSendComment(true);
    } catch (error) {
      setError(error);
    }
    if (error) {
      return <p>{error.message}</p>;
    }
  }
  function registerComment(e) {
    console.log(e);

    /*  let inputreviews = { ...inputComment };
    inputreviews[e?.target.name] = e.target.value;
    setInputComment(inputreviews); */
  }
  function handleReview(e) {
    e.preventDefault();
    inputData();
  }
  function handleStarClick(ratingValue) {
    setRating(ratingValue);
    setInputComment({ ...inputComment, rate: ratingValue });
  }
  function starRating(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "star filled" : "star "}>
          ★
        </span>
      );
    }
    return <div className="star-rating">{stars}</div>;
  }
  return (
    <>
      <section className="reviews">
        <div>
          <h1 className="mt-5 mb-4 text-3xl font-semibold text-black ">
            Reviews
          </h1>
        </div>
        <div
          className={`review ${data.length >= 3 ? "overflow-y-scroll" : ""}`}
        >
          {data.map((item, index) => (
            <>
              <div key={index} className="mt-5 d-flex justify-content-between">
                <div className="gap-3 d-flex ">
                  <div>
                    <div className="user">
                      <img src={userCommentIcon} alt="User Comment Icon" />
                    </div>
                  </div>
                  <div className="gap-1 d-flex flex-column">
                    <span className="text-body">
                      {item.student.firstname + " " + item.student.lastname}
                    </span>
                    <span>{item.created_at.split("T")[0]}</span>
                    <div className="stars d-flex align-items-center">
                      <span className="px-2 py-2 font-bold text-white bg-yellow-400 rounded-full me-1">{`${item.rate}.0`}</span>
                      <span>{starRating(item.rate)}</span>
                    </div>
                  </div>
                </div>
                <div className="comment ms-5">
                  <p>{item.comment}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        {user === "student" ? (
          <form onSubmit={handleReview} className="mt-5 d-flex">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-fulltext-sm w-100"
              placeholder="Enter text here"
              name="comment"
              onChange={registerComment}
              required
            />
            <div className="mx-2 selectLevelReview">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  onClick={() => handleStarClick(i + 1)}
                  style={{
                    cursor: "pointer",
                    fontSize: "30px",
                    color: i < rating ? "gold" : "gray",
                  }}
                  className="mx-2"
                >
                  ★
                </span>
              ))}
            </div>
            <button
              type="submit"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Send
            </button>
          </form>
        ) : (
          <p>false</p>
        )}
      </section>
    </>
  );
}
