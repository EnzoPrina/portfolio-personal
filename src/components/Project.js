import React from "react";
import styles from "../styles/project.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Image from "next/image";
import Dashboard from "../../public/ProyectosFotos/DashboardClient.jpg";
import Shop from "../../public/ProyectosFotos/ShopYardSale.jpg";
import DashboardYardSale from "../../public/ProyectosFotos/DashboardYardSaleShop.jpg";
import Seguimiento from "../../public/ProyectosFotos/SeguimientoPacientes.jpg";
import Planificador from "../../public/ProyectosFotos/PlanificadorDeGastos.jpg";
import Cripto from "../../public/ProyectosFotos/Criptomonedas.jpg";
import Noticias from "../../public/ProyectosFotos/Noticias.jpg";
import Notas from "../../public/ProyectosFotos/AppNotas.jpg";
import Blog from '../../public/ProyectosFotos/BlogdeCafe.jpg'
import Poke from '../../public/ProyectosFotos/Pokedex_Mesa de trabajo 1-min.jpg'
import Link from "next/link";
import Cherry from "../../public/ProyectosFotos/1cherry.png"
import Mont from "../../public/ProyectosFotos/2mont.png"
import Coco from "../../public/ProyectosFotos/3coco.png"
import Sanitario from "../../public/ProyectosFotos/4sanitario.png"
import Carbon from "../../public/behance/CarbonQuill.jpg"

const Project = () => {
  return (
    <>
      <div className={styles.project}>
        <h3 className={styles.titulo}>Trabalhos realizados</h3>

        <div className={styles.container}>

                    <div className={styles.card}>
            {" "}
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <div>
                  <Image
                    src={Sanitario}
                    alt="logo"
                    width={400}
                    className={styles.oscurecerImagen}
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                     /* color="text.primary" */ 
                  >
                    Ecommerce - Sanitarios Abril
                  </Typography>
                  <Typography variant="body3"  /* color="text.secondary" */ >
                  Trabalho feito para cliente, layout feito no Figma e utilizando ilustrador com photoshop para desenho de banner
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      ILLUSTRATOR | PHOTOSHOP | FIGMA | WORDPRESS
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea >
              <CardActions className={styles.bgBoton}>
              <Link href="https://github.com/EnzoPrina/pokedex-r-native" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                Ver projeto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

          <div className={styles.card}>
            {" "}
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <div>
                  <Image
                    src={Coco}
                    alt="logo"
                    width={400}
                    className={styles.oscurecerImagen}
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                     /* color="text.primary" */ 
                  >
                    Dark Chocolate Coconut Almond & Lentil Butter
                  </Typography>
                  <Typography variant="body3"  /* color="text.secondary" */ >
                  Trabalho feito para cliente no Upwork
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      ILLUSTRATOR  | PHOTOSHOP | FIGMA | SHOGUN PAGE BUILDER
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea >
              <CardActions className={styles.bgBoton}>
              <Link href="https://www.eatbroma.com/pages/originaldarkchocolate-copy-copy-copy" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                Ver projeto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

          <div className={styles.card}>
            {" "}
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <div>
                  <Image
                    src={Cherry}
                    alt="logo"
                    width={400}
                    className={styles.oscurecerImagen}
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                     /* color="text.primary" */ 
                  >
                    Dark Chocolate Cherry Almond & Lentil Butter
                  </Typography>
                  <Typography variant="body3"  /* color="text.secondary" */ >
                  Trabalho feito para cliente no Upwork
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      ILLUSTRATOR | PHOTOSHOP | FIGMA | SHOGUN PAGE BUILDER
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea >
              <CardActions className={styles.bgBoton}>
              <Link href="https://www.eatbroma.com/pages/originaldarkchocolate-copy" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                Ver projecto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

          <div className={styles.card}>
            {" "}
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <div>
                  <Image
                    src={Mont}
                    alt="logo"
                    width={400}
                    className={styles.oscurecerImagen}
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                     /* color="text.primary" */ 
                  >
                    Dark Chocolate Mint Chip Almond & Lentil Butter
                  </Typography>
                  <Typography variant="body3"  /* color="text.secondary" */ >
                  Trabalho feito para cliente no Upwork
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      ILLUSTRATOR  | PHOTOSHOP | FIGMA | SHOGUN PAGE BUILDER
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea >
              <CardActions className={styles.bgBoton}>
              <Link href="https://github.com/EnzoPrina/pokedex-r-native" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                Ver projeto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

          <div className={styles.card}>
            {" "}
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <div>
                  <Image
                    src={Carbon}
                    alt="logo"
                    width={400}
                    className={styles.oscurecerImagen}
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                     /* color="text.primary" */ 
                  >
                    Design UI CarbonQuill
                  </Typography>
                  <Typography variant="body3"  /* color="text.secondary" */ >
                  Trabalho feito para cliente no Upwork
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      ILLUSTRATOR  | PHOTOSHOP | FIGMA | SHOGUN PAGE BUILDER
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea >
              <CardActions className={styles.bgBoton}>
              <Link href="https://www.carbonquill.com/about" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                Ver projeto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>


          <div className={styles.card}>
            {" "}
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <div>
                  <Image
                    src={Dashboard}
                    alt="logo"
                    width={400}
                    className={styles.oscurecerImagen}
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                     /* color="text.primary" */ 
                  >
                    Painel de controle
                  </Typography>
                  <Typography variant="body3"  /* color="text.secondary" */ >
                  Trabalho realizado para Centro de Estética
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      NEXT JS | JAVASCRIPT | REACT | MATERIAL UI
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea >
              <CardActions className={styles.bgBoton}>
              <Link href="https://dashboard-client-wheat.vercel.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                Ver projeto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          

          <div className={styles.card}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <Image src={Shop} alt="logo" width={400} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    /* color="text.primary" */
                  >
                    Shop YardSale
                  </Typography>
                  <Typography variant="body3" /* color="text.secondary" */>
                  Feito com Reactjs, de Figma e consulta de API
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      REACT JS | JAVASCRIPT | TAILWINDCSS | 
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.bgBoton} >
              <Link href="https://yardsaleshop.netlify.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                Ver projeto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className={styles.card}>
           
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <Image src={DashboardYardSale} alt="dashboard" width={400} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    /* color="text.primary" */
                  >
                    Painel de controle ShopYardSale
                  </Typography>
                  <Typography variant="body3" /* color="text.secondary" */>
                  Painel de controle de produto da loja virtual YardSale
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      NEXT JS | JAVASCRIPT | TAILWINDCSS
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.bgBoton} >
              <Link href="https://dashboard-nextjs-gamma.vercel.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver projecto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className={styles.card}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <Image src={Seguimiento} alt="dashboard" width={400} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    /* color="text.primary" */
                  >
                    Pacientes Veterinaria
                  </Typography>
                  <Typography variant="body3" /* color="text.secondary" */>
                    Administra tus pacientes, datos guardados en LocalStorage
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      REACT JS | JAVASCRIPT | TAILWINDCSS
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.bgBoton} >
              <Link href="https://veterinaria-seguimientopacientes.netlify.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver projeto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className={styles.card}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <Image src={Planificador} alt="dashboard" width={400} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    /* color="text.primary" */
                  >
                    Planejador de despesas
                  </Typography>
                  <Typography variant="body3" /* color="text.secondary" */>
                  Coloque o valor, coloque seus valores com a categoria deles, e é descontado automaticamente
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      REACT JS | JAVASCRIPT | CSS3 | CHART JS
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.bgBoton} >
              <Link href="https://control-presup-gasto.netlify.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver projeto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className={styles.card}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <Image src={Cripto} alt="dashboard" width={400} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    /* color="text.primary" */
                  >
                    Cotação de criptomoeda
                  </Typography>
                  <Typography variant="body3" /* color="text.secondary" */>
                  Verifique com sua criptomoeda favorita pelo preço que eles citam
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      REACT JS | VITE | STYLED COMPONENTS
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.bgBoton} >
              <Link href="https://cotiz-cripto.netlify.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver projeto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className={styles.card}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <Image src={Noticias} alt="dashboard" width={400} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    /* color="text.primary" */
                  >
                    NOTÍCIAS DA REVISTA
                  </Typography>
                  <Typography variant="body3" /* color="text.secondary" */>
                    Novidades de hoje na Argentina! com todas as categorias
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      NEXT  | JAVASCRIPT | TAILWINDCSS
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.bgBoton} >
              <Link href="https://magazine-notice.netlify.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver projeto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
          <div className={styles.card}>
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <Image src={Notas} alt="dashboard" width={400} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    /* color="text.primary" */
                  >
                    Aplicativo de notas
                  </Typography>
                  <Typography variant="body3" /* color="text.secondary" */>
                  Escreva as notas do dia, todas as informações permanecem no LocalStorage
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                       JAVASCRIPT VANILLA | CSS3
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.bgBoton} >
              <Link href="https://add-new-note-app.netlify.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver projeto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

          <div className={styles.card}>
            {" "}
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <div>
                  <Image
                    src={Blog}
                    alt="logo"
                    width={400}
                    className={styles.oscurecerImagen}
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                     /* color="text.primary" */ 
                  >
                    Blog de Cafe
                  </Typography>
                  <Typography variant="body3"  /* color="text.secondary" */ >
                  Projeto feito para amostra
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      HTML5 | CSS3 | JAVASCRIPT VANILLA |
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea >
              <CardActions className={styles.bgBoton}>
              <Link href="https://tu-blogdecafe.netlify.app/" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                  Ver projeto
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>

          <div className={styles.card}>
            {" "}
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea className={styles.bgCard}>
                <div>
                  <Image
                    src={Poke}
                    alt="logo"
                    width={400}
                    className={styles.oscurecerImagen}
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                     /* color="text.primary" */ 
                  >
                    PokeDex
                  </Typography>
                  <Typography variant="body3"  /* color="text.secondary" */ >
                  Pegue seus pokémons favoritos
                    <br />{" "}
                    <span className={styles.resaltado}>
                      {" "}
                      REACT NATIVE | EXPO CLI | STYLESHEET
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea >
              <CardActions className={styles.bgBoton}>
              <Link href="https://github.com/EnzoPrina/pokedex-r-native" legacyBehavior>
                <Button className={styles.button} size="small" color="primary">
                Ver repositório
                </Button>
                </Link>
              </CardActions>
            </Card>
          </div>








        </div>
      </div>
    </>
  );
};

export default Project;
