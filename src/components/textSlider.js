console.log("hey");

// is this loading too early?
document.addEventListener('DOMContentLoaded', function() {

    // Large margins when IO comes into play
    if ('IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

            let iopush = document.querySelectorAll('.io-push');

            console.log(iopush);

            var numSteps = 20.0;

            var pusher; // naming choice is too close to push
            var prevRatio = 0.0;
            var mT = "ratioem";

            // Set things up.

            window.addEventListener("load", function(event) {
            pusher = document.querySelectorAll(".io-push");

            createObserver();
            }, false);

            function createObserver() {
                var observer;

                var options = {
                root: null,
                rootMargin: "0px",
                threshold: buildThresholdList()
                };

                observer = new IntersectionObserver(handleIntersect, options);

                pusher.forEach(pushers => {
                    observer.observe(pushers);
                });
            } // createObserver

            function buildThresholdList() {
                var thresholds = [];
                var numSteps = 100;

                for (var i=1.0; i<=numSteps; i++) {
                var ratio = i/numSteps;
                thresholds.push(ratio);
                }

                thresholds.push(0);
                return thresholds;
            } // buildThresholdList

            function handleIntersect(entries, observer) {
                entries.forEach(function(entry) {
                    entry.target.style.marginTop = mT.replace("ratio", (entry.intersectionRatio*5));
                prevRatio = entry.intersectionRatio;
                }); // entries
            } // handle
    } // io

    console.log("after");

})