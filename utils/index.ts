export async function fetchLocalWeather() {
  const headers = {
    "X-RapidAPI-Key": "6bea268cc7mshebc7815749959c5p1787f3jsn9c4d98aca92a",
    "X-RapidAPI-Host": "tomorrow-io1.p.rapidapi.com",
  };
  const response = await fetch(
    "https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?timesteps=1m&location=los%20angeles&units=imperial",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}

export function emailRedirect() {
  const emailAddress = "jzubiate.dev@gmail.com";
  const subject = "🤙 I am looking for a Frontend Engineer. Let's talk";

  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}`;

  window.location.href = mailtoUrl;
};