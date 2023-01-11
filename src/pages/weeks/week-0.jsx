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
        <div style={{ height: '7.5vh' }}></div>
        <h2>My Twitter Feedback</h2>
        <div style={{ height: '1vh' }}></div>
        <p>
          <i>Twitter Widgets usually show up after refreshing the page.</i>
        </p>
        <div style={{ height: '2.5vh' }}></div>
        {/* flex */}
        <div className='twitter'>
          <blockquote className='twitter-tweet'>
            <p lang='en' dir='ltr'>
              Watch out for copyright claims!
            </p>
            &mdash; Joonbeom (Daniel) Kwon (@djbkwon){' '}
            <a href='https://twitter.com/djbkwon/status/1605369153296236546?ref_src=twsrc%5Etfw'>
              December 21, 2022
            </a>
          </blockquote>{' '}
          <div style={{ height: '2.5vh' }}></div>
          <blockquote className='twitter-tweet'>
            <p lang='en' dir='ltr'>
              Here&#39;s two questions I thought of: How would you compete with
              major retailers? What would be the incentive for sellers to
              migrate to KindShop?
            </p>
            &mdash; Joonbeom (Daniel) Kwon (@djbkwon){' '}
            <a href='https://twitter.com/djbkwon/status/1605369921193611264?ref_src=twsrc%5Etfw'>
              December 21, 2022
            </a>
          </blockquote>{' '}
          <div style={{ height: '2.5vh' }}></div>
          <blockquote className='twitter-tweet'>
            <p lang='en' dir='ltr'>
              On your website or app, would the user have to log-in into each
              platform for you to fetch data? If so, that feels like a
              bottleneck to me.
            </p>
            &mdash; Joonbeom (Daniel) Kwon (@djbkwon){' '}
            <a href='https://twitter.com/djbkwon/status/1605371641445449728?ref_src=twsrc%5Etfw'>
              December 21, 2022
            </a>
          </blockquote>{' '}
          <div style={{ height: '2.5vh' }}></div>
          <blockquote className='twitter-tweet'>
            <p lang='en' dir='ltr'>
              Interesting - would the user turn the app on before starting a
              conversation? Making that process seamless would be my goal.
            </p>
            &mdash; Joonbeom (Daniel) Kwon (@djbkwon){' '}
            <a href='https://twitter.com/djbkwon/status/1605370822579089409?ref_src=twsrc%5Etfw'>
              December 21, 2022
            </a>
          </blockquote>{' '}
          <div style={{ height: '2.5vh' }}></div>
          <blockquote className='twitter-tweet'>
            <p lang='en' dir='ltr'>
              1. How many people are willing to leave everything behind? 2.
              Would you consider language barriers?
            </p>
            &mdash; Joonbeom (Daniel) Kwon (@djbkwon){' '}
            <a href='https://twitter.com/djbkwon/status/1605375614185140224?ref_src=twsrc%5Etfw'>
              December 21, 2022
            </a>
          </blockquote>{' '}
        </div>
      </div>
      <PageNav />
    </div>
  )
}
