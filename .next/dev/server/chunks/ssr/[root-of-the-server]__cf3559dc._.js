module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/app/polityka-prywatnosci/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.0_@babel+core@7.28.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$marked$40$16$2e$4$2e$1$2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/marked@16.4.1/node_modules/marked/lib/marked.esm.js [app-rsc] (ecmascript)");
;
;
;
;
async function Page() {
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "content", "polityka-prywatnosci.md");
    const fileContent = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, "utf-8");
    const html = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$marked$40$16$2e$4$2e$1$2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["marked"])(fileContent);
    // Dodaj klasy do mailto linków i usuń wcześniejsze modyfikacje nagłówków.
    // Jeśli <a> już ma class=... - dopisz tam nasze klasy, inaczej dodaj nowy atrybut class.
    const processedHtml = html.replace(/<a\s+([^>]*?)href=["']mailto:([^"']+)["']([^>]*)>/gi, (match, beforeHref = "", email = "", afterHref = "")=>{
        const combined = `${beforeHref} ${afterHref}`.trim();
        // jeśli istnieje class="..."/class='...' w atrybutach, dopisz klasy
        const classAttrMatch = combined.match(/class=(["'])(.*?)\1/);
        if (classAttrMatch) {
            const quote = classAttrMatch[1];
            const existing = classAttrMatch[2];
            const newClass = `${existing} text-primary-color dark:text-brand`.trim();
            // zastąp istniejący class attr w oryginalnym match
            return match.replace(/class=(["'])(.*?)\1/, `class=${quote}${newClass}${quote}`);
        }
        // w przeciwnym wypadku dodaj nowy atrybut class na końcu tagu otwierającego <a ... >
        // zachowaj wszystkie inne atrybuty (beforeHref i afterHref)
        const attrs = `${beforeHref} href="mailto:${email}" ${afterHref}`.trim();
        return `<a ${attrs} class="text-primary-color dark:text-brand">`;
    });
    // Add classes to h1 and h2: make them bold and a bit larger.
    // If tag already has class attribute, append our classes; otherwise add a new class attribute.
    const withHeadings = processedHtml.replace(/<h1([^>]*)>/gi, (match, attrs = "")=>{
        if (/class=(['\"]).*?\1/.test(attrs)) {
            return match.replace(/class=(['\"])(.*?)\1/, (_m, q, existing)=>{
                return `class=${q}${existing} font-bold text-3xl md:text-4xl mt-6${q}`;
            });
        }
        return `<h1${attrs} class="font-bold text-3xl md:text-4xl mt-6">`;
    }).replace(/<h2([^>]*)>/gi, (match, attrs = "")=>{
        if (/class=(['\"]).*?\1/.test(attrs)) {
            return match.replace(/class=(['\"])(.*?)\1/, (_m, q, existing)=>{
                return `class=${q}${existing} font-bold text-2xl md:text-3xl mt-5${q}`;
            });
        }
        return `<h2${attrs} class="font-bold text-2xl md:text-3xl mt-5">`;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "prose prose-invert mx-auto p-6 max-w-4xl pt-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$0_$40$babel$2b$core$40$7$2e$28$2e$4_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                dangerouslySetInnerHTML: {
                    __html: processedHtml
                }
            }, void 0, false, {
                fileName: "[project]/app/polityka-prywatnosci/page.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/polityka-prywatnosci/page.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/polityka-prywatnosci/page.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/polityka-prywatnosci/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/polityka-prywatnosci/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cf3559dc._.js.map