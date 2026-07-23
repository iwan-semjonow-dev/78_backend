import { Router } from "express";

import { v7 } from "uuid";

import { User } from "./users.types";

const router = Router();

const users: User[] = [
    {
        id: v7(),
        name: "Anna Schmidt",
        email: "anna_15@gmail.com",
        password: "password123456",
        role: "user",
        createdAt: new Date(),
    },
    {
        id: v7(),
        name: "Igor Petrov",
        email: "igor_17@gmail.com",
        password: "admin123456",
        role: "admin",
        createdAt: new Date(),
    },
    {
        id: v7(),
        name: "Petr Ivanov",
        email: "petr_12@gmail.com",
        password: "user123456",
        role: "user",
        createdAt: new Date(),
    },
];

router.get("/", (_req, res) => {
    res.status(200).json(users);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({ error: `User with id ${id} not found` });
    }

    res.status(200).json(user);
});

router.post("/", (req, res) => {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
        return res.status(400).json({ error: "Bad request" });
    }
    const user = { id: v7(), name, email, password, role, createdAt: new Date() };
    users.push(user);
    res.status(201).json(user);
});

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({ error: `User with id ${id} not found` });
    }

    if (!name && !email && !password && !role) {
        return res.status(400).json({ error: "Bad request" });
    }

    if (name) {
        user.name = name;
    }

    if (email) {
        user.email = email;
    }

    if (password) {
        user.password = password;
    }

    if (role) {
        user.role = role;
    }

    res.status(200).json(user);
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({ error: `User with id ${id} not found` });
    }
    const indexOfUser = users.findIndex((user) => user.id === id);
    users.splice(indexOfUser, 1);

    res.status(200).json(user);
});

export default router;
