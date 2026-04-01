export function updateFavicon(faviconUrl: string): void {
  let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = faviconUrl;
}

export function updateDocumentTitle(productName: string): void {
  document.title = productName;
}
