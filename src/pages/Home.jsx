import "./home.css"
import { useNavigate } from 'react-router-dom'
import useFetchData from "../custom/useFetchData"

const Home = () => {
  let url = "https://api.themoviedb.org/3/movie/upcoming?api_key=b7661bbc636122424af7195bc2212ff8"
  const data = useFetchData(url)
  const navigate = useNavigate()

  const goToDetails = () => {
    navigate('/details')
  }


  return (
    <section id='homeWrapper'>
      {
        data.map(e => {
          return (
            <div key={e.id} className='card' onClick={goToDetails}>
              <section className='moviePic'>
                <img src={`https://image.tmdb.org/t/p/w185${e.poster_path}`} alt={e.title} />
              </section>
              <section className='detailWrapper'>
                <div className='titleWrapper'>
                  <span>{e.title}</span>
                  <span>(e.vote_average)</span>
                </div>
                <p className='description'>Description</p>
              </section>
            </div>
          )
        })
      }
    </section>
  )
}

export default Home
