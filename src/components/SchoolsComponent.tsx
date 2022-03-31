import { Center, Image } from '@mantine/core'
import config from '../../config.json'

// Our Images
import CherishedLamb from '../../images/cherished_lamb.png'
import GH1ES from '../../images/gh1es.png'
import SJC from '../../images/SJC_logo.png'

const Icons: any = {
  cl: CherishedLamb,
  gh1es: GH1ES,
  sjc: SJC
}

function Schools() {
  return (
    <Center className='Schools'>
      <div className='HeaderText'>Schools</div>

      { /* iterate through schools */ }
      <div className='SchoolCards'>
        {config.schools.map(
          (school, index) => (
            <div
              key={index}
              className='SchoolCard'
            >
              <img
                className='TestCircle2'
                src={Icons[school.icon]}
              />
              <div className='BodyText'>{school.name}</div>
              <div className='TinyText'>{school.years}</div>
            </div>
          )
        )}
      </div> 
    </Center>
  )
}

export default Schools