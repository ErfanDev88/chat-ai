export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "zai-org/GLM-4.5:fireworks-ai",
        messages: [
          { role: "user", content: message }
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("HuggingFace API error:", data);
      return new Response(
        JSON.stringify({ message: "Error from HuggingFace API" }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    const reply = data.choices?.[0]?.message?.content || "No response";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Server error:", err);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
