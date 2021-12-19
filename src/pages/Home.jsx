import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Categories from "../components/Categories"
// import styled from "styled-components"


const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
        </div>
    )
}

export default Home
