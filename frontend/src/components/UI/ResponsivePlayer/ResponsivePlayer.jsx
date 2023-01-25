import ReactPlayer from "react-player";
import styles from "./ResponsivePlayer.module.scss";

const ResponsivePlayer = () => {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        className="react-player"
        url="https://youtu.be/zF3oHxYZYXI"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default ResponsivePlayer;
