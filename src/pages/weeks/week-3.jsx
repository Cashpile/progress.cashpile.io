import LoomEmbed from '../../components/LoomEmbed'
import PageNav from '../../components/PageNav'
import { Tweet } from 'react-twitter-widgets'

export default function Week_3() {
  const loomEmbed = LoomEmbed(
    'https://www.loom.com/embed/2cda75013f5143919d7cee45010bae36'
  )
  return (
    <div>
      {/* {loomEmbed} */}
      <div style={{ height: '5vh' }}></div>
      <Tweet tweetId='1613079733335633922' options={{ align: 'center' }} />
      <div style={{ height: '2.5vh' }}></div>
      <PageNav />
    </div>
  )
}
