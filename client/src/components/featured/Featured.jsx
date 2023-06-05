import useFetch from '../../hooks/useFetch
import './featured.css'

const Featured = () => {
  const { data, loading, error, reFetch } = useFetch("/hotels/countByCity?cities=dublin,madrid,london")

  return (
    <div className='featured'>
      {loading ? ("Loading please wait") : (<><div className='feautredItem'>
        <img
          src='https://cache.marriott.com/marriottassets/marriott/DUBWI/dubwi-exterior-evening-9818-hor-clsc.jpg'
          alt='hotel in dublin'
          className='featuredImg'
        />

        <div className='featuredTitles'>
          <h2>Dublin</h2>
          <h3>{data[0]} properties</h3>
        </div>
      </div>

      <div className='feautredItem'>
        <img
          src='https://cache.marriott.com/marriottassets/marriott/DUBWI/dubwi-exterior-evening-9818-hor-clsc.jpg'
          alt='hotel in dublin'
          className='featuredImg'
        />

        <div className='featuredTitles'>
          <h2>Madrid</h2>
          <h3>{data[1]} properties</h3>
        </div>
      </div>

      <div className='feautredItem'>
        <img
          src='https://cache.marriott.com/marriottassets/marriott/DUBWI/dubwi-exterior-evening-9818-hor-clsc.jpg'
          alt='hotel in dublin'
          className='featuredImg'
        />

        <div className='featuredTitles'>
          <h2>London</h2>
          <h3>{data[2]} properties</h3>
        </div>
      </div></>)}
    </div>
  )
}

export default Featured
