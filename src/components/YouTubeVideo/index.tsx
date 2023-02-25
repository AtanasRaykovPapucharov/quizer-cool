import YouTube, { YouTubeProps } from 'react-youtube';

const YouTubeVideo: React.FC<YouTubeProps> = ({
    videoId,
    id,    
    className,
    iframeClassName,
    style,
    title,
    loading,
    opts,
    onReady,
    onPlay,
    onPause,
    onEnd,
    onError,
    onStateChange,
    onPlaybackRateChange,
    onPlaybackQualityChange
}: any) =>  {

  return (
   <YouTube
        videoId={videoId}                                    // defaults -> ''
        id={id}                                              // defaults -> ''
        className={className}                                // defaults -> ''
        iframeClassName={iframeClassName}                    // defaults -> ''
        style={style}                                        // defaults -> {}
        title={title}                                        // defaults -> ''
        loading={loading}                                    // defaults -> undefined
        opts={opts}                                          // defaults -> {}
        onReady={onReady}                                    // defaults -> noop
        onPlay={onPlay}                                      // defaults -> noop
        onPause={onPause}                                    // defaults -> noop
        onEnd={onEnd}                                        // defaults -> noop
        onError={onError}                                    // defaults -> noop
        onStateChange={onStateChange}                        // defaults -> noop
        onPlaybackRateChange={onPlaybackRateChange}          // defaults -> noop
        onPlaybackQualityChange={onPlaybackQualityChange}    // defaults -> noop
    />
  )
}

export default YouTubeVideo
