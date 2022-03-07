import express from 'express';
const router = express.Router();
router.get('/get', (req, res) => {
    setTimeout((() => {
        res.json({ name: "get" })

    }), 5000)
})
router.get('/get1', (req, res) => {
    setTimeout((() => {
        res.json({ name: "get1111111111" })

    }), 1000)
})
export default router;