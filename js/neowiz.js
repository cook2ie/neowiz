$(function () {
    $(function () {

        $('.header').mouseenter(function () {
            $('.headerbg').stop().slideDown(200);
            $('.sub_menu').css('pointer-events', 'auto');
        }).mouseleave(function () {
            $('.headerbg').stop().slideUp(250);
            $('.sub_menu').css('pointer-events', 'none');
        });

        let lastScroll = 0;
        let hideTimer;
        const hideDelay = 500;

        $(window).scroll(function () {
            const currentScroll = $(this).scrollTop();

            if (Math.abs(currentScroll - lastScroll) > 5) {
                $('body').addClass('hide-header');
                clearTimeout(hideTimer);
                hideTimer = setTimeout(function () {
                    $('body').removeClass('hide-header');
                }, hideDelay);
            }
            lastScroll = currentScroll;
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('body').addClass('scrolled');
            } else {
                $('body').removeClass('scrolled');
            }
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('body').addClass('scrolled');
        } else {
            $('body').removeClass('scrolled');
        }
    });
});

$(document).ready(function () {
    let wrappers = $(".main_wrapper");
    let banners = $(".main_banner");
    let listBanners = $(".main_list-banner");
    let characterImages = $(".main_img-character");
    let mobileCharacterImages = $(".main_img-character-mobile");
    let currentIndex = 0;
    let isPaused = false;
    let slideInterval;

    // 슬라이드 전환 함수
    function changeSlide(newIndex, oldIndex) {
        // 모든 요소 비활성화
        wrappers.removeClass("active").eq(newIndex).addClass("active");
        banners.removeClass("active").eq(newIndex).addClass("active");
        listBanners.removeClass("main_list-banner--active")
            .filter(`[data-id="${newIndex + 1}"]`).addClass("main_list-banner--active");

        // 캐릭터 이미지 애니메이션 처리
        characterImages.removeClass("inactive").removeClass("active").eq(newIndex).addClass("active");
        mobileCharacterImages.removeClass("inactive").removeClass("active").eq(newIndex).addClass("active");

        if (oldIndex !== newIndex) {
            characterImages.eq(oldIndex).addClass("inactive");
            mobileCharacterImages.eq(oldIndex).addClass("inactive");
        }

        // 현재 인덱스 업데이트
        currentIndex = newIndex;
    }

    // 배너 리스트 클릭 이벤트
    listBanners.on("click", function () {
        let targetId = $(this).data("id");
        let targetIndex = wrappers.index(wrappers.filter(`[data-id="${targetId}"]`));
        let oldIndex = currentIndex;

        changeSlide(targetIndex, oldIndex);
        if (!isPaused) {
            resetSlideInterval();
        }
    });

    // 이전 버튼 클릭 이벤트
    $("#prev-banner").on("click", function (e) {
        e.preventDefault();
        let oldIndex = currentIndex;
        let newIndex = currentIndex > 0 ? currentIndex - 1 : wrappers.length - 1;

        changeSlide(newIndex, oldIndex);
        if (!isPaused) {
            resetSlideInterval();
        }
    });

    // 다음 버튼 클릭 이벤트
    $("#next-banner").on("click", function (e) {
        e.preventDefault();
        let oldIndex = currentIndex;
        let newIndex = (currentIndex + 1) % wrappers.length;

        changeSlide(newIndex, oldIndex);
        if (!isPaused) {
            resetSlideInterval();
        }
    });

    // 일시정지/재생 버튼 클릭 이벤트
    $("#pause-banner").on("click", function (e) {
        e.preventDefault();
        isPaused = !isPaused;

        let pauseIcon = $(this).find(".main_icon-function-pause");
        let playIcon = $(this).find(".main_icon-function-play");

        pauseIcon.toggleClass("d-none", isPaused);
        playIcon.toggleClass("d-none", !isPaused);

        if (isPaused) {
            clearInterval(slideInterval);
        } else {
            startSlideInterval();
        }
    });

    // 슬라이드 인터벌 시작
    function startSlideInterval() {
        slideInterval = setInterval(function () {
            let oldIndex = currentIndex;
            let newIndex = (currentIndex + 1) % wrappers.length;
            changeSlide(newIndex, oldIndex);
        }, 10000); // 10초 간격
    }

    // 슬라이드 인터벌 리셋
    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }

    // Hammer.js를 이용한 터치 제스처
    let slider = $(".main")[0];
    let hammer = new Hammer(slider);

    hammer.on("swipeleft", function () {
        let oldIndex = currentIndex;
        let newIndex = (currentIndex + 1) % wrappers.length;
        changeSlide(newIndex, oldIndex);
        if (!isPaused) {
            resetSlideInterval();
        }
    });

    hammer.on("swiperight", function () {
        let oldIndex = currentIndex;
        let newIndex = currentIndex > 0 ? currentIndex - 1 : wrappers.length - 1;
        changeSlide(newIndex, oldIndex);
        if (!isPaused) {
            resetSlideInterval();
        }
    });

    // 초기화
    changeSlide(0, 0);
    startSlideInterval();
});

$(document).ready(function () {
    const $wrapper = $('.games-wrapper');
    const $slides = $('.games-slide');
    let scrollPos = 0;
    let isHovered = false;
    const scrollSpeed = 0.5;

    $slides.clone().appendTo($wrapper);

    function autoScroll() {
        if (!isHovered) {
            scrollPos -= scrollSpeed;
            const totalWidth = $slides.first().outerWidth(true) * $slides.length;

            if (-scrollPos >= totalWidth) {
                scrollPos = 0;
            }

            $wrapper.css('transform', `translateX(${scrollPos}px)`);
        }
        requestAnimationFrame(autoScroll);
    }
    $('.games_content').hover(
        () => isHovered = true,
        () => isHovered = false
    );

    autoScroll();
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-btn');
    const menu = document.getElementById('menu');

    toggleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        menu.classList.toggle('active');
        this.classList.toggle('active');
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('#menu') && !e.target.closest('#toggle-btn')) {
            menu.classList.remove('active');
            toggleBtn.classList.remove('active');
        }
    });

    document.querySelectorAll('#menu .footer_menu-item').forEach(item => {
        item.addEventListener('click', function () {
            const id = this.id;
            console.log('Selected:', id);
        });
    });
});

$(document).ready(function () {
    function rotateMapImages() {
        const $activeImg = $(".contact-us-map__image--active");

        const $nextImg = $activeImg.next().length > 0
            ? $activeImg.next()
            : $(".contact-us-map img:first");

        $activeImg.removeClass("contact-us-map__image--active");

        $nextImg.addClass("contact-us-map__image--active contact-us-map__image--animation");
        setTimeout(() => {
            $activeImg.addClass("contact-us-map__image--fade-out");
        }, 2000);
        setTimeout(() => {
            $activeImg.removeClass("contact-us-map__image--animation contact-us-map__image--fade-out");
        }, 4000);
    }

    rotateMapImages();
    setInterval(rotateMapImages, 4000);

    $("#get-connect").on("click", function () {
        window.location.href = "/inquiry?inquiryType=hr";
    });

    $(".contact__us__content-04 p").on("click", function () {
        window.location.href = "/inquiry";
    });
});
