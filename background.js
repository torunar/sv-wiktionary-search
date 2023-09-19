browser.menus.create({
    title: browser.i18n.getMessage('svWiktionarySearch'),
    contexts: ['selection'],
    onclick: svWiktionarySearch
});

function svWiktionarySearch(info) {
    const searchCriteria = info.selectionText.normalize().replaceAll(' ', '_');
    browser.tabs.create({
        url: `https://sv.wiktionary.org/wiki/${encodeURIComponent(searchCriteria)}`
    })
}
