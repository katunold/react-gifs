import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = ({data}) => {
  let gifs = data.length !== 0
    ? data.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id}/>)
    : <NoGifs/>
  return(
    <ul className="gif-list">
       {gifs}
    </ul>
  );
};

export default GifList;
