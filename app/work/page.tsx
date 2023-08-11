import { fetchLocalWeather } from "@/utils";
import { Projects, Connect, Footer, SectionHeader } from "@/components";
import "@/styles/WorkPage.css";

export default async function page() {
  const weather = await fetchLocalWeather();
  const { cloudCover, rainIntensity, temperature } =
    weather.timelines.minutely[0]?.values;

  let weatherIcon = "";
  if (temperature > 70) {
    weatherIcon = "☀️"; // Sunny
  } else if (cloudCover > 3) {
    weatherIcon = "☁️"; // Cloudy
  } else if (rainIntensity > 0) {
    weatherIcon = "🌧️"; // Rainy
  }
  return (
    <div id="work-page">
      <section id="work-landing">
        <div className="page-header">
          <div className="header-item">
            <p className="text-m w-[200px]">Recent UCI Graduate</p>
          </div>
          <div className="header-item">
            <p className="text-m w-[200px]">
              {Math.round(temperature)}ºF {weatherIcon} Los Angeles 10:16 PM
            </p>
          </div>
        </div>
        <div className="content">
          <SectionHeader number={1} title="My Work" />
          <div className="title-container">
            <div className="title">
              <h1 className="text-2xl uppercase">Projects</h1>
              <p className="text-l number">03</p>
            </div>
            <div className="info">
              <p className="text-m uppercase">Projects</p>
              <p className="text-m description">
                A selected set of individual projects aimed at expanding my
                overall knowledge of frontend developent as well exploring full
                stack to become a more well rounded software engineer.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Projects section={2} />
      <Connect section={3} />
      <Footer />
    </div>
  );
}
