import { useState, useEffect, React } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../assets/movix-logo.svg";
import '../../App.css';

const Header = () => {

  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState("");
  const [desktopSearch, setdesktopSearch] = useState("");
  const location = useLocation();

  // search
  const handleKeyUp = (event) => {
    if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`);
        setTimeout(() => {
          setdesktopSearch(false);
        }, 1000);
    }
};

  const handleClick = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  // search end
// desktop search
  const desktopOpenSearch = () => {
    setMobileMenu(false)
    setdesktopSearch(true)
  }
  
  // mobile search
  const openSearch = () => {
    setMobileMenu(false)
    setShowSearch(true)
  }

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`);
        setTimeout(() => {
            setShowSearch(false);
        }, 1000);
    }
};

const navigationHandler = (type) => {
   if(type === "movie"){
    navigate("/explore/movie");
   }else{
    navigate("/explore/tv");
   }
   setMobileMenu(false);
};
  // mobile nav
  const openMobileMenu = () => {
    setMobileMenu(true)
    setShowSearch(false)
  }
 
  // scroll transition
  useEffect(() => {
    window.scrollTo(0, 0);
}, [location]);

  const controlNavbar = () => {
    console.log(window.scrollY);
    if(window.scrollY > 200){
      if(window.scrollY > lastScrollY && !mobileMenu){
        setShow("hide")
      }else{
        setShow("show")
      }
    }
    else{
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)
    return()=>{
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);


  return (
    <header className={`${mobileMenu ? "mobileView" : ""} ${show} header z-10 fixed flex backdrop-blur-md w-full h-16 transition-all ease-in translate-y-0 align-middle `}>
      <div className="flex flex-row justify-between m-auto p-5 w-[100%] max-w-[1200px] align-middle wrapper">
        <div className="cursor-pointer logo">
          <img className='h-11' src={logo} alt="" />
        </div>

        {desktopSearch && ( 
        <div className="flex max-md:hidden w-1/2 align-middle searchInput">
          <input className='border-0 bg-white pr-4 pl-4 rounded-l-3xl w-full h-10 text-sm outline-0'
            type="text"
            placeholder='Search for a movie or tv show....'
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleKeyUp}
          />
          <button onClick={handleClick} className='border-0 rounded-r-3xl w-[150px] h-10 text-sm text-white cursor-pointer btn outline-0'>Search</button>
          <VscChromeClose
                className='flex-shrink-0 m-2 text-xl cursor-pointer'
                onClick={() => setdesktopSearch(false)}
              />
        </div>)}
       

        <ul className='md:flex hidden list-none align-middle menuItems'>
          <li className='relative flex mx-4 my-2 h-16 font-medium text-white hover:text-[#da2f68] transition-all cursor-pointer align-middle ease-in menuItem'><HiOutlineSearch className='text-xl' onClick={desktopOpenSearch}/></li>
          <li className='relative flex mx-4 my-2 h-16 font-medium text-white hover:text-[#da2f68] transition-all cursor-pointer align-middle ease-in menuItem' onClick={() => navigationHandler("movie")}>Movies</li>
          <li className='relative flex mx-4 my-2 h-16 font-medium text-white hover:text-[#da2f68] transition-all cursor-pointer align-middle ease-in menuItem' onClick={() => navigationHandler("tv")}>TV Shows</li>
        </ul>

        <div className="flex gap-5 md:hidden align-middle mobilemenuitems">
          <HiOutlineSearch className='text-white text-xl hover:text-[#da2f68]' onClick={openSearch} />
          {mobileMenu ? (<VscChromeClose onClick={() => setMobileMenu(false)} className='text-white text-xl hover:text-[#da2f68]' />) : (<SlMenu className='text-white text-xl hover:text-[#da2f68]' onClick={openMobileMenu} />)}
        </div>
      </div>

      {showSearch && (
        <div className="top-16 absolute md:hidden bg-white w-full h-16 searchBar">
    
            <div className="flex mt-3 w-full h-10 align-middle searchInput">
              <input
              className='border-0 bg-white pr-4 md:pr-8 pl-4 md:pl-8 w-full text-sm outline-0'
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose
                className='flex-shrink-0 m-2 text-xl cursor-pointer'
                onClick={() => setShowSearch(false)}
              />
            </div>
         
        </div>
      )}


    </header>
  )
}

export default Header