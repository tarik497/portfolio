import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("📨 Formulaire reçu...");

    // Vérifier que la clé API est présente
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY manquante dans .env.local !");
      return NextResponse.json(
        { error: "Configuration manquante. Contacte l'admin." },
        { status: 500 }
      );
    }

    const { name, email, message } = await req.json();
    console.log("👤 Nom:", name, "| Email:", email);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "hamraouitarik0@gmail.com", // ← TON EMAIL ICI
      replyTo: email,
      subject: `📬 Nouveau message de ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0f1e; color: #e2e8f0; padding: 32px; border-radius: 12px; border: 1px solid #1e2d4a;">
          <h2 style="color: #00d4ff; margin-top: 0;">Nouveau message depuis ton portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 80px;">Nom</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${email}" style="color: #00d4ff;">${email}</a>
              </td>
            </tr>
          </table>
          <hr style="border-color: #1e2d4a; margin: 20px 0;" />
          <p style="color: #64748b; margin-bottom: 8px;">Message :</p>
          <p style="background: #0d1426; padding: 16px; border-radius: 8px; border-left: 3px solid #00d4ff; margin: 0; white-space: pre-wrap;">${message}</p>
          <p style="color: #334155; font-size: 12px; margin-top: 24px; margin-bottom: 0;">
            Envoyé depuis ton portfolio — Tarek Hamraoui
          </p>
        </div>
      `,
    });

    console.log("✅ Résultat Resend:", JSON.stringify(result));

    // Vérifier si Resend a retourné une erreur
    if ("error" in result && result.error) {
      console.error("❌ Erreur Resend:", result.error);
      return NextResponse.json(
        { error: `Erreur Resend: ${result.error.message}` },
        { status: 500 }
      );
    }

    console.log("✅ Email envoyé avec succès ! ID:", result.data?.id);
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ Exception:", error);
    return NextResponse.json(
      { error: "Erreur serveur. Réessaie plus tard." },
      { status: 500 }
    );
  }
}
