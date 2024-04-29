import { promises as fs } from 'fs';
import Weather from "./components/weather/page";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/SECRETS.json', 'utf8');
  const secrets = JSON.parse(file);

  return (
    <main>
      <div className="App">
        <Weather
          apiKey={secrets?.apiKeys?.openWeatherMap}
        />
      </div>
    </main>
  );
}
