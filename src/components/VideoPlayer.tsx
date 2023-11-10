const VideoPlayer : React.FC = () => {
    return (
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-XIfHc0to2s?si=w0BRkdx5uuBm3gFr" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        </div>
    );
    }

    export default VideoPlayer;