import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import { FaGithub, FaLinkedin, FaTwitter, FaTwitch, FaDiscord } from "react-icons/fa";
import { TypeText } from "./typingEffect";
import Job from "./Job";
import HeroSvg from "../subcomponents/HeroSvg";
import GitHubCalendar from 'react-github-calendar';


export default async function Hero() {

  const profile: ProfileType[] = await getProfile();
  const iconMap: Record<string, JSX.Element> = {
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    discord: <FaDiscord />,
    twitter: <FaTwitter />,
    twitch: <FaTwitch />,
  };
  
  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6 ">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
        {profile &&
          profile.map((data) => (
            <div key={data._id} className="lg:max-w-2xl max-w-2xl">
              <div className="text-3xl font-bold tracking-wide sm:text-5xl mb-6 lg:leading-10 leading-10 lg:min-w-[700px] min-w-full">
                <TypeText data={data.headline} />
              </div>
              <p className="text-base text-zinc-400 leading-relaxed">
                {data.shortBio}
              </p>
              <ul className="flex items-center gap-x-6 my-10">
                {Object.entries(data.socialLinks)
                  .sort()
                  .map(([key, value], id) => (
                    <li key={id}>
                      <a
                        href={value}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-x-3 mb-5 text-2xl hover:text-purple-400 duration-300"
                      >
                        {iconMap[key]} {/* Render the icon */}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        {/* <GlobeDemo /> */}
        <HeroSvg/>
      </section>
      <GitHubCalendar username="hammadurrehman2006" />
      <Job />
      {/* <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas> */}
    </main>
  );
}