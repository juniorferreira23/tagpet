import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { ITranslateContext, deviceLanguageType } from "./types";
import { NativeModules, Platform } from "react-native";

export const TranslateContext = createContext<ITranslateContext>({} as ITranslateContext); // criei o context

export const TranslateProvider = ({ children }: { children: ReactNode }) => { // vai prover as funcionalidades que eu quero
    const deviceLanguage: deviceLanguageType =
        Platform.OS === "ios"
            ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0]
            : NativeModules.I18nManager.localeIdentifier
    const [translateTo, setTranslateTo] = useState<deviceLanguageType>(deviceLanguage)

    const toggleLanguage = (change: boolean) => {
        const language: deviceLanguageType[] = ["pt_BR", "en_US"];

        setTranslateTo(language[Number(change)]);
    }
    return (
        <TranslateContext.Provider value={{ translateTo, toggleLanguage }}>{children}</TranslateContext.Provider>
    );
}

export const useTranslate = () => { // permitir eu usar essas funcionalidades em qualquer tela
    const context = useContext(TranslateContext);

    if (!context) {
        throw new Error("Não foi possível achar o contexto para o TranslateContext")
    }

    return context;
}