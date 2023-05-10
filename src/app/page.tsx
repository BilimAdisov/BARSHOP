import Image from "next/image";
import styles from "./page.module.css";
import "./styles/App.scss";
import { TopSide } from "./pages/topSide";
import { Slider } from "./components/slider/slider";

export default function Home() {
  return (
    <main className="main">
      <div className="main-container">
        <TopSide />
        {/* <Slider /> */}
      </div>
    </main>
  );
}
