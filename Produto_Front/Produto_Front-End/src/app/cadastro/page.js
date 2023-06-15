'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, seTitulo] = useState();
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
            imagem: imagem

        }
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3003/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>
                <input
                    type="text"
                    placeholder='Titulo:'
                    nome="titulo"
                    onChange={e => setNome(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Data_cadastro:'
                    nome="data_cadastro"
                    onChange={e => setIdade(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Preco:'
                    nome="preco"
                    onChange={e => setUF(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Descricao:'
                    nome="descricao"
                    onChange={e => setIdade(e.target.value)}
                /><br/>
                <input
                    type="imagem"
                    placeholder='Imagem:'
                    nome="imagem"
                    onChange={e => setIdade(e.target.value)}
                /><br/>
                <button type='submit'>Cadastrar</button>
                <div>
                    <a href='/'>Voltar</a>
                </div>
            </form>
        </div>
    );
}