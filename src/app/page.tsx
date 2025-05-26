import Header from "@/components/Header";
import { CircleUser, Github, Send } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <div className="main-content">
        <CircleUser size={100} />
        <h1>Orazmyrat Hojamyradov</h1>
        <h3>Novice front-end developer</h3>
        <p>
          Passionate, self-proclaimed developer who specializes in front-end
          development (React.js). I am very enthusiastic about bringing the
          technical and visual aspects of digital products to life.
        </p>
        <div className="links">
          <a
            target="_blank"
            href="https://github.com/Orazmyrat-Hojamyradov"
            className="icon-wrapper"
          >
            <Github className="icon" size={30} />
          </a>
          <a
            target="_blank"
            href="https://t.me/Orazgone"
            className="icon-wrapper"
          >
            <Send className="icon" size={30} />
          </a>
        </div>
      </div>
    </>
  );
}
