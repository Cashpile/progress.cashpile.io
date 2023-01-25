import React from 'react'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import PageNav from '../../components/PageNav'

export default function Week_4() {
  return (
    <div>
      <YoutubeEmbed embedId='A4DqJ_mFVec' />
      <div className='response'>
        <h2>Landing Page</h2>
        <div style={{ height: '2.5vh' }}></div>
        <a href='https://simplest-happen-010806.framer.app/'>
          <img
            src='/images/landingPage.png'
            alt='Landing Page'
            style={{ width: '25vw' }}
          />
        </a>
        <div style={{ height: '5vh' }}></div>
        <h2>LinkedIn Org</h2>
        <div style={{ height: '2.5vh' }}></div>
        <a href='https://www.linkedin.com/company/90164568'>
          <img
            src='/images/linkedIn.png'
            alt='LinkedIn'
            style={{ width: '10vw' }}
          />
        </a>
      </div>{' '}
      <div style={{ height: '2.5vh' }}></div>
      <PageNav />
    </div>
  )
}
