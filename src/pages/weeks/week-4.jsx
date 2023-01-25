import React from 'react'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import PageNav from '../../components/PageNav'
import { Tweet } from 'react-twitter-widgets'

export default function Week_4() {
  return (
    <div>
      <YoutubeEmbed embedId='A4DqJ_mFVec' />
      <div className='response'>
        <a href='https://simplest-happen-010806.framer.app/'>
          <h2>Landing Page</h2>
        </a>
        <div style={{ height: '2.5vh' }}></div>
        <a href='https://simplest-happen-010806.framer.app/'>
          <img
            src='/images/framer.png'
            alt='Landing Page'
            style={{ width: '15vw' }}
          />
        </a>
        <div style={{ height: '5vh' }}></div>
        <a href='https://www.linkedin.com/company/90164568'>
          <h2>LinkedIn</h2>
        </a>
        <div style={{ height: '2.5vh' }}></div>
        <a href='https://www.linkedin.com/company/90164568'>
          <img
            src='/images/linkedIn.png'
            alt='LinkedIn'
            style={{ width: '12vw' }}
          />
        </a>
      </div>
      <div style={{ height: '5vh' }}></div>
      <Tweet tweetId='1618309570312679426' options={{ align: 'center' }} />
      <div style={{ height: '2.5vh' }}></div>
      <PageNav />
    </div>
  )
}
