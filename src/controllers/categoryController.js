import { CategoryModel } from "../models/categoryModel.js";

export const CategoryController = {
    async getAll(req, res) {
        try {
        const data = await CategoryModel.getAll();
        res.json(data);
        } catch (e) {
        res.status(500).json({ error: e.message });
        }
    },

    async create(req, res) {
        try {
        const data = await CategoryModel.create(req.body);
        res.status(201).json(data);
        } catch (e) {
        res.status(400).json({ error: e.message });
        }
    },

    async getById(req, res) {
        try {
        const data = await CategoryModel.getById(req.params.id);
        res.json(data);
        } catch (e) {
        res.status(404).json({ error: e.message });
        }
    },

    async remove(req, res) {
        try {
        const result = await CategoryModel.remove(req.params.id);
        res.json(result);
        } catch (e) {
        res.status(400).json({ error: e.message });
        }
    }
};
