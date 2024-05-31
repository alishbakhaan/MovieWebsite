import { useState, useEffect, React } from 'react'
// import {useNavigate} from 'react-router-dom'
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import '../../../App.css'
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  // const [query, setQuery] = useState("");
  // const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  // const handleKeyUp = (event) => {
  //   if (event.key === "Enter" && query.length > 0) {
  //     navigate(`/search/${query}`);
  //   }
  // };

  // const handleClick = () => {
  //   if (query.length > 0) {
  //     navigate(`/search/${query}`);
  //   }
  // };
  return (
    <div className='relative flex bg-[#04152d] w-full h-[450px] md:h-[700px] align-middle heroBanner'>

      {!loading && (
        <div className="top-0 left-0 absolute opacity-50 backdrop-img w-full h-[450px] object-cover">
          <Img src={background} />
        </div>
      )}

      <div className="top-96 left-0 absolute backdrop-blur-xl w-full h-[250px]"></div>

      <ContentWrapper>
        <div className="relative flex flex-col m-0 text-center text-white align-middle heroBannerContent">
          <span className="mb-3 font-bold text-4xl text-center md:text-5xl title">Welcome.</span>
          <span className="mb-5 md:mb-24 font-medium text-center text-xl md:text-2xl subTitle">
            Millions of movies, TV shows and people to discover.
            ExploreNow.
          </span> 
          {/* <div className="searchInput">
            <input
             type="text"
             placeholder=''
             onChange={(e)=> setQuery(e.target.value)}
             onKeyUp={handleKeyUp}
              />
              <button onClick={handleClick} className='bg-indigo-500 text-white'>Search</button>
          </div> */}
        </div>
      </ContentWrapper>

    </div>
  )
}

export default HeroBanner