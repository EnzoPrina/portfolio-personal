
import React from 'react'
import styles from '../styles/jobs.module.css'

const Jobs = () => {
  return (
    <>
    <div className={styles.bgImage}>
      <div className={styles.jobs}>
              <div className={styles.titulo}>
                <h2>Por que me escolher para desenvolver seu site?</h2>
              </div>
              <div className={styles.description}>
                <h3>Experiência</h3>
                  <p>Desenvolvi vários projetos para diferentes empreendimentos, <br/>
                  para que o seu atendesse aos mais altos padrões de qualidade <br/>
                  (Certificação SSL, Paypal, Transferência, etc)</p>
                <h3>Ofertas pessoais</h3>
                  <p>Evite perder tempo conversando com bots automatizados, <br/>
                  Responderei a todas as suas questões durante os horários disponíveis (para mais informações, envie-me um email na secção de contactos)</p>
                <h3>Evite problemas com pagamentos</h3>
                  <p>Um adiantamento de 40% do total, e 60% após a conclusão da obra, <br/>
                  Você pode pagar por diferentes meios (pagamento em dinheiro, transferência bancária). <br/>
                  </p>
              </div>
      </div>
    </div>
    </>
  )
}

export default Jobs