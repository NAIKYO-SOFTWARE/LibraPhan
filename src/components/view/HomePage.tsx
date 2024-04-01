import { useSelector } from "react-redux";
import TimeBox from "../TimeBox";
import { RootState } from "../redux/store";
import "../../css/HomePage.css";

const data = [
    {
      weekday: "Sun",
      day: 11,
    },
    {
      weekday: "Sun",
      day: 11,
    },
    {
      weekday: "Sun",
      day: 11,
    },
    {
      weekday: "Sun",
      day: 11,
    },
    {
      weekday: "Sun",
      day: 11,
    },
    {
      weekday: "Sun",
      day: 11,
    },
  ];
  
  const HomePage = () => {
    const account = useSelector((state: RootState) => state.user);

    console.log(account);
    
    return (
      <div className="homepage">
        <div className="homepage__wrapper-time py-3">
          <h1 className="title text-center">Today</h1>
          <div className="px-3 d-flex w-100 justify-content-between">
            {data.map((time, index) => {
              return (
                <TimeBox key={index} day={time.day} weekday={time.weekday} />
              );
            })}
          </div>
        </div>
        <div className="homepage__wrapper-filter d-flex align-items-center mt-3 flex-column">
            
        </div>
        {/* <Link to={screenUrl.SUGGESTIONS}>
          <button
            className="btn position-fixed"
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "999px",
              backgroundColor: appColor.white,
              color: appColor.black,
              fontWeight: 600,
              boxShadow: "1px 2px 3px black",
              bottom: "80px",
              right: "30px",
            }}
          >
            +
          </button>
        </Link> */}
      </div>
    );
  };
  
  export default HomePage;