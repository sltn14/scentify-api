import { supabase } from "../config/supabaseClient.js";

export const PerfumeModel = {
    /**
     * opts: { q, brand, category, limit, offset }
     */
    async getAll(opts = {}) {
        const { q, brand, category, limit = 100, offset = 0 } = opts;
        let query = supabase
        .from("perfumes")
        .select(`
            id, sku, name, description, price, image_url, notes, rating, created_at,
            brands ( id, name, logo_url ),
            categories ( id, name )
        `)
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1);

        if (q) query = query.ilike("name", `%${q}%`);
        if (brand) query = query.eq("brand_id", brand);
        if (category) query = query.eq("category_id", category);

        const { data, error } = await query;
        if (error) throw error;
        return data;
    },

    async getById(id) {
        const { data, error } = await supabase
        .from("perfumes")
        .select(`
            id, sku, name, description, price, image_url, notes, rating, created_at,
            brands ( id, name, logo_url ),
            categories ( id, name )
        `)
        .eq("id", id)
        .single();
        if (error) throw error;
        return data;
    },

    async create(payload) {
        const { data, error } = await supabase.from("perfumes").insert([payload]).select().single();
        if (error) throw error;
        return data;
    },

    async update(id, payload) {
        const { data, error } = await supabase.from("perfumes").update(payload).eq("id", id).select().single();
        if (error) throw error;
        return data;
    },

    async remove(id) {
        const { error } = await supabase.from("perfumes").delete().eq("id", id);
        if (error) throw error;
        return { message: "Deleted" };
    }
};