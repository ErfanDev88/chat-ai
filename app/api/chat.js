import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { message } = req.body;

  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/gpt2",
      { inputs: message },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN}`,
        },
      }
    );

    const reply = response.data[0]?.generated_text || "No response";
    res.status(200).json({ reply });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ message: "Error fetching AI response" });
  }
}
