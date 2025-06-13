const CircularProgressBar = ({ percentage }) => {
  return (
    <div style={{ width: "100%", background: "#ddd", borderRadius: "5px" }}>
      <div
        style={{
          width: `${percentage}%`,
          background: "#2AAA8A",
          height: "20px",
          borderRadius: "5px",
          transition: "width 0.5s ease-in-out",
        }}
      ></div>
    </div>
  );
};
export default CircularProgressBar;