import Line from "~/components/base/line";
import About from "~/components/sections/about";
import Contact from "~/components/modules/contact";
import Portfolio from "~/components/sections/portfolio";
import Skills from "~/components/sections/skills";
import { Personal } from "~/components/sections/personal";
export default function HomePage() {
  return (
    <div>
      <Personal />
      <Line />
      <Skills />
      <Line />
      <Portfolio />
      <Line />
      <About />
      <Line />
      <Contact />
    </div>
  );
}

