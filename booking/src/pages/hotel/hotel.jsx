import "./hotel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocation, faCircleXmark, faCircleArrowLeft, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';

//importing  components
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";
import { useState } from "react";


function Hotel(){
    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)
   const photos = [
        {
            src: "https://th.bing.com/th/id/OIP.4ZNqP_-FxvZ43Zz4s6rLjgHaE8?w=233&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            src: "https://th.bing.com/th/id/OIP.NLXsWZrEo1kauVvju6hBkgHaFI?w=224&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            src: "https://th.bing.com/th/id/OIP.FTdifV-P6Nr-C65AxoQFxAHaC9?w=301&h=139&c=7&r=0&o=5&pid=1.7"
        },
        {
            src: "https://th.bing.com/th/id/OIP.GyE_xOT192jpzX8nGlOKDgHaE8?w=232&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            src: "https://th.bing.com/th/id/OIP.ea1gavvmVGBWChzLtpx5lwHaE7?w=232&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            src: "https://th.bing.com/th/id/OIP.dBKX-tqEBcTR0r6FQa1jlgHaE8?w=257&h=180&c=7&r=0&o=5&pid=1.7"
        },
   ] 

   function handleOPen(i){
    setSlideNumber(i);
    setOpen(!open);
   }
   const handleMove = (direction) => {
    let newSlideNumber;
    if(direction === "l"){
        newSlideNumber = slideNumber === 0 ? 5 :slideNumber-1
    }
    else{
        newSlideNumber = slideNumber === 5 ? 0 :slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
   }
    return(
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
             { open &&  <div className="slider">
             <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)}/>

             <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove("l")} />
             <div className="sliderWrapper">
                <img src={photos[slideNumber].src}  alt="" className="sliderImg" />
             </div>
             <FontAwesomeIcon onClick={() => handleMove("l")} icon={faCircleArrowRight} className="arrow"/>
                </div>}
                 <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now</button>
                     <h1 className="hotelTitle">Grand Hotel</h1>
                     <div className="hotelAddres">
                        <FontAwesomeIcon icon={faLocation}/>
                        <span>Elton St 125 New york</span>
                        </div>
                        <span className="hotelDistance">
                            Excellent location - 500m from center
                        </span>
                        <span className="hotelPriceHighlight">
                            Book a stay over $114 at this property and get a free airport taxi
                        </span>
                        <div className="hotelImages">
                            {photos.map((photo, i) => (
                                <div className="hotelImgWrapper">
                                    <img 
                                    onClick={() => handleOPen(i)} 
                                    src={photo.src} alt="" className="hotelImg" />
                                </div>
                            ))}
                        </div>

                        <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                                <p className="hotDesc">Located a 5-minute walk from st. Florain's Gate in Krakow, Tower Street Apartments has accomodations with air conditioning and free wifi. The units come with hardwood floors and feature a fully equipped kitchenette with a microwave. a flat-screen TV, and a private bathroom with shower and a hairdryer. A fridge ia also offered, as well as an electric tea pot and a coffee machine. Popular points of intrest near the apartment include cloth hall, main market square and town hall tower. the nearest airport is john paul II internationalkrak6w+Balice, 16.1 km from tower street apartments, and the property offers a paid airport shuttle service.</p>
                            </div>
                            <div className="hotelDetailsPrice">
                                <h1>Perfect for a 9-night stay!</h1>
                                <span>
                                    Located in the real heart of Krakow, this property has an excellent locationscore of 9.8!
                                </span>
                                <h2><b>$945</b> (9 nights)</h2>
                                <button>Reserve or Book Now</button>
                            </div>
                        </div>
                     </div>
                     <MailList/>
                     <Footer />
                 </div>
            </div>
    )
}

export default Hotel