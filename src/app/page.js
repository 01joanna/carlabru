import Image from "next/image";
import {projects} from "./data/data.js"
import ProjectIntro from "./components/Project/ProjectIntro.jsx";

export default function Home() {
  return (
    <section className="mt-40">
      <ProjectIntro />
    </section>
  );
}
