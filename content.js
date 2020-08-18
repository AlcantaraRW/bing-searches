const EXTENSION_NAME = "@AlcantaraRW/BingSearches";
const SEARCHES_KEY = `${EXTENSION_NAME}.searchesMade`;
const MAX_SEARCHES = 50;
const INTERVAL_TIMEOUT = 1000;

const interval = setInterval(() => {
  const searchInput = document.querySelector("#sb_form_q");
  const form = document.querySelector("#sb_form");

  if (!searchInput) return;

  clearInterval(interval);

  const searchesMade = Number(localStorage.getItem(SEARCHES_KEY) || 0);

  if (searchesMade >= MAX_SEARCHES) {
    localStorage.removeItem(SEARCHES_KEY);
    return;
  }

  localStorage.setItem(SEARCHES_KEY, searchesMade + 1);

  const search = new Date().getTime() * Math.random();
  searchInput.value = search;
  form.submit();
}, INTERVAL_TIMEOUT);
