import { Navigate, useNavigate, useParams } from "react-router-dom"

import {  getHeroById } from "../helpers"
import { useMemo } from "react";
// import { useEffect } from "react";

export const HeroPage = () => {


  const navigate = useNavigate()

  const { id , /* ...rest */ } = useParams();

  const imgUrl = `/React-Heroes-App/heroes/${id}.jpg`;

  const hero = useMemo( () => getHeroById( id ) , [ id ])

  console.log(hero)


  if (!hero) {
    return <Navigate to={"/"} />
  }


  // useEffect(() => {
  //   if (!hero) {
  //      navigate("/dc")
  //   }
  
  
  // }, [ hero , navigate])
  
  // if (!hero) {
  //   return null
  // }

  const onReturnBack = () => {
    navigate(-1)
  };

  return (
    <div className="row mt-5 animate__animated  animate__fadeInLeft">
      <div className="col-4">
        <img 
          src={ imgUrl } 
          alt={ hero.superhero } 
          className="img-thumbnail"
          // style={{ height : 500}}
        />
        
      </div>


      <div className="col-8">
        <h3> { hero.superhero }</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b> alter ego : </b>  { hero.alter_ego }</li>
          <li className="list-group-item"> <b> publisher: </b>  { hero.publisher }</li>
          <li className="list-group-item"> <b> first appearance : </b>  { hero.first_appearance }</li>
        </ul>


        <h5 className="mt-3"> Characters</h5>
        <p> { hero.characters }</p>

        <button 
          className="btn btn-outline-info"
          onClick={ onReturnBack }
        >
          Regresar
        </button>
      </div>

  
    </div>
  )
}
