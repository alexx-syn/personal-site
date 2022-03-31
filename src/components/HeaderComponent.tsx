import config from '../../config.json'

// Our Icons
import FacebookIcon from '../../images/facebook.svg'
import GithubIcon from '../../images/github.svg'
import YoutubeIcon from '../../images/youtube.svg'

import ProfileImg from '../../images/profile.jpg'
import AltProfileImg from '../../images/alt_profile.jpg'

const Icons: any = {
  facebook: FacebookIcon,
  github: GithubIcon,
  youtube: YoutubeIcon
}

function Header() {
  return (
    <div className='Header'>
      <div className='Profiles'>

      <img
        src={ProfileImg}
        className='Profile'
      />

      <img
        src={AltProfileImg}
        className='AltProfile'
      />

      </div>

      <div className='TextInfo'>
        <div className='BigText'>Alexander Montoya</div>
        <div>16 Yrs. Old</div>

        <div>
          {config.socials.map(
            (social, index) => (
              <img
                className='SocialIcon'

                src={Icons[social.icon]}
                key={index}

                onClick={() => window.open(social.link, '_blank')}
                style={{ cursor: 'pointer' }}
              />
            )
          )}
        </div>
        <div>
          Founder of <span className='GreenText'>Pogtopia</span>
        </div>
        <div>Full stack Web Developer & Software Devloper</div>
        <div className='BlueText'>Swimmer</div>
      </div>
    </div>
  )
}

export default Header