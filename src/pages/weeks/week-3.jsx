import YoutubeEmbed from '../../components/YoutubeEmbed'
import PageNav from '../../components/PageNav'
import { Tweet } from 'react-twitter-widgets'

export default function Week_3() {
  return (
    <div>
      <YoutubeEmbed embedId='EZHj_2fYOy8' />
      <div style={{ height: '5vh' }}></div>
      <Tweet tweetId='1613079733335633922' options={{ align: 'center' }} />
      <div style={{ height: '5vh' }}></div>
      <Tweet tweetId='1618309258227126273' options={{ align: 'center' }} />
      <div style={{ height: '2.5vh' }}></div>
      <PageNav />
    </div>
  )
}
