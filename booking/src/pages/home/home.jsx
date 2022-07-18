import "./home.css";
import React from "react";

//importing components
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Featured from "../../components/featured/featured";
import PropertyList from "../../components/propertyList/propertyList";
import FeaturedProperties from "../../components/featuredProperties/featuredProperties";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";

function Home() {
    return(
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homTitle"> Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love </h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Home