export default function LoomEmbed(src) {
  return (
    <div className='video-responsive'>
      <iframe
        width='853'
        height='480'
        src={src}
        allowFullScreen
        frameBorder='0'
        loading='lazy'
        preload={'auto'}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      ></iframe>{' '}
    </div>
  )
}
