import { useState } from 'react'
import { Center, Modal } from '@mantine/core'
import config from '../../config.json'

// Our Images
import Pogtopia from '../../images/pogtopia.png'
import Beef from '../../images/beef.webp'
import GTJS from '../../images/gtjs.png'

const Icons: any = {
  pogtopia: Pogtopia,
  beef: Beef,
  gtjs: GTJS
}

type ProjNames = 'pogtopia' | 'beef' | 'gtjs'

// use same styles as school css to reduce code
function Projects() {
  const [opened, setOpened] = useState(false)
  const [proj, setProjName] = useState<ProjNames>()

  const openModal = (proj: string) => {
    setProjName(proj as ProjNames)
    setOpened(true)
  }

  return (
    <Center className='Schools'>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        radius={0}
        size='lg'
        withCloseButton={false}
        trapFocus={false}
      >
        <div className='Projects'>
          {
            (() => {
              const project = config.projects[proj as ProjNames]

              if (!project || project.projects.length < 1)
                return (
                  <div style={{ textAlign: 'center' }}>
                    No projects were found.
                  </div>
                )

              return project.projects.map(
                (p, index) => (
                  (
                    <div
                      className='ProjectContainer'
                      key={index}
                    >
                      <div className='Project'>
                        <div className='HeaderLink'>
                          <a
                            href={`https://github.com/${p.owner}`} 
                          >
                            {p.owner}
                          </a>

                          <div className='Divider'>/</div>

                          <a
                            href={`https://github.com/${p.owner}/${p.repo}`} 
                          >
                            {p.repo}
                          </a>
                        </div>

                        <div className='Description'>
                          {p.desc}
                        </div>           
                      </div>

                      {index < project.projects.length - 1 ? (
                        <div className='LineDivider' />
                      ) : null}
                    </div>
                  )
                )
              )
            })()
          }
        </div>
      </Modal>

      <div className='HeaderText'>Projects</div>

      { /* iterate through projects */ }
      <div className='SchoolCards'>
        {Object.values(config.projects).map(
          (proj, index) => (
            <div
              key={index}
              className='SchoolCard ProjectCardModifier'
            >
              <img
                className='TestCircle2'
                src={Icons[proj.icon]}
              />
              <div className='BodyText'>{proj.name}</div>
              <div
                onClick={() => openModal(proj.id)}
                className='Btn Btn-Blue'
              >
                Show More
              </div>
            </div>
          )
        )}
      </div> 
    </Center>
  )
}

export default Projects