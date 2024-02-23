import './carservice.css'
import maruthisuziki from '../../assets/carimages/maruthisuziki.png'
import hyundai from '../../assets/carimages/HYUNDAI.jpeg'
import tata from '../../assets/carimages/TATA.jpeg'
import bmw from '../../assets/carimages/BMW.jpeg'
import benz from '../../assets/carimages/BENZ.jpeg'
import ford from '../../assets/carimages/FORD.jpeg'
import { useNavigate } from 'react-router-dom'

const Carservice = (()=>{
    const navigate = useNavigate()
    return(
        <>
           <div className="car-service-section">
                <p>We proudly represent an assortment of top-tier car brands in our service.</p>
                <div className='cartypes'>
                    <img src={bmw} alt='maruthi-suziki' onClick={()=>{navigate('/services')}}/>
                    <img src={hyundai} alt='hyundai' onClick={()=>{navigate('/services')}}/>
                    <img src={tata} alt='hyundai' onClick={()=>{navigate('/services')}}/>
                    <img src={maruthisuziki} alt='hyundai' onClick={()=>{navigate('/services')}}/>
                    <img src={benz} alt='hyundai' onClick={()=>{navigate('/services')}}/>
                    {/* <img src={ford} alt='hyundai'/> */}
                </div>
                <div className='more-cartypes' >
                    <button onClick={()=>{navigate('/services')}}>More Car brands</button>
                </div>
           </div>
        </>
    )
})
export default Carservice