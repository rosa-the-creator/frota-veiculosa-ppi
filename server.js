import express from 'express'
import { veiculoRouter } from './src/routes/veiculo.routes'

const app = express ()
const port = 3000 

app.use(express.json())

app.use ("/veiculos", veiculoRouter)

app.listen(port, () => {
    console.log('app rodando em http://localhost:3000');
})