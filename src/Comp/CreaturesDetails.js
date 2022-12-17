import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';

const CreaturesDetails = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [weight, setWeight] = useState();
  const [description, setDescription] = useState();
  const [life, setLife] = useState();
  const [temperament, setTemperament] = useState();
  const [source, setSource] = useState();
  const [origin, setOrigin] = useState();
  const [indoor, setIndoor] = useState();
  const [lap, setLap] = useState();
  const [adaptability, setAdaptability] = useState();
  const [love, setLove] = useState();
  const [child, setChild] = useState();
  const [allergy, setAllergy] = useState();
  const [dog, setDog] = useState();
  const [energy, setEnergy] = useState();
  const [intelegence, setIntelegence] = useState();
  const [social, setSocial] = useState();
 

  const url = `https://api.thecatapi.com/v1/breeds/${id}`;
  const urlI = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`;


  useEffect(() => {
    const fetchData = async() => {
      try {
        const resp = await axios.get(url);
        const cating = resp.data;
        setName(cating.name);
        setWeight(cating.weight.metric);
        setDescription(cating.description);
        setLife(cating.life_span);
        setTemperament(cating.temperament);
        setOrigin(cating.origin);
        setIndoor(cating.indoor);
        setLap(cating.lap);
        setAdaptability(cating.adaptability);
        setLove(cating.affection_level);
        setChild(cating.child_friendly);
        setAllergy(cating.hypoallergenic);
        setDog(cating.dog_friendly);
        setEnergy(cating.energy_level);
        setIntelegence(cating.intelligence);
        setSocial(cating.social_needs);
        

      } catch (error){
        alert(error);
      }
    }
    fetchData();
  }, [url]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const resp = await axios.get(urlI);
        const source = resp.data[0].url;
        console.log(source);
        setSource(source)

      } catch (error) {
        alert(error);
      }
    }; 
    fetchImage();
  }, [urlI])



  return (
    <Container>
          <div key={id} className='container-fluid,'>
            <h2>{name}</h2>
            <h3> {temperament} </h3>
            <br/>
            <img src={source} alt='id' className="w-100" />
            <br/>
            <p>
              The life length is <strong>{life} years</strong>
            <br/>
              The weight is <strong>{weight} kg</strong>
            <br/>
               The origin is {origin}
            <br/>
            <br/>
               {description}
            </p>  
           <div className="row"> 
               <div className="col-xs-6 col-lg-2">
                <p>Indoor</p>
               </div>
               <div className="col-xs-6 col-lg-10">
                  <ProgressBar variant="success" now={indoor*10} />
               </div>
           </div>
           <div className="row"> 
               <div className="col-xs-6 col-lg-2">
                <p>Lap</p>
               </div>
               <div className="col-xs-6 col-lg-10">
                  <ProgressBar variant="success" now={lap*10} />
               </div>
           </div>
           <div className="row"> 
               <div className="col-xs-6 col-lg-2">
                <p>Adaptability</p>
               </div>
               <div className="col-xs-6 col-lg-10">
                  <ProgressBar variant="success" now={adaptability*10} />
               </div>
           </div>
           <div className="row"> 
               <div className="col-xs-6 col-lg-2">
                <p>Affection level</p>
               </div>
               <div className="col-xs-6 col-lg-10">
                  <ProgressBar variant="success" now={love*10} />
               </div>
           </div>
           <div className="row"> 
               <div className="col-xs-6 col-lg-2">
                <p>Child-friendly</p>
               </div>
               <div className="col-xs-6 col-lg-10">
                  <ProgressBar variant="success" now={child*10} />
               </div>
           </div>
           <div className="row"> 
               <div className="col-xs-6 col-lg-2">
                <p>Dog-friendly</p>
               </div>
               <div className="col-xs-6 col-lg-10">
                  <ProgressBar variant="success" now={dog*10} />
               </div>
           </div>
           <div className="row"> 
               <div className="col-xs-6 col-lg-2">
                <p>Hypoallergenic</p>
               </div>
               <div className="col-xs-6 col-lg-10">
                  <ProgressBar variant="success" now={allergy*10} />
               </div>
           </div>
           <div className="row"> 
               <div className="col-xs-6 col-lg-2">
                <p>Energy level</p>
               </div>
               <div className="col-xs-6 col-lg-10">
                  <ProgressBar variant="success" now={energy*10} />
               </div>
           </div>
           <div className="row"> 
               <div className="col-xs-6 col-lg-2">
                <p>Intelegence</p>
               </div>
               <div className="col-xs-6 col-lg-10">
                  <ProgressBar variant="success" now={intelegence*10} />
               </div>
           </div>
           <div className="row w-100"> 
               <div className="col-xs-6 col-lg-2">
                <p>Social needs</p>
               </div>
               <div className="col-xs-6 col-lg-10">
                  <ProgressBar variant="success" now={social*10} />
               </div>
               <br/><br/>
           </div>
          </div>
    </Container>
  )
  };
  
  export default CreaturesDetails;
  