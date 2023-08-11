// "use client";

import { fetchLocalWeather } from "@/utils";
import "@/styles/ContactPage.css";
import { Footer } from "@/components";

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

  // const emailRedirect = () => {
  //   const emailAddress = "jzubiate.dev@gmail.com";
  //   const subject = "🤙 I am looking for a Frontend Engineer. Let's talk";

  //   const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
  //     subject
  //   )}`;

  //   window.location.href = mailtoUrl;
  // };

  return (
    <div id="contact-page">
      <section className="contact-landing">
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
          <div className="cta-group">
            <h4 className="text-m catchline">Send me a message</h4>
            <button
              className="text-2xl link"
              // onClick={emailRedirect}
            >
              jzubiate.dev@gmail.com
            </button>
          </div>
          <div className="cta-group">
            <h4 className="text-m catchline">Or connect with me elsewhere</h4>
            <div className="links">
              <a
                className="text-2xl link"
                href="https://www.linkedin.com/in/jasonzubiate/"
              >
                LinkedIn
              </a>
              <a
                className="text-2xl link"
                href="https://github.com/jasonzubiate?tab=repositories"
              >
                Github
              </a>
              <a
                className="text-2xl link"
                href="https://dribbble.com/jasonzubiate"
              >
                Dribbble
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
