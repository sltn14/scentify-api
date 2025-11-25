import { getReviewsByPerfume, addReview } from "../models/reviewModel.js";

export async function listReviews(req, res) {
    try {
        const perfume_id = req.params.id;
        const reviews = await getReviewsByPerfume(perfume_id);
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function createReview(req, res) {
    try {
        const perfume_id = req.params.id;
        const { username, rating, review } = req.body;

        if (!username || !rating) {
            return res.status(400).json({ error: "username & rating required" });
        }

        const newReview = await addReview({
            perfume_id,
            username,
            rating,
            comment: review   // ⬅ penting! mapping ke kolom `comment`
        });

        res.json(newReview);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
