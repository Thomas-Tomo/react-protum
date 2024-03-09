import React from "react";
import styles from "../styles/YouTubeVideo.module.css";

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className={styles.videoContainer}>
      <iframe
        className={styles.videoFrame}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
