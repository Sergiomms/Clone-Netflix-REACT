import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow/MovieRow'
import './App.css'
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie'

export default () => {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //Pegando FeaturedData
      let originals = list.filter(i => i.slug ===  'originals')
      let randomChosen = Math.floor(Math.random() * originals[0].items.results.length -1)
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  return (

    <div className="page">

      {/* Ele só poderá aparecer quando houver um filme/ serie dentro de uma lista para que ele possa ser mostrado */}
      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }      

      <section className="lists">
        {movieList.map((item, key) =>(
          //Passando as props que meu componente vai receber
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  )
}