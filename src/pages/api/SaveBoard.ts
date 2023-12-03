import { supabase } from "../../initSupabase";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const data = req.body;
    const { error } = await supabase.from("boards").insert(data);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ success: true });
  } else if (req.method === "GET") {
    const data = req.body;
    const { error } = await supabase.from("boards").select().eq("id", data.id);
    if (error) {
      res.status(200).json(data);
    } else {
      res.status(500).json(error);
    }
  } else if (req.method === "PUT") {
    const id = req.query.id;
    const { approval } = req.body; // Extract the approval value from the request body

    // Update the "Approval" field for the specified user
    const data = req.body;

    const { error } = await supabase
      .from("BiomarkerGraphs")
      .update({ data: data.data })
      .eq("userId", id);

    if (!error) {
      res.status(200).json(data);
    } else {
      res.status(500).json(error);
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
