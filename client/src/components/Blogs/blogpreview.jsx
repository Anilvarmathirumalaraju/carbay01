import React from 'react'
import { useLocation } from 'react-router-dom'
import './blogpreview.css'
import WestIcon from '@mui/icons-material/West';
import Headersub from '../../pages/Header/header2';

const Blogpreview = () => {

    const location = useLocation();
    const selectedblogdata = location.state ? location.state.selectedblog : null;
    const descPoints = selectedblogdata.desc.split('\n');
    const blogkeywords = selectedblogdata.keywords
    console.log(blogkeywords)

    const searchOnGoogle = (query) => {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    };
  return (
   <>
     <Headersub/>
     <div className='blogpreview-con'>
        <div className='title-back'>
        <h1>{selectedblogdata.title}</h1>
        {/* <div>{}</div> */}
        </div>
        
         <div className='blogimage'>
             <img src={selectedblogdata.img} alt='blogimage'/>
         </div>
         <div className='desc'>
                    {descPoints.map((point, index) => (
                        <p key={index}>{point}</p>
                    ))}
        </div>
        <p>
        Keywords:{' '}
        {blogkeywords.map((keyword, index) => (
          <React.Fragment key={index}>
            {index > 0 && ', '}
            <span
              style={{ cursor: 'pointer' ,color:'blue' }}
              onClick={() => searchOnGoogle(keyword)}
            >
              {keyword}
            </span>
            </React.Fragment>
          ))}
        </p>
        
     </div>
   </>
  )
}

export default Blogpreview