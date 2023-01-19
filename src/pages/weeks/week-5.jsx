import React from 'react'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import PageNav from '../../components/PageNav'

export default function Week_5() {
  return (
    <div>
      <YoutubeEmbed embedId='rokGy0huYEA' />
      <div className='response'>
        <h2>Title</h2>
      </div>{' '}
      <div style={{ height: '2.5vh' }}></div>
      <PageNav />
    </div>
  )
}
