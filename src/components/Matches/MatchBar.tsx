import React, { useEffect, useState } from "react";
import { API_ENDPOINT } from "../../config/constants";

const MatchBar = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_ENDPOINT}/matches`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex-shrink-0 w-80 bg-white shadow-lg mx-2 p-4 rounded-md">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold ">Cricket</h2>
            <p className="text-sm font-normal">IPL 2023,Delhi</p>
          </div>
          <div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div>
            <h2 className="text-md font-bold ">CSK</h2>
            <h2 className="text-md font-bold ">GT</h2>
          </div>
          <div>
            <p>
              (20 Overs)
              <span className="text-md font-bold "> 235/5</span>
            </p>
            <p>
              (20 Overs)
              <span className="text-md font-bold "> 235/5</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchBar;
