export const initAnalytics = () => {
  if (document.getElementById("ga-script")) return;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`;
  document.head.appendChild(script);

  const inlineScript = document.createElement("script");
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
  `;
  document.head.appendChild(inlineScript);
};
