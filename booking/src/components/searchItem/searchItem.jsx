import "./searchItem.css";

function SearchItem(){
    return (
        <div className="searchItem">
            <img src="https://th.bing.com/th/id/OIP.NLXsWZrEo1kauVvju6hBkgHaFI?w=240&h=180&c=7&r=0&o=5&pid=1.7" alt="" className="siImg" />   
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance"> 500m from center</span>
                <span className="siTaxiOp">Free airport taxi
                </span>
                <span className="siSubtitle"> Studio Apartment with Air conditioning </span>
                <span className="siFeatures">  Entire studio + 1 bathroom+ 21m<sup>2</sup> 1 full bed</span>
                <span className="siCancelOp"> Free cancellation</span>
                <span className="siCancelOpSubtitle"> You can cancel later, so lock in this great price today! </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span> Excellent </span>
                    <button>8.9</button>
                </div>

                <div className="siDetailsTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>        
        </div>
    )
}

export default SearchItem;