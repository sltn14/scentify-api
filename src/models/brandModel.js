import { supabase } from "../config/supabaseClient.js";

export const BrandModel = {
    async getAll() {
        const { data, error } = await supabase.from("brands").select("*").order('name');
        if (error) throw error;
        return data;
    },

    async getById(id) {
        const { data, error } = await supabase.from("brands").select("*").eq("id", id).single();
        if (error) throw error;
        return data;
    },

    async create(payload) {
        const { data, error } = await supabase.from("brands").insert([payload]).select().single();
        if (error) throw error;
        return data;
    },

    async update(id, payload) {
        const { data, error } = await supabase.from("brands").update(payload).eq("id", id).select().single();
        if (error) throw error;
        return data;
    },

    async remove(id) {
        const { error } = await supabase.from("brands").delete().eq("id", id);
        if (error) throw error;
        return { message: "Brand deleted" };
    }
};