import sys
from playwright.sync_api import sync_playwright
url, prefix = sys.argv[1], sys.argv[2]
with sync_playwright() as p:
    b = p.chromium.launch()
    for mode in ["light", "dark"]:
        pg = b.new_page(viewport={"width": 900, "height": 900}, device_scale_factor=2)
        pg.goto(url, wait_until="networkidle")
        if mode == "dark":
            pg.evaluate("document.documentElement.classList.add('dark')")
        pg.wait_for_timeout(400)
        pg.screenshot(path=f"{prefix}-{mode}.png", full_page=True)
        trig = pg.locator("#narrow [aria-label=More]")
        if trig.count():
            trig.click(); pg.wait_for_timeout(500)
            pg.screenshot(path=f"{prefix}-{mode}-overflow-open.png", full_page=True)
        pg.close()
    b.close()
