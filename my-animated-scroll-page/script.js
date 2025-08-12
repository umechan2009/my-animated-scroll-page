AOS.init({
    // Global settings:
    disable: 'mobile', // モバイルデバイスでのアニメーションを無効化
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add 'aos-' + animation name to the body class
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 200, // offset (in px) from the original trigger point - アニメーション開始を少し遅らせる
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms - アニメーションの時間を長く
    easing: 'ease-in-out', // default easing for AOS animations - より滑らかな動きに
    once: false, // whether animation should happen only once - while scrolling down - 繰り返しアニメーション
    mirror: true, // whether elements should animate out while scrolling past them - スクロールで戻った時もアニメーション
    anchorPlacement: 'top-bottom', // defines which position of the element should trigger the animation

});
