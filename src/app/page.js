import Image from "next/image";
import Search from "./components/search/page";
import Weather from "./components/weather/page";

export default function Home() {
  return (
    <main>
      <div className="App">
        <Weather />
      </div>
    </main>
  );
}
