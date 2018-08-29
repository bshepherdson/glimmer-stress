# Stress Test

I'm stress testing Glimmer by rendering a counter and a big table (current 100 wide and 300 tall) of cells holding just a 1.

I'd like the whole thing to render at a respectable pace, maybe a few seconds for such a large nested `{{#each}}`.
And above all I want the increment button to feel responsive.