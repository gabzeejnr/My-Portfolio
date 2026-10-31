function hostOf(url?: string) {
    if (!url) return "";
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch {
        return "";
    }
}


export { hostOf }