import DetailsCard from "./DetailsCard";
import SummaryCard from "./SummaryCard";
import Astronaut from "../assets/not-found.svg";
import SearchPlace from "../assets/search.svg";

const Result = ({
  degreeSymbol,
  weatherIcon,
  isFahrenheitMode,
  weatherData,
  noData,
}) => {
  <span>
    {weatherData.length === 0 ? (
      <div className="nodata">
        {noData === "Location Not Found" ? (
          <>
            <img src={Astronaut} alt="an astronaut lost in the space" />
            <p>Oh oh! We're lost in space finding that place.</p>
          </>
        ) : (
          <>
            <img
              src={SearchPlace}
              alt="a person thinking about what place to find"
            />
            <p style={{ padding: "20px" }}>
              Don't worry, if you don't know what to search for, try: India or
              maybe USA.
            </p>
          </>
        )}
      </div>
    ) : (
      <>
        <DetailsCard
          weather_icon={weatherIcon}
          data={weatherData}
          isFahrenheitMode={isFahrenheitMode}
          degreeSymbol={degreeSymbol}
        />
        <h1 className="title centerTextOnMobile"></h1>
        <ul className="summary">
          {weatherData.list.map((days, index) => (
            <SummaryCard
              key={index}
              day={days}
              isFahrenheitMode={isFahrenheitMode}
              degreeSymbol={degreeSymbol}
            />
          ))}
        </ul>
      </>
    )}
  </span>;
};

export default Result;
