import { Router } from "express";
import { v7 } from "uuid";

import { Todo } from "./../todos.types";

const router = Router();

const todos: Todo[] = [
{
    id: v7(),
    title: "add Homework 03",
    content: "Add the completed Homework 03 project to the repository.",
    status: "todo"
},
{
    id: v7(),
    title: "Learn Express",
    content: "Read the Express documentation.",
    status: "in-progress"
},
{
    id: v7(),
    title: "Create a router",
    content: "Create a router for todo requests.",
    status: "done"
},
];

router.get("/", (_req, res)=>{
    res.status(200).json(todos)
})

export default router;