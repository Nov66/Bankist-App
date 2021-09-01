'use strict';
/* HIGHLIGHT: Internationalizing Dates (INTL)
1. Set the Current Date and Time (static -> haven't implement Timer) -> day/month/year
2. Experimenting with API (Internationalization)
NOTE:
- Pass Locale inside DateTimeFormat -> 'en-UK', 'en-US', 'ar-SY' (http://www.lingoes.net/en/translator/langcode.htm)
*/
const labelDate = document.querySelector('.date');
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // 'numeric', '2-digit'
  year: 'numeric', // '2-digit
  weekday: 'long', // 'short'
};
// NOTE: Can set according to User Browser Language
const locale = navigator.language;
console.log(locale);
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

/* HIGHLIGHT: Internationalizing Regular Numbers (INTL)
1. Experimenting with API (Internationalization)
NOTE:
*/
const num = 3884764.23;
const options2 = {
  style: 'currency', // NOTE: unit, currency, percent
  // unit: 'mile-per-hour',
  unit: 'celsius',
  currency: 'EUR', // NOTE: Must declare Currency Manually
  // useGrouping: false,
};

console.log('US:', new Intl.NumberFormat('en-US', options2).format(num)); // US: 3,884,764.23
console.log('Germany:', new Intl.NumberFormat('de-DE', options2).format(num)); // Germany: 3.884.764,23
console.log('Syria:', new Intl.NumberFormat('ar-SY', options2).format(num)); // Syria: ٣٬٨٨٤٬٧٦٤٫٢٣
console.log('China:', new Intl.NumberFormat('zh-CN', options2).format(num)); // China: 3,884,764.23
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options2).format(num) // en-AU 3,884,764.23
);
