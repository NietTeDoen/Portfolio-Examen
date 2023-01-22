import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

function Home(){
    return(
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <Header/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Home;