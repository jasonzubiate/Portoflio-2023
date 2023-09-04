export async function fetchWeather(): Promise<{
  temp: number;
  desc: string;
  icon: string;
}> {
  try {
    const response = await fetch(
      "https://api.weather.gov/gridpoints/LOX/164,41/forecast"
    );
    const data = await response.json();
    const shortForecast = data.properties.periods[0].shortForecast;
    const temperature = data.properties.periods[0].temperature;
    const icon = getWeatherIcon(shortForecast);

    return { temp: temperature, desc: shortForecast, icon };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return { temp: 0, desc: "", icon: "" };
  }
}

export function getWeatherIcon(weatherDesc: string): string {
  const lowercaseDesc = weatherDesc.toLowerCase();

  if (lowercaseDesc.includes("sunny")) {
    return "☀️";
  } else if (lowercaseDesc.includes("cloudy")) {
    return "☁️";
  } else if (lowercaseDesc.includes("rain")) {
    return "🌧️";
  } else {
    return "☀️";
  }
}

export function getLocalTimeLosAngeles(): string {
  const date = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  } as Intl.DateTimeFormatOptions;

  const timeZone = "America/Los_Angeles";
  const losAngelesTime = date.toLocaleTimeString("en-US", {
    ...options,
    timeZone,
  });

  return losAngelesTime;
}

export function emailRedirect(): void {
  const emailAddress = "jzubiate.dev@gmail.com";
  const subject = "🤙 I am looking for a Frontend Engineer. Let's talk";

  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}`;

  window.location.href = mailtoUrl;
}
