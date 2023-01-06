import { Link } from 'react-router-dom'

export default function BackArrow() {
  return (
    <Link to='/'>
      <div id='arrowAnim' className='BackArrow'>
        <div className='arrowSliding'>
          <div className='arrow'></div>
        </div>
        <div className='arrowSliding delay1'>
          <div className='arrow'></div>
        </div>
        <div className='arrowSliding delay2'>
          <div className='arrow'></div>
        </div>
        <div className='arrowSliding delay3'>
          <div className='arrow'></div>
        </div>
      </div>
    </Link>
  )
}
