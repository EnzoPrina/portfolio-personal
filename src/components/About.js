import React from 'react'
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <>
      <div className={styles.bg}>
          <div className={styles.titulo}>
                <h2>Sobre mim</h2>
          </div>
          <div className={styles.description}>
            <h3>Obrigado por chegar aqui! vou contar um pouco sobre mim ✈💻</h3>
              <p>Sou um jovem argentino morando em <span className={styles.resaltado}>Portugal 💚💖</span> , mais em Bragança, <br/> uma ótima cidade para se viver com tranquilidade.
              Emigrar para ter um futuro melhor e com mais possibilidades. <br/>
              Antes dessa linda loucura, trabalhei por 4 anos em gráfica,  na função de<span className={styles.resaltado}> Designer Gráfico.</span>  <br/>
Fui responsável pelo design corporativo, branding e logotipos.  O design sempre esteve perto de mim na família. <br/>
Estudei e aprendi como autodidata desde que havia uma vaga naquele cargo e aproveitei a oportunidade.<br/>
Com essa experiência aprendi como me desenvolvo, não tenho dificuldade em aprender algo novo e fico muito mais forte com a prática.<br/>
Atualmente sou Desenvolvedor React tenho facilidade para criar bons ambientes,<br/>
pela minha personalidade relaxada e produtiva. Eu gosto e isso não dificulta meu desenvolvimento como equipe.<br/>
Eu sinto que você sempre aprende através do conhecimento recíproco, da retroalimentação do conhecimento em grupo
o fortalece.<br/>
            
                </p>
          </div>
      </div>
    </>
  )
}

export default About