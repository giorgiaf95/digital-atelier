/**
 * 🎯 FEATURE FLAGS - Digital Atelier
 * 
 * Controlla quali funzionalità sono attive nel sito.
 * Cambia i valori per abilitare/disabilitare features.
 */

export const FEATURES = {
  // 👤 Funzionalità utenti (TUTTE DISABILITATE per ora)
  USER_AUTHENTICATION: false,  // Login/Registrazione (/login)
  USER_PROFILES: false,         // Profili utente (/profilo)
  WISHLIST: false,              // Lista desideri (/wishlist) + icone Heart
  USER_SETTINGS: false,         // Impostazioni utente (/impostazioni)
  
  // ⭐ Interazioni utenti (TUTTE DISABILITATE)
  RATINGS: false,               // Stelle valutazione progetti
  COMMENTS: false,              // Sistema commenti
  FAVORITES: false,             // Bottone "Aggiungi alla Wishlist"
  
  // ✅ Funzionalità portfolio (SEMPRE ATTIVE)
  PORTFOLIO: true,              // Gallerie progetti
  NEWS: true,                   // Sezione news/blog
  CONTACT_FORM: true,           // Form contatti
  SEARCH: true,                 // Ricerca nel sito
  
} as const;

/**
 * Helper function per verificare se una feature è attiva
 */
export const isFeatureEnabled = (feature: keyof typeof FEATURES): boolean => {
  return FEATURES[feature];
};

/**
 * Helper per verificare se QUALSIASI feature utente è attiva
 */
export const hasUserFeatures = (): boolean => {
  return FEATURES.USER_AUTHENTICATION || 
         FEATURES.USER_PROFILES || 
         FEATURES.WISHLIST || 
         FEATURES.USER_SETTINGS;
};