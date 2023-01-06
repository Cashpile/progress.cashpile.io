import LoomVideo from '../../components/LoomVideo'

export default function Week_1() {
  const loomVideo = LoomVideo(
    'https://www.loom.com/embed/d696ec31a28343259c7667ae25d2de4e'
  )
  return (
    <div className='response'>
      <img
        src='https://assets.cashpile.io/web/progress/images/demo-day-goal.jpg'
        alt='Demo Day Goal'
        style={{ width: '35vw' }}
      />
      <div style={{ height: '5vh' }}></div>
      <img
        src='https://assets.cashpile.io/web/progress/images/periodic-goals.jpg'
        alt='Periodic Goals'
        style={{ width: '70vw' }}
      />
      <div style={{ height: '5vh' }}></div>
      {loomVideo}
    </div>
  )
}
