import { Hero, Projects, Self, Skills, About, Connect, Footer } from "@/components";
import { fetchLocalWeather } from "@/utils";

export default async function Home() {
  const weather = await fetchLocalWeather();
  const { cloudCover, rainIntensity, temperature } = (weather.timelines.minutely[0]?.values)

  let weatherIcon = '';
  if (temperature > 70 ) {
    weatherIcon = '☀️'; // Sunny
  } else if (cloudCover > 3) {
    weatherIcon = '☁️'; // Cloudy
  } else if (rainIntensity > 0) {
    weatherIcon = '🌧️'; // Rainy
  }
  return (
    <main>
      <Hero temperature={Math.round(temperature)} weatherIcon={weatherIcon}/>
      <Self section={1}/>
      <Skills section={2}/>
      <Projects section={3}/>
      <About section={4}/>
      <Connect section={5}/>
      <Footer/>
    </main>
  );
}
