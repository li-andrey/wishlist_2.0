import ContentLoader from "react-content-loader";
const SkeletonCard = (props) => (
  <ContentLoader
    speed={2}
    width={275}
    height={540}
    viewBox="0 0 275 540"
    backgroundColor="#f3f3f3"
    foregroundColor="#e3e3e3"
    {...props}
  >
    <rect x="276" y="95" rx="0" ry="0" width="247" height="337" />
    <rect x="93" y="207" rx="0" ry="0" width="1" height="16" />
    <rect x="0" y="0" rx="0" ry="0" width="275" height="320" />
    <rect x="20" y="375" rx="0" ry="0" width="235" height="25" />
    <rect x="20" y="475" rx="5" ry="5" width="150" height="35" />
    <rect x="175" y="475" rx="5" ry="5" width="80" height="35" />
    <rect x="20" y="410" rx="0" ry="0" width="235" height="50" />
  </ContentLoader>
);

export default SkeletonCard;
