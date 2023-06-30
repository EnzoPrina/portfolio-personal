import React from "react";
import styles from "../styles/header.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import Typography from "@mui/material/Typography";
/* import PDF from "../../public/EnzoPrina-FrontendDeveloper.pdf" */
import Link from "next/link";

/* import Button from '@mui/material/Button'; */
const PDF_FILE_URL = "/EnzoPrina-FrontendDeveloper.pdf";
const Header = () => {
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <>
      <div className={styles.section}>
        <div className={styles.icons}>
          <Link href="https://github.com/EnzoPrina" legacyBehavior>
            <GitHubIcon className={styles.icon} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/enzo-prina-0b7a1b1b3/"
            legacyBehavior
          >
            <LinkedInIcon className={styles.icon} />
          </Link>

        </div>

        <div className={styles.titulos}>
          <h1>
            <b>Hey! </b>Sou Enzo Prina
          </h1>
        </div>
        <div className={styles.titulosII}>
          <h2>Front End Developer & Graphic Designer</h2>
        </div>
        <div className={styles.titulosIII}>
          <p>React Developer | NextJS | Javascript | Typescript | Vite</p>
        </div>
        <div className={styles.centrarButton}>
          <button
            className={styles.button}
            onClick={() => {
              downloadFileAtURL(PDF_FILE_URL);
            }}
          >
            Baixar CV
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
