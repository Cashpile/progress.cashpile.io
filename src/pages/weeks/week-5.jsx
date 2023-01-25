import React from 'react'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import PageNav from '../../components/PageNav'
import { Tweet } from 'react-twitter-widgets'

export default function Week_5() {
  return (
    <div>
      <YoutubeEmbed embedId='DQlxV24TSMI' />
      <div className='response'>
        <h2>Excalidraw Pitch</h2>
        <div style={{ height: '2.5vh' }}></div>
        <img src='/images/pitch.png' alt='Pitch' style={{ width: '50vw' }} />
      </div>
      <div style={{ height: '5vh' }}></div>
      <Tweet tweetId='1618309880523403264' options={{ align: 'center' }} />
      <div style={{ height: '2.5vh' }}></div>
      <PageNav />
    </div>
  )
}
