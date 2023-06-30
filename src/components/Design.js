import Image from "next/image";
import React from "react";
import styles from "../styles/design.module.css";
import Carbon from "../../public/behance/CarbonQuill";
import epzunshoes from "../../public/behance/epzunshoes";
import pritravel from "../../public/behance/pritravel";
import responsive from "../../public/behance/responsive";


const Design = () => {
  return (
    <>
    <div className={styles.bg}>
        <div className={styles.titulo}>
          <h2>Designs Gráficos e de Interface do usuário(UI)</h2>
          {/* <h6>Puedes acceder a mi portafolio</h6> */}
      </div>
      <div className={styles.centrarButton}>
        <a href="https://www.behance.net/enzoprina">
          <button className={styles.button}>Behance</button>
        </a>
        </div>
        <div className={styles.titulo}>
          <h6>Designs mais recentes🚀</h6>
          <p className={styles.p}>Clique no Behance e confira todos os meus designs publicados!</p>
        </div>
        <ul className={styles.galeria}>
		<li><a href="https://www.behance.net/gallery/166052071/UX-UI-Aplicacion"><Image src={Carbon} width={200} height={200} alt='behance'/></a></li>
		<li><a href="https://www.behance.net/gallery/168084485/UX-UI-Ecommerce-Epzun"><Image src={epzunshoes} width={200} height={200} alt='behance'/></a></li>
		<li><a href="https://www.behance.net/gallery/166615927/UI-UX-PriTravel"><Image src={pritravel} width={200} height={200} alt='behance'/></a></li>
		<li><a href="https://www.behance.net/gallery/165426561/UI-UX-Blog"><Image src={responsive} width={200} height={200} alt='behance'/></a></li>
	</ul>
    </div>


    </>
  );
};

export default Design;
