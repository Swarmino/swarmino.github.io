const VideoPlayer : React.FC = () => {
    return (
        <div className="flex p-5">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-XIfHc0to2s?si=w0BRkdx5uuBm3gFr" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        </div>
    );
    }

    export default VideoPlayer;