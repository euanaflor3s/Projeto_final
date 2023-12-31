const express = require('express');
const path = require('path');
const Produto = require("./models/produto");
const cors= require('cors');
const app = express();

app.use(cors());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/produtos', async function(req, res){
  try {
    var produtos = await Produto.select();
    res.json(produtos.rows);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos' });
  }
});

app.post('/produtos', async function(req, res){
  try {
    var produto = await Produto.insert(req.body.id);
    res.json(produto.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao buscar produtos' });
  }
});

//Essa rota é do tipo post e funciona para remover um produto
app.delete('/produtos', async function(req, res){
  try {
    console.log(req.body.id)
    var produto = await Produto.delete(req.body.id);
    res.json(produto.rows);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar produto' });
  }
});

//recupera todos os produtos
app.get('/produto', async function(req, res){
  try {
    var produtos = await Produto.select();
    res.json(produtos.rows);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar produtos' });
  }
})
//altera os dados
app.put('/produto/:id', async function(req, res){
  try{
    var produto = await Produto.update(req.params.id, req.body);
    res.json(produto.rows);
  }
  catch(error){
    console.log( 'Erro ao atualizar um produto', error);
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar produto'})
  }
})


app.listen(3003, function() {
  console.log(`app de Exemplo escutando na porta! ${3003}`)
});
