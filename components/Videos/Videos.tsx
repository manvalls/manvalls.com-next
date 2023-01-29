import st from './Videos.module.css'

export const Videos = () => {
  return (
    <div className={st.videos}>
      <iframe src="https://www.youtube.com/embed/videoseries?list=PLkHTLEWBbz49m0ZUZ0B4hop9rkwDQGE12"
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    </div>
  )
}
