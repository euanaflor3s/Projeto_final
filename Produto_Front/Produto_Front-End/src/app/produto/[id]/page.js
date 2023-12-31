'use client'


import { useRouter } from "next/navigation";
import styles from './inicio.css'


export default async function Produtos({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }


    const idJson = JSON.stringify(id);


    const req = await fetch("http://localhost:3003/produto", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const produto = await req.json();




    const remover = () => {
        console.log(idJson)
        try {
            fetch("http://localhost:3003/produtos", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: idJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }
    return (
        <div className={styles.div1}>
            <p>{produto.titulo}</p>
            <p>{produto.data_cadastro}</p>
            <p>{produto.preco}</p>
            <p>{produto.descricao}</p>
            <img src={produto.imagem}/>
            <button onClick={e => e.preventDefault(remover())}>REMOVER</button>


        </div>


    )
}
