import { supabase } from "../../initSupabase";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const data = req.body;
    const { error } = await supabase.from("boards").insert(data);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true });
  } else if (req.method === "GET") {
    if (req.query.id) {
      // If an id is provided, return the record with that id
      const data = req.query;
      const { error } = await supabase
        .from("boards")
        .select()
        .eq("id", data.id);
      if (error) {
        res.status(200).json(data);
      } else {
        res.status(500).json(error);
      }
    } else {
      // If no id is provided, return all records
      const { data, error } = await supabase.from("boards").select();
      if (error) {
        res.status(500).json(error);
      } else {
        res.status(200).json(data);
      }
    }
  } else if (req.method === "PUT") {
    const id = req.query.id;

    const data = req.body;

    const { error } = await supabase
      .from("boards")
      .update({ data: data.data })
      .eq("id", data.id);

    if (!error) {
      res.status(200).json(data);
    } else {
      res.status(500).json(error);
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
