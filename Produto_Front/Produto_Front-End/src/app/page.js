import Link from 'next/link'
import styles from '../app/page.module.css'

export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main className={styles.principal}> 
      <Link href="/cadastro" className={styles.bt}> CADASTRAR </Link>

      {produtos.map(produtos => (
        <div key={produtos.codigo} className={styles.div1}>
          <p className={styles.title}>{produtos.titulo}</p>
          <img className={styles.img} src={produtos.imagem}/>
          <p className={styles.preco}>{produtos.preco}</p>
          <p className={styles.data}>{produtos.data_cadastro}</p>
          <p className={styles.desc}>{produtos.descricao}</p>
          

          <div id='voltar'>
          <center>
            <Link  href={`/produtos/${produtos.codigo}`} className={styles.lk}>ver mais</Link>
          </center> 
          </div>
          
        </div>
      ))}
    </main>
  )
}