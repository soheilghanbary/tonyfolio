import styles from "~/styles/modules/contact.module.css";
import FacebookIcon from "~/assets/icons/social/facebook.svg";
import GitIcon from "~/assets/icons/social/github.svg";
import InstagramIcon from "~/assets/icons/social/instagram.svg";
import LinkedInIcon from "~/assets/icons/social/linkedin.svg";
import TwitterIcon from "~/assets/icons/social/twitter.svg";
import { Button } from "../base/buttons";

interface ContactProps {
  title: string;
  description: string;
  h6: string;
}

export default function Contact({ title, description, h6 }: ContactProps) {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles["contact-info"]}>
        <h2>{title}</h2>
        <p>{description}</p>
        <h6 className="mt-6 text-sm">{h6}</h6>
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
            <label className="text-heading">First Name</label>
            <input
              type="text"
              placeholder="ex: tony"
              className="px-4 text-heading focus:ring-2 ring-indigo-400 duration-200 py-3 leading-6 border border-line bg-transparent rounded-xl"
            />
          </div>
          <div className="flex flex-col text-sm gap-2">
            <label className="text-heading">Last Name</label>
            <input
              type="text"
              placeholder="ex: ghanbary"
              className="px-4 text-heading focus:ring-2 ring-indigo-400 duration-200 py-3 leading-6 border border-line bg-transparent rounded-xl"
            />
          </div>
          <div className="col-span-2 flex flex-col text-sm gap-2">
            <label className="text-heading">Message</label>
            <textarea
              rows={6}
              placeholder="ex: hello"
              className="px-4 text-heading focus:ring-2 ring-indigo-400 duration-200 py-3 leading-6 border border-line bg-transparent rounded-xl"
            />
          </div>
        </div>
        <Button text="Send Message" color="success" />
      </div>
    </div>
  );
}
