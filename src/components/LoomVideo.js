export default function LoomVideo(src) {
  return (
    <iframe
      src={src}
      allowFullScreen
      frameBorder='0'
      loading='lazy'
      preload={'auto'}
      style={{
        position: 'relative',
        top: 0,
        left: 0,
        height: '33vw',
        width: '77vw',
        paddingLeft: '12vw',
        paddingRight: '12vw',
      }}
    ></iframe>
  )
}
