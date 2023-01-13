import LoomVideo from '../../components/LoomVideo'
import PageNav from '../../components/PageNav'

export default function Week_2() {
  const loomVideo = LoomVideo(
    'https://www.loom.com/embed/2cda75013f5143919d7cee45010bae36'
  )
  return (
    <div>
      <div className='response'>
        <h2>Here's a 1 minute demo!</h2>
        <div style={{ height: '2.5vh' }}></div>
        {loomVideo}
        <div style={{ height: '7.5vh' }}></div>
        <h2>View our tweet!</h2>
        <div style={{ height: '1vh' }}></div>
        <p>
          <i>Twitter Widgets usually show up after you refresh the page.</i>
        </p>
        <blockquote class='twitter-tweet'>
          <p lang='en' dir='ltr'>
            This winter break, we&#39;re building Cashpile: a group payment app
            that helps friends save money together for future trips.
            <br />
            <br />
            We&#39;re proud to be a part of{' '}
            <a href='https://twitter.com/_buildspace?ref_src=twsrc%5Etfw'>
              @_buildspace
            </a>
            &#39;s Nights &amp; Weekends S2.
            <br />
            <br />
            Here&#39;s a 1m demo by{' '}
            <a href='https://twitter.com/djbkwon?ref_src=twsrc%5Etfw'>
              @djbkwon
            </a>
            !<a href='https://t.co/h3KahnJlD9'>https://t.co/h3KahnJlD9</a>
          </p>
          &mdash; Cashpile App (@CashpileApp)
          <a href='https://twitter.com/CashpileApp/status/1613761100818026498?ref_src=twsrc%5Etfw'>
            January 13, 2023
          </a>
        </blockquote>
        <PageNav />
      </div>
    </div>
  )
}
