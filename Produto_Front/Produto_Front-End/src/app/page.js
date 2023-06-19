import Link from 'next/link'
import styles from './home.css'

export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main> 
      <Link href="/cadastro" className={styles.botao}> CADASTRAR </Link>

      {produtos.map(produtos => (
        <div key={produtos.id}>
          <p>{produtos.titulo}</p>
          <p>{produtos.data_cadastro}</p>
          <p>{produtos.preco}</p>
          <p>{produtos.descricao}</p>
          <p>{produtos.imagem}</p>

          <div id='voltar'>
          <center>
            <Link href={`/produto/${produtos.id}`}>ver mais</Link>
          </center> 
          </div>
          
        </div>
      ))}
    </main>
  )
}