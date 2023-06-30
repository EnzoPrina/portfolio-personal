import Image from "next/image";
import React from "react";
import styles from "../styles/design.module.css";
import Carbon from "../../public/behance/CarbonQuill.jpg"
import epzunshoes from "../../public/behance/epzun shoes.jpg"
import pritravel from "../../public/behance/pri travel.jpg"
import responsive from "../../public/behance/responsive.jpg"


const Design = () => {
  return (
    <>
    <div className={styles.bg}>
        <div className={styles.titulo}>
          <h2>Diseños Grafico & UI</h2>
          {/* <h6>Puedes acceder a mi portafolio</h6> */}
      </div>
      <div className={styles.centrarButton}>
        <a href="https://www.behance.net/enzoprina">
          <button className={styles.button}>Behance</button>
        </a>
        </div>
        <div className={styles.titulo}>
          <h6>Ultimos diseños 🚀</h6>
          <p className={styles.p}>Pulsa en behance, y chequea todos mis diseños publicados!</p>
        </div>
        <ul className={styles.galeria}>
		<li><a href="https://www.behance.net/gallery/162668175/Camiseta-Deportiva"><Image src={Carbon} width={200} height={200} alt='behance'/></a></li>
		<li><a href="https://www.behance.net/gallery/162668175/Camiseta-Deportiva"><Image src={epzunshoes} width={200} height={200} alt='behance'/></a></li>
		<li><a href="https://www.behance.net/gallery/159594109/Diseno-de-Logotipo-Branding-Para-Centro-de-Pilates"><Image src={pritravel} width={200} height={200} alt='behance'/></a></li>
		<li><a href="https://www.behance.net/gallery/163136063/PokeDex-App"><Image src={responsive} width={200} height={200} alt='behance'/></a></li>
	</ul>
    </div>


    </>
  );
};

export default Design;
