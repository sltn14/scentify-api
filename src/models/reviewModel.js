import db from "../config/db.js";

export async function getReviewsByPerfume(perfume_id) {
    const { data, error } = await db
        .from("reviews")
        .select("*")
        .eq("perfume_id", perfume_id)
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
}

export async function addReview({ perfume_id, username, rating, comment }) {
    const { data, error } = await db
        .from("reviews")
        .insert([{ perfume_id, username, rating, comment }])
        .select()
        .single();

    if (error) throw error;
    return data;
}
