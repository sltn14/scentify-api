import { BrandModel } from "../models/brandModel.js";

export const BrandController = {
    async getAll(req, res) {
        try {
        const data = await BrandModel.getAll();
        res.json(data);
        } catch (e) {
        res.status(500).json({ error: e.message });
        }
    },

    async getById(req, res) {
        try {
        const data = await BrandModel.getById(req.params.id);
        res.json(data);
        } catch (e) {
        res.status(404).json({ error: e.message });
        }
    },

    async create(req, res) {
        try {
        const data = await BrandModel.create(req.body);
        res.status(201).json(data);
        } catch (e) {
        res.status(400).json({ error: e.message });
        }
    },

    async update(req, res) {
        try {
        const data = await BrandModel.update(req.params.id, req.body);
        res.json(data);
        } catch (e) {
        res.status(400).json({ error: e.message });
        }
    },

    async remove(req, res) {
        try {
        const result = await BrandModel.remove(req.params.id);
        res.json(result);
        } catch (e) {
        res.status(400).json({ error: e.message });
        }
    }
};