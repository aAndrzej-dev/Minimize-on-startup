browser.runtime.onStartup.addListener(async () => {
    var winInfo = await browser.windows.getCurrent();
    if(winInfo.type != "normal")
        return;
    await browser.windows.update(winInfo.id, { state: "minimized" });
});