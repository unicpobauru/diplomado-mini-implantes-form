import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { WhatsappIcon } from "./SocialIcons";
import { buildWhatsappUrl, logToGoogleSheet, type LeadFormData } from "../../lib/leadForm";
import { countryCodes } from "../../data/countryCodes";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[14px] text-white placeholder:text-white/35 outline-none transition-colors duration-200 focus:border-gold-400/60 focus:bg-white/[0.09]";

/**
 * A propósito NO reutiliza `inputClass` (que trae `w-full`): mezclar `w-full`
 * con un ancho fijo en el mismo elemento hace que el navegador use el que
 * gane en el CSS compilado, no el que aparece último en el JSX — por eso el
 * selector de país había quedado enorme y el campo de teléfono, minúsculo.
 */
const selectClass =
  "shrink-0 truncate whitespace-nowrap rounded-xl border border-white/15 bg-white/[0.06] px-2 py-3 text-[13px] text-white outline-none transition-colors duration-200 focus:border-gold-400/60 focus:bg-white/[0.09]";

const labelClass = "text-left text-[12.5px] font-semibold text-white/70";

export function LeadForm() {
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState(countryCodes[0].name);
  const [telefonoLocal, setTelefonoLocal] = useState("");
  const [email, setEmail] = useState("");
  const [esOdontologo, setEsOdontologo] = useState<"Sí" | "No" | "">("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!nombre.trim() || !telefonoLocal.trim() || !email.trim() || !esOdontologo) {
      setError("Completa todos los campos para continuar.");
      return;
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    setSubmitting(true);
    const dial = countryCodes.find((c) => c.name === pais)?.dial ?? countryCodes[0].dial;
    const data: LeadFormData = {
      nombre: nombre.trim(),
      telefono: `${dial} ${telefonoLocal.trim()}`,
      email: email.trim(),
      esOdontologo,
    };

    logToGoogleSheet(data);
    window.open(buildWhatsappUrl(), "_blank", "noopener,noreferrer");
    setSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3.5 text-left" noValidate>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="lead-nombre">
          Nombre completo
        </label>
        <input
          id="lead-nombre"
          type="text"
          autoComplete="name"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className={inputClass}
          placeholder="Tu nombre y apellido"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="lead-telefono">
          Teléfono (DDD + número)
        </label>
        <div className="flex gap-2">
          <select
            id="lead-pais"
            aria-label="País"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            className={`${selectClass} w-[84px]`}
          >
            {countryCodes.map((c) => (
              <option key={c.name} value={c.name} className="bg-[#0f1512] text-white">
                {c.flag} {c.dial} {c.name}
              </option>
            ))}
          </select>
          <input
            id="lead-telefono"
            type="tel"
            autoComplete="tel-national"
            value={telefonoLocal}
            onChange={(e) => setTelefonoLocal(e.target.value)}
            className={`${inputClass} min-w-0 flex-1`}
            placeholder="11 91234-5678"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass} htmlFor="lead-email">
          Correo electrónico
        </label>
        <input
          id="lead-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="tu@email.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <span className={labelClass}>¿Eres odontólogo?</span>
        <div className="grid grid-cols-2 gap-2">
          {(["Sí", "No"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setEsOdontologo(option)}
              className={`rounded-xl border px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.04em] transition-colors duration-200 ${
                esOdontologo === option
                  ? "border-gold-400 bg-gold-500 text-white"
                  : "border-white/15 bg-white/[0.06] text-white/70 hover:border-white/30"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-[12.5px] font-medium text-red-300">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-600 disabled:pointer-events-none disabled:opacity-60"
      >
        {submitting ? (
          <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.5} />
        ) : (
          <WhatsappIcon className="h-4 w-4 shrink-0" />
        )}
        Entrar a la fila del proceso de selección
      </button>
    </form>
  );
}
