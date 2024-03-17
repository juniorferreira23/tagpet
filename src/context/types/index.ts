export interface ITranslateContext {
    translateTo: deviceLanguageType;
    toggleLanguage: (change: boolean) => void
}

export type deviceLanguageType = "en_US" | "pt_BR"
