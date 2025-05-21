import Image from "next/image";
import ProIntro from "./components/ProIntro/ProIntro";
import {projects} from "./data/data.js"

export default function Home() {
  return (
    <section className="">
      <div id="overview" className="w-screen h-screen pt-40">
        <ProIntro projects={projects} />
      </div>
    </section>
  );
}
