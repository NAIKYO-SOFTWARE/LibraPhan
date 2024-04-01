import { appColor } from "./constants/color";

interface IProp {
    weekday: string;
    day: number;
  }
  
  const TimeBox = ({ weekday, day }: IProp) => {
    return (
      <div
        className="d-flex flex-column align-items-center justify-content-center gap-2"
        style={{
          backgroundColor: "#DEB5E4",
          height: "70px",
          width: "50px",
          borderRadius: "10px",
        }}
      >
        <p>{weekday}</p>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: appColor.white,
            borderRadius: "999px",
            height: "30px",
            width: "30px",
          }}
        >
          <span>{day}</span>
        </div>
      </div>
    );
  };
  
  export default TimeBox;