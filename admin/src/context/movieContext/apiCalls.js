import axios from "axios"
import { createMoviesFailure, createMoviesStart, createMoviesSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieAction"


export const getMoviesall = async (dispatch) => {
    dispatch(getMoviesStart())
    try {
        const res = await axios.get("/movies", {
            // headers: { token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken }
            headers: {
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDgyNDQ0NCwiZXhwIjoxNjQ1MjU2NDQ0fQ.K1474oRY6cmLXY9Eb0n2b5YoD12bv1TiWGDiFV5JJU4"
            }
        })
        dispatch(getMoviesSuccess(res.data))
    } catch (error) {
        dispatch(getMoviesFailure())
    }
}

//  create new movie
export const createMovie = async (movie, dispatch) => {
    dispatch(createMoviesStart())
    try {
        const res = await axios.post("/movies/", movie, {
            headers: {
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDgyNDQ0NCwiZXhwIjoxNjQ1MjU2NDQ0fQ.K1474oRY6cmLXY9Eb0n2b5YoD12bv1TiWGDiFV5JJU4"
            }
            // headers: { token: "Bearer" + JSON.parse(localStorage.getItem("user")).accessToken }
        })
        dispatch(createMoviesSuccess(res.data))
        alert("success..")
        window.location.replace("/movielist")

    } catch (error) {
        dispatch(createMoviesFailure())
    }
}







