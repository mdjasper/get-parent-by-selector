# get-parent-by-selector

Returns the first found parent of an element, queried by css selector.

    <div class="parent">
        <section ... />
        <section ... />
        <section>
        	<a class="child" ... />
        </section>
    </div>

    ----

    let parent = parentBySelector(document.querySelector('.child'), '.parent');


----

Michael Jasper <mdjasper@gmail.com>