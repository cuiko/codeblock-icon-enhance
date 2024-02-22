// ==UserScript==
// @name           GitHub 代码块图标增强（基于 NerdFont）
// @name:en        GitHub CodeBlock Icon Enhance PowerBy NerdFont
// @description    通过为 GitHub 代码块设置 NerdFont 字体以显示更多图标。
// @description:en Display more icons by setting NerdFont for GitHub's code block.
// @icon           https://www.google.com/s2/favicons?sz=64&domain=github.com
// @author         cuiko
// @namespace      https://github.com/cuiko/codeblock-icon-enhance
// @homepage       https://github.com/cuiko/codeblock-icon-enhance
// @supportURL     https://github.com/cuiko/codeblock-icon-enhance/issues
// @version        0.1.0
// @license        GPL-3.0
// @match          *://github.com/*
// @grant          GM_addStyle
// @run-at         document-start
// ==/UserScript==

(function() {
  'use strict';
  // 默认配置
  let default_settings = {
    preFonts: ["ui-monospace", "SFMono-Regular", "SF Mono", "Menlo", "Consolas", "Liberation Mono", "monospace"],
    nerdFonts: ["CaskaydiaCove Nerd Font Propo"],
  }
  // 添加 root 样式
  GM_addStyle(` :root { --nerd-font-name: ${default_settings.nerdFonts.join(',')} } `)
  GM_addStyle(` :root :is(pre,pre *,code,code *,.cm-editor [class*='cm-'] *,.code,.code *,.blob-num,.blob-num *,.blob-code,.blob-code *,textarea,.react-line-numbers *,.react-code-lines *):not([class*='expand' i],[class*='collapse' i]) { font-family: ${default_settings.preFonts.join(',')},var(--nerd-font-name) !important; } `)
})();
