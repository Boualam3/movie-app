import React, { useState, useEffect } from 'react';
import './ListItem.css'
import Play from '@material-ui/icons/PlayArrow';
import axios from 'axios';
import { Link } from "react-router-dom"





const ListItem = ({ item }) => {
  const [movie, setMovie] = useState({})
  // console.log(item);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2Q3MzE2MzAzZTMwOGIwYTAxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDkxNTI1NCwiZXhwIjoxNjQ1MzQ3MjU0fQ.d71O6UQkFVPDX5kl3ki-3UqclhmIcya_sHuUfbYdxdk"
          }
        })
        setMovie(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getMovies()
  }, [item])
  // console.log(movie);

  return (
    <>
      <div className='listItems'  data-aos="zoom-in"  data-aos-duration="1500" >
        <img src={movie.img} alt="" />
        <div className="itemInfo">

          <div className="itrmInfoTop">
            <h6 className='text-center'>{movie.title}</h6>
            <span >Duration :&#160;{movie.duration}</span><br />
            <span>Release :&#160;&#160;{movie.year}</span><br />
            <span>Genra :&#160;&#160;{movie.genre}</span><br />
            {/* render to video page */}
            <Link to={`/watch/` + movie._id}>
              <button><Play />watch</button>

            </Link>
          </div>

        </div>
      </div>
    </>
  )
};

export default ListItem;
