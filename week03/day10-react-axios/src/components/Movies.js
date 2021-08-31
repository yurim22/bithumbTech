import React from "react";

function Movies({ id, year, title, summary, poster, genres }) {
  return (
    <div className='movie'>
      <img src={poster} alt={title}/>
      <h3>Title : {title}</h3> <br /> 
      <h2>{year}년 작품</h2> <br/> 
      요약 : {summary} <br/>
      장르 : {genres}
      <hr />
    </div>
  );
}

export default Movies;
