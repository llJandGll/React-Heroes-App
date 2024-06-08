import { Link } from "react-router-dom"
import { PropTypes, string } from "prop-types"

const CharactersByHero = ({ alter_ego , characters}) => {
  
  if( alter_ego === characters) return;

  return (
    <p> { characters }</p>
  )
};



export const HeroCard = ({ 
  id,
  superhero,
  // publisher,
  alter_ego,
  first_appearance,
  characters, 
}) => {
  const heroImageUrl = `/React-Heroes-App/heroes/${id}.jpg`;

  
  
  
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="row no-gutters">
        <div className="col-4" >
          <img src={ heroImageUrl } className="card-img" alt={ superhero }/>
        </div>

        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title"> { superhero }</h5>

            <p className="card-text"> { alter_ego }</p>


            {/* Formas de hacer */}

            <CharactersByHero alter_ego={ alter_ego } characters={ characters }/>

            {/* {
              alter_ego !== characters  && (<p> { characters }</p>)
            } */}

            <p className="card-text">
              <small className="text-muted"> { first_appearance }</small>
            </p>

            <Link to={`/hero/${ id }`}>
              Ver más...
            </Link>

          </div>
        </div>
      </div>
    </div>
    
  )
}

HeroCard.propTypes = {
  "id" : string.isRequired,
  "superhero" : PropTypes.string.isRequired,
  "publisher" : PropTypes.string.isRequired,
  "alter_ego" : PropTypes.string.isRequired,
  "first_appearance" : PropTypes.string.isRequired,
  "characters" : PropTypes.string.isRequired,
}


CharactersByHero.propTypes = {
  "alter_ego" : PropTypes.string.isRequired,
  "characters" : PropTypes.string.isRequired,
}