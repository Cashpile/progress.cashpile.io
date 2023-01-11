import LoomVideo from '../../components/LoomVideo'
import PageNav from '../../components/PageNav'

export default function Week_2() {
  // return LoomVideo(
  //   'https://www.loom.com/embed/d696ec31a28343259c7667ae25d2de4e'
  // )
  // currently being updated
  return (
    <div>
      <div className='response'>
        <h2>Give us a moment...</h2>
        <div style={{ height: '2.5vh' }}></div>
        <p>
          We're currently setting up{' '}
          <a href='https://twitter.com/cashpileapp'>
            @<u>CashpileApp</u>
          </a>
          . We'll post here soon!
        </p>
      </div>
      <PageNav />
    </div>
  )
}
