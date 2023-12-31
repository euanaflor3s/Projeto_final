"use client"
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [data_cadastro, setData_cadastro] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();


    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            titulo: titulo,
            data_cadastro: data_cadastro,
            preco: preco,
            descricao: descricao,
            imagem: imagem,
          };

        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3003/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson,
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>

                <center>

                <input className={styles.ana}
                    type="text"  
                    placeholder='Titulo'
                    nome="titulo"
                    onChange={e => setTitulo(e.target.value)}
                /><br/>
                <input className={styles.ana}
                    type="date"
                    placeholder='Data'
                    nome="data_cadastro"
                    onChange={e => setData_cadastro(e.target.value)}
                /><br/>
                <input className={styles.ana}
                    type="number"
                    placeholder='Preço'
                    nome="preco"
                    onChange={e => setPreco(e.target.value)}
                /><br/>
                <input className={styles.ana}
                    type="text"
                    placeholder='Descrição'
                    nome="descricao"
                    onChange={e => setDescricao(e.target.value)}
                /><br/>
                <input className={styles.ana}
                    type="text"
                    placeholder='Imagem'
                    nome="imagem"
                    onChange={e => setImagem(e.target.value)}
                /><br/>

                <button type='submit' className={styles.botao}>CADASTRAR</button> <br/><br/>

                <div>
                    <a className={styles.voltar} href='/'>Voltar</a>
                </div>

                </center>
                
            </form>
        </div>
    );
}