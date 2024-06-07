import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from '../../hooks';
import { getHeroByName } from "../helpers";

import { HeroCard } from "../components"

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();


  const { q = "" } = queryString.parse( location.search )
  const heroes = getHeroByName( q )

  // *
  const showSearch = q.length === 0;

  console.log(showSearch)

  // *Using the custom hook useForm
  const { searchText ,onInputChange  } = useForm({
    searchText : q
  });


  const onSearchSubmit = ( event ) => {
    event.preventDefault();
    // if ( searchText.trim().length === 0) ;
    // if( searchText.trim().length <= 1) return;
    

    navigate(`?q=${ searchText.toLowerCase().trim() }`);



  };


  return (
    <>
      <div className="row">

        <h1>Busqueda</h1>
        <hr />

        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form action="" onSubmit={ onSearchSubmit }>
            <input 
              type="text" 
              placeholder="buscar heroe"
              className="form-control"
              autoComplete="off"
              name="searchText"     
              onChange={ onInputChange }
              value={ searchText }   
              
              />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Search
            </button>

          </form>
        </div>

        <div className="col-7">
          <h4> Results </h4>
          <hr />

          {/* EMPIEZA LA RENDERIZACION  O MUESTREO DE CADA PARTE  */}

          {/* FOrmas de mostrar el mensaje */}
          {/* {
            //? primeraforma
            ( q === "" )

            ? <div className="alert alert-info"> Search a hero  </div> 
            : ( heroes.length === 0) ? <div className="alert alert-danger">  No hero with <b> { q }</b> </div>
            :
            
              heroes.map( ( hero ) => (
                <HeroCard key={ hero.id } {...hero} />
                
              ))
            
            
          } */}


          {/*//? Segunda Forma */}

          <div className="alert alert-info animate__animated animate__fadeIn" style={{ display : showSearch ? "" : "none"}}> 
            Search a hero  
          </div> 

          <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display : heroes.length===0 && !showSearch ? "block" : "none"}}>  
            No hero with <b> { q }</b> 
          </div>
     
          {
                heroes.map( ( hero ) => (
                  <HeroCard key={ hero.id } {...hero} />
                  
                ))
          }


        </div>
      </div>
    </>
  )
}




