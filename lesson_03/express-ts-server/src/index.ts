import express from "express";
const app = express();
app.use(express.json());
// Тестовый метод для проверки работы приложение
app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT} http://localhost:${PORT}`);
})