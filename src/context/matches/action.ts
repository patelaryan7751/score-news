import { API_ENDPOINT } from "../../config/constants";
export const fetchMatches = async (dispatch: any) => {
  try {
    dispatch({ type: "FETCH_MATCHES_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/matches`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("hi", data);
    dispatch({ type: "FETCH_MATCHES_SUCCESS", payload: data.matches });
  } catch (error) {
    console.log("Error fetching matches:", error);
    dispatch({
      type: "FETCH_MATCHES_FAILURE",
      payload: "Unable to load matches",
    });
  }
};

export const fetchMatch = async (dispatch: any, id: number) => {
  try {
    dispatch({ type: "FETCH_MATCH_REQUEST", payload: Number(id) });
    const response = await fetch(`${API_ENDPOINT}/matches/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("hi45", data);
    dispatch({ type: "FETCH_MATCH_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error fetching matches:", error);
    dispatch({
      type: "FETCH_MATCH_FAILURE",
      payload: { matchId: Number(id), errorMsg: "Unable to load match" },
    });
  }
};

// export const addMember = async (dispatch: any, args: any) => {
//   try {
//     const token = localStorage.getItem("authToken") ?? "";
//     const response = await fetch(`${API_ENDPOINT}/users`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(args),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to create member");
//     }
//     const data = await response.json();
//     if (data.errors && data.errors.length > 0) {
//       return { ok: false, error: data.errors[0].message };
//     }
//     dispatch({ type: "ADD_MEMBER_SUCCESS", payload: data.user });
//     return { ok: true };
//   } catch (error) {
//     console.error("Operation failed:", error);
//     return { ok: false, error };
//   }
// };
