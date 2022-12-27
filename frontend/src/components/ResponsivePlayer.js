import ReactPlayer from "react-player";

const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://youtu.be/zF3oHxYZYXI"
        width="50%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default ResponsivePlayer;
