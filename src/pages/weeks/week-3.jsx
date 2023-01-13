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
        <h2>Our Score</h2>
        <div style={{ height: '2.5vh' }}></div>
        <img
          src='https://assets.cashpile.io/web/progress/images/score.jpeg'
          alt='Our Score'
          style={{ width: '25vw' }}
        />
        <div style={{ height: '2.5vh' }}></div>
        <p>
          <i>
            We're still developing Cashpile, so our score has never left zero.
            Bummer!
          </i>
        </p>
        <div style={{ height: '7.5vh' }}></div>
        <h2>Tweets</h2>
        <div style={{ height: '1vh' }}></div>
        <p>
          <i>Twitter Widgets usually show up after you refresh the page.</i>
        </p>
        <div style={{ height: '2.5vh' }}></div>
        <blockquote className='twitter-tweet'>
          <p lang='en' dir='ltr'>
            We&#39;re still developing Cashpile, so our score has never left
            zero. Bummer!{' '}
            <a href='https://t.co/zHQ1DFG9BJ'>pic.twitter.com/zHQ1DFG9BJ</a>
          </p>
          &mdash; Cashpile (@CashpileApp){' '}
          <a href='https://twitter.com/CashpileApp/status/1613079733335633922?ref_src=twsrc%5Etfw'>
            January 11, 2023
          </a>
        </blockquote>{' '}
        <script
          async
          src='https://platform.twitter.com/widgets.js'
          charSet='utf-8'
        ></script>
      </div>
      <PageNav />
    </div>
  )
}
