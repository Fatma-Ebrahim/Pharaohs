var swiper = new Swiper(".myyySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },
    autoplay: {
        delay: 3500,
    },
    loop: true,
});

var swiper = new Swiper(".sale_sec", {
    slidesPerView: 1, // عرض عدد الشرائح تلقائيًا بناءً على عرض العناصر
    spaceBetween: 0, // المسافة بين الشرائح
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        // تعديل الإعدادات للهواتف المحمولة
        767: {
            slidesPerView: 5, // عرض شريحة واحدة في كل مرة على الهواتف
            spaceBetween: 10 // إزالة المسافة بين الشرائح
        }
    }
});
