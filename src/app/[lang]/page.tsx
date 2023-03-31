import Line from "~/components/base/line";
import About from "~/components/sections/about";
import Contact from "~/components/modules/contact";
import Portfolio from "~/components/sections/portfolio";
import Skills from "~/components/sections/skills";
import { Personal } from "~/components/sections/personal";
import { getDictionary } from "locales/getLocale";
import { Locale } from "i18n-config";

export default async function HomePage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div>
      <Personal
        title={dictionary.personal.title}
        subtitle={dictionary.personal["sub-title"]}
        description={dictionary.personal.description}
        btnText={dictionary.personal.btn}
      />
      <Line />
      <Skills title={dictionary.skills.title} />
      <Line />
      <Portfolio
        title={dictionary.portfolio.title}
        description={dictionary.portfolio.description}
      />
      <Line />
      <About
        title={dictionary.about.title}
        edu={dictionary.about.edut}
        birth={dictionary.about.birth}
        email={dictionary.about.email}
        location={dictionary.about.location}
        mobile={dictionary.about.mobile}
        military_service={dictionary.about["military-service"]}
      />
      <Line />
      <Contact
        title={dictionary.contact.title}
        description={dictionary.contact.description}
        h6={dictionary.contact.h6}
      />
    </div>
  );
}
