import "./home.css"
import { useNavigate } from 'react-router-dom'
import useFetchData from "../custom/useFetchData"
import { useDispatch, useSelector } from "react-redux"
import { setDetails } from "../store/detailSlice"


const Home = () => {
  
  let url = useSelector(state=> state.url)
  const data = useFetchData(url)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const goToDetails = (e) => {
    // console.log(e)
  
    dispatch(setDetails(e))
    setTimeout(() => {
      navigate('/details')
    }, 1000)
  }

  return (
    <section id='homeWrapper'>
      {
        data.map(e => {
          return (
            <div key={e.id} className='card' onClick={() => goToDetails({ ...e })}>
              <section className='moviePic'>
                <img src={`https://image.tmdb.org/t/p/w185${e.poster_path}`} alt={e.title} />
              </section>
              <section className='detailWrapper'>
                <div className='titleWrapper'>
                  <span>{e.title}</span>
                  <span>{e.vote_average} &#9733;</span>
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
