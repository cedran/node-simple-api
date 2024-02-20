import express from "express";
const router = express.Router();

router.get('/users', (req, res) => {
    res.send('Lista de todos os usuários');
});

router.get('/users/:id', (req, res) => {
    res.send(`Obter detalhes do usuário com ID ${req.params.id}`);
});

router.post('/users', (req, res) => {
    res.send('Criar um novo usuário');
});

router.put('/users/:id', (req, res) => {
    res.send(`Atualizar o usuário com ID ${req.params.id}`);
});

router.delete('/users/:id', (req, res) => {
    res.send(`Deletar o usuário com ID ${req.params.id}`);
});

export default router;