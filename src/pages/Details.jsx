import useDetails from "../custom/useDetails"
import "./details.css"

const Details = () => {
  let detail = useDetails()

  return (
    <section id='detailWrapper'>
      <section className='detailPic'>
        <img src={`https://image.tmdb.org/t/p/w185${detail.poster_path}`} alt={detail.title} />
      </section>
      <section className='details'>
        <h1>{detail.title}<span>(&#9733; {detail.vote_average})</span> </h1>
        <h3>Year | Length | Director</h3>
        <h3>Cast: Act1, act2 ... </h3>
        <p>{detail.overview}</p>
      </section>
    </section>
  )
}

export default Details
