import Image from "next/image";
import {projects} from "./data/data.js"
import ProjectIntro from "./components/Project/ProjectIntro.jsx";
import Home from "./components/Home/Home.jsx";

export default function Page() {
  return (
    <section className="">
      {/* <ProjectIntro /> */}
      <Home />
    </section>
  );
}
