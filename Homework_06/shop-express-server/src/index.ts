import express from "express"

import usersRouter from "./modules/users/routes/users.routes"

const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

app.use("/users", usersRouter);

const PORT = 3000;

app.listen(PORT, ()=> {
    console.log(`Server started on port ${PORT} http://localhost:${PORT}`);
})