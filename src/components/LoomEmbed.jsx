export default function LoomEmbed(src) {
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
        height: '85vh',
        width: '100vw',
      }}
    ></iframe>
  )
}
