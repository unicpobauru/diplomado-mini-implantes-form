export interface CountryCode {
  /** Nombre único — se usa como value del <select> (el dial no es único: EE.UU. y Rep. Dominicana comparten +1). */
  name: string;
  dial: string;
  flag: string;
}

/** Brasil primero (sede del programa), después el resto de LATAM + Iberia + EE.UU. en orden alfabético. */
export const countryCodes: CountryCode[] = [
  { name: "Brasil", dial: "+55", flag: "🇧🇷" },
  { name: "Argentina", dial: "+54", flag: "🇦🇷" },
  { name: "Bolivia", dial: "+591", flag: "🇧🇴" },
  { name: "Chile", dial: "+56", flag: "🇨🇱" },
  { name: "Colombia", dial: "+57", flag: "🇨🇴" },
  { name: "Costa Rica", dial: "+506", flag: "🇨🇷" },
  { name: "Ecuador", dial: "+593", flag: "🇪🇨" },
  { name: "El Salvador", dial: "+503", flag: "🇸🇻" },
  { name: "España", dial: "+34", flag: "🇪🇸" },
  { name: "Estados Unidos", dial: "+1", flag: "🇺🇸" },
  { name: "Guatemala", dial: "+502", flag: "🇬🇹" },
  { name: "Honduras", dial: "+504", flag: "🇭🇳" },
  { name: "México", dial: "+52", flag: "🇲🇽" },
  { name: "Nicaragua", dial: "+505", flag: "🇳🇮" },
  { name: "Panamá", dial: "+507", flag: "🇵🇦" },
  { name: "Paraguay", dial: "+595", flag: "🇵🇾" },
  { name: "Perú", dial: "+51", flag: "🇵🇪" },
  { name: "Portugal", dial: "+351", flag: "🇵🇹" },
  { name: "República Dominicana", dial: "+1", flag: "🇩🇴" },
  { name: "Uruguay", dial: "+598", flag: "🇺🇾" },
  { name: "Venezuela", dial: "+58", flag: "🇻🇪" },
];
