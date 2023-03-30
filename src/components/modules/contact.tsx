import styles from "~/styles/modules/contact.module.css";
import FacebookIcon from "~/assets/icons/social/facebook.svg";
import GitIcon from "~/assets/icons/social/github.svg";
import InstagramIcon from "~/assets/icons/social/instagram.svg";
import LinkedInIcon from "~/assets/icons/social/linkedin.svg";
import TwitterIcon from "~/assets/icons/social/twitter.svg";
export default function Contact() {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles["contact-info"]}>
        <h2>Let’s work together on your next project.</h2>
        <p>
          I'm always happy to hear about exciting opportunities, join in
          interesting conversations, and build valuable connections. Let's
          connect!
        </p>
        <h6 className="mt-6 text-sm">follow me on social media</h6>
        <ul className={styles.icons}>
          <li>
            <a href="https://facebook.com/solighanbary">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/soheil__ghanbary">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/soheilghanbary">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/soli_ghanbary">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/soheilghanbary">
              <GitIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles["contact-form"]}>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col text-sm gap-2">
            <label className="text-white">First Name</label>
            <input
              type="text"
              placeholder="ex: tony"
              className="px-4 text-gray-100 focus:ring-1 ring-indigo-400 duration-200 py-3 leading-6 border border-gray-700 bg-transparent rounded-lg"
            />
          </div>
          <div className="flex flex-col text-sm gap-2">
            <label className="text-white">Last Name</label>
            <input
              type="text"
              placeholder="ex: ghanbary"
              className="px-4 text-gray-100 focus:ring-1 ring-indigo-400 duration-200 py-3 leading-6 border border-gray-700 bg-transparent rounded-lg"
            />
          </div>
          <div className="col-span-2 flex flex-col text-sm gap-2">
            <label className="text-white">Message</label>
            <textarea
              rows={6}
              placeholder="ex: hello"
              className="px-4 text-gray-100 focus:ring-1 ring-indigo-400 duration-200 py-3 leading-6 border border-gray-700 bg-transparent rounded-lg"
            />
          </div>
        </div>
        <button className="flex items-center justify-center px-8 active:scale-90 duration-150 py-2 bg-teal-500 border border-teal-400 text-white rounded-full font-semibold">
            Send Message
          </button>
      </div>
    </div>
  );
}
