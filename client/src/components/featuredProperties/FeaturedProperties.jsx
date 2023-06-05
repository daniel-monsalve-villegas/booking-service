import useFetch from '../../hooks/useFetch'

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch('/hotels')

  return (
    <div className='fp'>
      <div className='fpItem'>
        <img src='' alt='' className='fpImg' />
        <span className='fpName'>ApartHotel Stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties
