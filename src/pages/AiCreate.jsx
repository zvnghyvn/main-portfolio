import aiCreateList from '@data/aiCreateList'
import { AiCreateWrap, AiMasonry, AiCard } from '@styles/pages/AiCreate.styles'

const isVideoFile = (src) => {
  return /\.(mp4|webm|mov|ogg)$/i.test(src)
}

const AiCreate = () => {
  return (
    <AiCreateWrap id="ai-create">
      <div className="inner">
        <h2>Ai Create</h2>

        <AiMasonry>
          {aiCreateList.map((project) =>
            project.media?.map((src, index) => {
              const isVideo = isVideoFile(src)

              return (
                <AiCard key={`${project.id}-${index}`}>
                  <div className="thumb">
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
                  </div>
                </AiCard>
              )
            })
          )}
        </AiMasonry>
      </div>
    </AiCreateWrap>
  )
}

export default AiCreate