import "./about.css"
import facebook from "../../../assets/Facebook.svg"
import twitter from "../../../assets/Twitter.svg"
import instagram from "../../../assets/Instagram.svg"
import github from "../../../assets/Github.svg"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <>
        <aside class="about">
          <h2>About Me</h2>
          <img src="https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg?raw=true" alt="" class="user-profile" />
          <p class="user-name">Chilli</p>
          <p class="user-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <h3>Categories</h3>
          <ul class="categories">
            <li><Link to="#">Life</Link></li>
            <li><Link to="#">Style</Link></li>
            <li><Link to="#">Tech</Link></li>
            <li><Link to="#">Sport</Link></li>
            <li><Link to="#">Photo</Link></li>
            <li><Link to="#">Develop</Link></li>
            <li><Link to="#">Music</Link></li>
          </ul>
          <h3>Follow</h3>
          <ul className="sns">
            <li>
              <Link className="#">
                <img src={facebook} alt="Facebook" />
              </Link>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={github} alt="GitHub" />
              </a>
            </li>
          </ul>
        </aside>
    </>
  )
}
