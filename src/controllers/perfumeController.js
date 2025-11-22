import { PerfumeModel } from "../models/perfumeModel.js";

export const PerfumeController = {
    async getAll(req, res) {
        try {
        const opts = {
            q: req.query.q,
            brand: req.query.brand,
            category: req.query.category,
            limit: req.query.limit ? parseInt(req.query.limit) : 100,
            offset: req.query.offset ? parseInt(req.query.offset) : 0
        };
        const data = await PerfumeModel.getAll(opts);
        res.json(data);
        } catch (e) {
        res.status(500).json({ error: e.message });
        }
    },

    async getById(req, res) {
        try {
        const data = await PerfumeModel.getById(req.params.id);
        res.json(data);
        } catch (e) {
        res.status(404).json({ error: e.message });
        }
    },

    async create(req, res) {
        try {
        const data = await PerfumeModel.create(req.body);
        res.status(201).json(data);
        } catch (e) {
        res.status(400).json({ error: e.message });
        }
    },

    async update(req, res) {
        try {
        const data = await PerfumeModel.update(req.params.id, req.body);
        res.json(data);
        } catch (e) {
        res.status(400).json({ error: e.message });
        }
    },

    async remove(req, res) {
        try {
        const result = await PerfumeModel.remove(req.params.id);
        res.json(result);
        } catch (e) {
        res.status(400).json({ error: e.message });
        }
    }
};