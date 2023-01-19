import { Tweet } from 'react-twitter-widgets'

import PageNav from '../../components/PageNav'

export default function Week_0() {
  return (
    <div>
      <div className='response'>
        <img
          src='https://assets.cashpile.io/web/progress/images/cashpile-one-liner.png'
          alt='Slide showing Pay Together app features'
          style={{ width: '55vw' }}
        />
        <div style={{ height: '7.5vh' }}></div>
        <h2>What's your idea's one-liner?</h2>
        <div style={{ height: '2.5vh' }}></div>
        <p>Pay together: Create a fund with others, and pay with it.</p>
        <div style={{ height: '7.5vh' }}></div>
        <h2>Why are you excited about this idea?</h2>
        <div style={{ height: '2.5vh' }}></div>
        <p>
          We're a team of 4 college freshmen. We've never made an app before.
          We've never handled real money before. It's going to be hard, but
          we'll get it done. We were born to do this; it's us or nobody.
        </p>
        <div style={{ height: '7.5vh' }}></div>
        <h2>By Tuesday, people will be able to...</h2>
        <div style={{ height: '2.5vh' }}></div>
        <p>
          ...either explore the app through Prototyping in Adobe XD, or try out
          a basic version of the app through TestFlight.
        </p>
      </div>

      <div>
        <div style={{ height: '5vh' }}></div>
        <Tweet tweetId='1605369153296236546' options={{ align: 'center' }} />
        <div style={{ height: '2.5vh' }}></div>
        <Tweet tweetId='1605369921193611264' options={{ align: 'center' }} />
        <div style={{ height: '2.5vh' }}></div>
        <Tweet tweetId='1605371641445449728' options={{ align: 'center' }} />
        <div style={{ height: '2.5vh' }}></div>
        <Tweet tweetId='1605370822579089409' options={{ align: 'center' }} />
        <div style={{ height: '2.5vh' }}></div>
        <Tweet tweetId='1605375614185140224' options={{ align: 'center' }} />
      </div>
      <div style={{ height: '2.5vh' }}></div>
      <PageNav />
    </div>
  )
}
