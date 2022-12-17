import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';


export default function Home(){
    const [source, setSource] = useState();
    const [slide, setSlide] = useState();
    const [third, setThird] = useState();

    const link = 'https://api.thecatapi.com/v1/images/search?limit=10';

    useEffect(() => {
        const fetchImage = async () => {
          try {
            const resp = await axios.get(link);
            const source = resp.data[0].url;
            const slide = resp.data[1].url;
            const third = resp.data[2].url;

            setSource(source);
            setSlide(slide);
            setThird(third);
    
          } catch (error) {
            alert(error);
          }
        }; 
        fetchImage();
      }, [link])

    return(
        <div>
            <Container>
                <h1>Cat Api on React with React Router</h1>
            </Container>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={source}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={third}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <p>Random pictures are cool as no need to choose what are better</p>
        </div>
    )
}