import { Center } from '@mantine/core'
import config from '../../config.json'

function Media() {
  return (
    <Center className='Schools'>
      <div className='HeaderText'>Media</div>

      <div>
        <div className='video-container'>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube-nocookie.com/embed/${config.multimedia.ytId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /> 
        </div>
        <div className='TinyText'>
          {config.multimedia.desc}
        </div>
      </div>

    </Center>
  )
}

export default Media