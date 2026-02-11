import { useState } from 'react'
import aiCreateList from '@data/aiCreateList'
import Modal from '@components/Modal'
import { AiCreateWrap, AiMasonry, AiCard } from '@styles/pages/AiCreate.styles'

const isVideoFile = (src) => {
  return /\.(mp4|webm|mov|ogg)$/i.test(src)
}

const AiCreate = () => {
  const [modalImage, setModalImage] = useState(null)
  
  return (
    <AiCreateWrap id="ai-create">
      <div className="inner">
        <h2>Ai Create</h2>

        <AiMasonry>
          {aiCreateList.map((project) =>
            project.media?.map((src, index) => {
              const isVideo = isVideoFile(src)
              const externalUrl = project.url
              const hasExternalLink = Boolean(externalUrl)

              return (
                <AiCard key={`${project.id}-${index}`}>
                  {hasExternalLink ? (
                    <a
                      className="thumb"
                      href={externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {isVideo ? (
                        <video
                          src={src}
                          muted
                          autoPlay
                          loop
                          playsInline
                        />
                      ) : (
                        <img src={src} alt={project.topic} />
                      )}

                      <div className="overlay">
                        <span className="tools">
                          {project.tools.join(' · ')}
                        </span>
                        <span className="topic">{project.topic}</span>
                      </div>
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="thumb"
                      onClick={
                        isVideo || hasExternalLink
                          ? undefined
                          : () => setModalImage(src)
                      }
                      aria-label={
                        isVideo
                          ? hasExternalLink
                            ? `${project.topic} 외부 영상으로 이동`
                            : `${project.topic} 영상`
                          : `${project.topic} 이미지 확대`
                      }
                    >
                      {isVideo ? (
                        <video
                          src={src}
                          muted
                          autoPlay
                          loop
                          playsInline
                        />
                      ) : (
                        <img src={src} alt={project.topic} />
                      )}

                      <div className="overlay">
                        <span className="tools">
                          {project.tools.join(' · ')}
                        </span>
                        <span className="topic">{project.topic}</span>
                      </div>
                    </button>
                  )}
                </AiCard>
              )
            })
          )}
        </AiMasonry>

        {modalImage && (
          <Modal src={modalImage} onClose={() => setModalImage(null)} />
        )}
      </div>
    </AiCreateWrap>
  )
}

export default AiCreate