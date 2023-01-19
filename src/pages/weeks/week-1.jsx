import LoomEmbed from '../../components/LoomEmbed'
import PageNav from '../../components/PageNav'

export default function Week_1() {
  const loomEmbed = LoomEmbed(
    'https://www.loom.com/embed/d696ec31a28343259c7667ae25d2de4e'
  )
  return (
    <div>
      {loomEmbed}
      <div className='response'>
        <img
          src='https://assets.cashpile.io/web/progress/images/periodic-goals.jpg'
          alt='Periodic Goals'
          style={{ width: '50vw' }}
        />
        <div style={{ height: '5vh' }}></div>
        <img
          src='https://assets.cashpile.io/web/progress/images/demo-day-goal.jpg'
          alt='Demo Day Goal'
          style={{ width: '25vw' }}
        />
      </div>{' '}
      <div style={{ height: '5vh' }}></div>
      <PageNav />
    </div>
  )
}
