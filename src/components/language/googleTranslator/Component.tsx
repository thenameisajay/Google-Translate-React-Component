"use client";

// ONLY FOR CLIENT SIDE RENDERING
import { useEffect } from "react";

// ?Fixed : ?Docs related to massive bug : https://stackoverflow.com/questions/50298201/react-js-google-translate-not-working
// ?Fixed : The duplication or multiplication of the language bars is as a result of document.body.appendChild(script) being called every time the page loads/renders.
const GoogleTranslator = ({ show }: { show: boolean }) => {
    useEffect(() => {
        if (show) {
            // @ts-expect-error : Types are not available for google translate or not of concern at the moment.
            if (!window.googleTranslateElementInit) {
                // @ts-expect-error : Types are not available for google translate or not of concern at the moment.
                window.googleTranslateElementInit = () => {
                    // @ts-expect-error : Types are not available for google translate or not of concern at the moment.
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: "en",
                            includedLanguages:
                                "af,am,ar,az,be,bg,bn,bs,ca,ceb,co,cs,cy,da,de,el,en,eo,es,et,eu,fa,fi,fr,fy,ga,gd,gl,gu,ha,haw,he,hi,hmn,hr,ht,hu,hy,id,ig,is,it,ja,jw,ka,kk,km,kn,ko,ku,ky,la,lt,lv,mg,mi,ms,mt,my,ne,nl,no,ny,pa,pl,pt,ro,ru,sd,si,sk,sl,sm,sn,so,sq,sr,st,sv,sw,ta,te,tg,th,tr,uk,ur,uz,vi,xh,yi,yo,zh-CN,zh-TW,zu",
                            // @ts-expect-error : Types are not available for google translate or not of concern at the moment.
                            layout: window.google.translate.TranslateElement
                                .InlineLayout.SIMPLE,
                        },
                        "google_translate_element",
                    );
                };
            }

            if (
                !document.querySelector(
                    'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]',
                )
            ) {
                const script = document.createElement("script");
                script.type = "text/javascript";
                script.src =
                    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
                document.head.appendChild(script);
            }

            if (!document.querySelector("style[data-google-translate-style]")) {
                const style = document.createElement("style");
                style.setAttribute("data-google-translate-style", "true");
                style.innerHTML = `
                    .goog-te-gadget-simple { background-color: #f9f9f9; border: 1px solid #ddd; padding: 10px; border-radius: 4px; font-size: 14px; font-family: Arial, sans-serif; }
                    .goog-te-gadget-simple img { display: none; }
                    .goog-te-gadget-simple a { text-decoration: none; color: #4285f4; }
                    .goog-te-gadget-simple a:hover { text-decoration: underline; }
                    .goog-te-gadget-simple select { border: none; background: transparent; color: #4285f4; font-size: 14px; }
                `;
                document.head.appendChild(style);
            }
        }
    }, [show]);

    return show ? (
        <div id="google_translate_element" className="mt-4"></div>
    ) : null;
};

export default GoogleTranslator;
