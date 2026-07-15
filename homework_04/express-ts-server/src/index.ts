import express from "express";

import todosRouter from "./modules/todos/routes/todos.routes"

const app = express();
app.use(express.json());
// Тестовый метод для проверки работы приложение
app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

app.use("/todos", todosRouter)

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT} http://localhost:${PORT}`);
})