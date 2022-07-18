import React, { useState } from "react";
import "./list.css"
import {format} from "date-fns"
import { useLocation } from "react-router-dom";
import { DateRange } from 'react-date-range';

//importing components
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import SearchItem from "../../components/searchItem/searchItem";
// import Footer from "../../components/footer/footer";

function List(){
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [OpenDate, setOpenDate] = useState(false)
    const [Options, setOptions] = useState(location.state.options)
    console.log(location)
    return(
        <div>
            <Navbar />
            <Header type="list" />
                <div className="listContainer">
                    <div className="listWrapper">
                        <div className="listSearch">
                            <h1 className="lsTitle">Search</h1>
                            <div className="lsItem">
                                <label> Destination </label>
                                <input placeholder={destination} type="text" />
                            </div>

                            <div className="lsItem">
                                <label> check-in-Date </label>
                                <span onClick={function() { setOpenDate(!OpenDate) }}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy ")}`}</span>    
                                {OpenDate && <DateRange     
                                    onChange={item => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                                }
                            </div>

                            <div className="lsItem">
                                <label> Options </label>
                                <div className="lsOptions">

                                <div className="lsOptionItem">
                                    <span className="isOptionText"> Min Price <small>per night</small></span>
                                    <input type="number " className="lsOptionInput" />
                                </div>

                                <div className="lsOptionItem">
                                    <span className="isOptionText"> Max Price <small>per night</small></span>
                                    <input type="number " className="lsOptionInput" />
                                </div>

                                <div className="lsOptionItem">
                                    <span className="isOptionText">Adult </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={Options.adult}/>
                                </div>

                                <div className="lsOptionItem">
                                    <span className="isOptionText"> Children </span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={Options.children} />
                                </div>

                                <div      className="lsOptionItem">
                                    <span className="isOptionText"> Room </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={Options.room}/>
                                </div>
                                </div>
                            </div>
                            <button> Search </button>
                        </div> 
                        <div className="listResult">
                            <SearchItem />
                            <SearchItem />
                            <SearchItem />
                         </div>
                    </div>
                </div>
            {/* <Footer /> */}
        </div>
    )
}

export default List