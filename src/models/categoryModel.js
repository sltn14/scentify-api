import { supabase } from "../config/supabaseClient.js";

export const CategoryModel = {
    async getAll() {
        const { data, error } = await supabase.from("categories").select("*").order('name');
        if (error) throw error;
        return data;
    },

    async getById(id) {
        const { data, error } = await supabase.from("categories").select("*").eq("id", id).single();
        if (error) throw error;
        return data;
    },

    async create(payload) {
        const { data, error } = await supabase.from("categories").insert([payload]).select().single();
        if (error) throw error;
        return data;
    },

    async remove(id) {
        const { error } = await supabase.from("categories").delete().eq("id", id);
        if (error) throw error;
        return { message: "Category deleted" };
    }
};
