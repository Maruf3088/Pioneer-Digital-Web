// //!SWIPER JS

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

//!=================================COMMON SECTION START======================================

//menuToggle active
function menuToggleActive() {
  const menuToggle = document.querySelector(".menutoggle");
  const navContainer = document.querySelector(".navBar");
  const crossToggle = document.querySelector(".crossToggle");

  menuToggle.addEventListener("click", () => {
    navContainer.classList.remove("h-auto");
    menuToggle.classList.add("hidden");
    crossToggle.classList.remove("hidden");
    gsap.to(".navBar", {
      height: 350,
    });
  });

  crossToggle.addEventListener("click", () => {
    menuToggle.classList.remove("hidden");
    crossToggle.classList.add("hidden");
    gsap.to(".navBar", {
      height: "auto",
    });
  });
}

// loading animation
function loadingAnim() {
  const tl = gsap.timeline();
  tl.from(".loadingText span", {
    x: 100,
    opacity: 0,
    stagger: 0.3,
    duration: 0.5,
  });
  tl.to(".loadingText span", {
    y: -80,
    delay: 0.5,
    stagger: 0.1,
  });
  tl.to(
    ".blackPage",
    {
      height: 0,
    },
    "rc"
  );
  tl.to(
    ".redPage",
    {
      height: "20vh",
      delay: 0.08,
    },
    "rc"
  );
  tl.to(
    ".redPage",
    {
      height: "0vh",
      delay: 0.4,
    },
    "rc"
  );

  tl.from(
    ".serviceHeroImage1",
    {
      x: -50,
      duration: 0.8,
      ease: "sine.inOut",
    },
    "rc"
  );

  tl.from(
    ".serviceHeroImage2",
    {
      x: 50,
      duration: 0.8,
      ease: "sine.inOut",
    },
    "rc"
  );
  tl.from(
    ".serviceHeroText",
    {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: "sine.inOut",
    },
    "rc"
  );

  tl.from(
    ".serviceHeroText1",
    {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "sine.inOut",
    },
    "rc"
  );

  tl.to(
    ".textBox",
    {
      x: "105%",
      delay: 0.2,
      duration: 0.8,
      ease: "sine.inOut",
    },
    "rc"
  );
  tl.from(
    ".contactText",
    {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: "sine.inOut",
    },
    "rc"
  );
  tl.from(
    ".contactText1",
    {
      opacity: 0,
      y: -50,
      stagger: 0.3,
      duration: 1,
      ease: "sine.inOut",
    },
    "rc"
  );
  tl.from(
    ".aboutText1",
    {
      opacity: 0,
      x: 50,
      stagger: 0.5,
      duration: 0.5,
      ease: "sine.inOut",
    },
    "rc"
  );
  tl.from(
    ".heroBtn",
    {
      opacity: 0,
      y: 20,
      delay: 0.5,
    },
    "rc"
  );
}

// navBar
function navBar() {
  const navBar = document.querySelector(".navBar");
  let isAnimated = false; // Flag to track if animation has been triggered

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
      if (!isAnimated) {
        // Only run animation if it hasn't already been triggered
        navBar.classList.add("bg-white", "shadow-xl");

        // GSAP Animation
        gsap.from(".navBar", {
          opacity: 0,
          y: "-20",
          duration: 1,
        });
        isAnimated = true; // Set flag to true after animation is triggered
      }
    } else {
      if (isAnimated) {
        // Only remove classes if they were previously added
        navBar.classList.remove("bg-white", "shadow-xl");
        isAnimated = false; // Reset flag
      }
    }
  });
}

//footer section
function footerAnim() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "0% 60%",
      // markers: "true",
    },
  });
  tl.from(".upDiv", {
    opacity: 0,
    y: 30,
    stagger: 0.3,
    duration: 0.5,
    ease: "sine.InOut",
  });
}

//!=================================COMMON SECTION END======================================

//!=================================HOME SECTION START======================================

function mainIndex() {
  // object moving
  function objectMoving() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".heroSection",
        start: "top top",
        end: "bottom 10%",
        scrub: 1,
        markers: false,
      },
    });

    tl.to(".cross", {
      x: 100,
      y: 100,
    });
  }
  //IMAGE SECTION
  function imageSectionAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".imageSection",
        start: "-10% 60%",
        // markers: "true",
      },
    });
    tl.from(".upRow", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      ease: "sine.inOut",
      duration: 1,
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".imageSection",
        start: "40% 60%",
        // markers: "true",
      },
    });
    tl2.from(".downRow", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      ease: "sine.inOut",
      duration: 1,
    });
  }

  //WHO WE ARE SETION ANIMATION
  function whoweareAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parentDiv",
        start: "top 60%",
      },
    });

    tl.from(".childDiv", {
      x: -120,
      opacity: 0,
    });
    tl.to(".overlayDiv", {
      x: "105%",
    });

    tl.from(".readMoreBtn", {
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }
  //what we do section
  function whatwedoAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".whatWeDo",
        start: "top 60%",
      },
    });

    tl.from(".childDiv2", {
      opacity: 0,
      x: -100,
    });
    tl.to(".overlayDiv2", {
      x: "110%",
    });
    tl.from(".takeDemoBtn", {
      y: 30,
      opacity: 0,
    });
  }

  // object moving 2
  function objectMoving2() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".whatWeDo",
        start: "-80% 60%",
        scrub: 1,
      },
    });

    tl.to(".object1", {
      y: "100%",
      duration: 1,
      ease: "sine.inOut",
    });
  }

  //WHY US section
  function whyUsAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section5",
        start: "30% 60%",
        // markers: "true",
      },
    });
    tl.from(".whyUp", {
      opacity: 0,
      y: -20,
      stagger: 0.3,
      ease: "sine.inOut",
      duration: 1,
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section5",
        start: "60% 60%",
        // markers: "true",
      },
    });
    tl2.from(".whyDown", {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      ease: "sine.inOut",
      duration: 1,
    });
  }

  //instagram section
  function instagramAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".instagram",
        start: "30% 60%",
        // markers: "true",
      },
    });
    tl.from(".telegramText", {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      ease: "sine.In",
      duration: 1,
    });
  }

  //card Section
  function cardSectionAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cardSection",
        start: "5% 60%",
        // markers: "true",
      },
    });
    tl.from(".card1", {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      duration: 1,
      ease: "sine.InOut",
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".cardSection",
        start: "30% 60%",
        // markers: "true",
      },
    });
    tl2.from(".card2", {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      duration: 1,
      ease: "sine.InOut",
    });
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".cardSection",
        start: "60% 60%",
        // markers: "true",
      },
    });
    tl3.from(".card3", {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      duration: 1,
      ease: "sine.InOut",
    });
  }

  //kickstart section
  function kickstartAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".kickstart",
        start: "0% 60%",
        // markers: "true",
      },
    });
    tl.from(".text1", {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      duration: 1,
      ease: "sine.InOut",
    });
  }

  //!HOME SECTION
  objectMoving();
  objectMoving2();
  imageSectionAnim();
  whyUsAnim();
  whoweareAnim();
  whatwedoAnim();
  instagramAnim();
  cardSectionAnim();
  kickstartAnim();
}

//!=================================HOME SECTION END======================================

//!=================================ABOUT SECTION START======================================
function mainAbout() {
  function aboutUsAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutUs",
        start: "0% 0%",
        scrub: 1,
        // markers: true,
      },
    });
    tl.from(".aboutObject1", {
      y: -30,
      duration: 1,
      ease: "sine.InOut",
    });
  }

  function moreAboutUsAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".moreAboutUs",
        start: "10% 60%",
        // markers: true,
      },
    });
    tl.from(
      ".moreAboutText1",
      {
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 1,
        ease: "sine.InOut",
      },
      "mc"
    );
    tl.from(
      ".moreAboutImg",
      {
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 1,
        ease: "sine.InOut",
      },
      "mc"
    );
  }

  function videoSectionAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".videoSection",
        start: "0% 60%",
        // markers: "true",
        scrub: 1,
      },
    });
    tl.from(".videoObject", {
      y: -30,
      duration: 1,
      ease: "sine.InOut",
    });
  }

  function playBtn() {
    const play = document.querySelector(".playBtn");
    const video = document.querySelector(".videoScreen");
    const mainVideo = document.querySelector(".video");
    const cross = document.querySelector(".crossIcon");

    play.addEventListener("click", () => {
      video.classList.remove("scale-0");
      video.classList.add("scale-100");
      mainVideo.play();
    });

    cross.addEventListener("click", () => {
      video.classList.add("scale-0");
      video.classList.remove("scale-100");
      mainVideo.pause();
    });
  }

  //!ABOUT SECTION
  aboutUsAnim();
  moreAboutUsAnim();
  videoSectionAnim();
  playBtn();
}

//!=================================ABOUT SECTION END======================================

//!=================================SERVICE SECTION START======================================

function mainService() {
  function serviceSectionAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".serviceMainSection",
        start: "25% 60%",
        // markers: "true",
      },
    });
    tl.from(".scard1", {
      opacity: 0,
      y: -10,
      stagger: 0.3,
      duration: 0.5,
      ease: "sine.InOut",
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".serviceMainSection",
        start: "35% 60%",
        // markers: "true",
      },
    });
    tl2.from(".scard2", {
      opacity: 0,
      y: -10,
      stagger: 0.3,
      duration: 0.5,
      ease: "sine.InOut",
    });
  }
  function smallCardAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".smallCard",
        start: "0% 60%",
        // markers: "true",
      },
    });

    tl.from(
      ".smallCardText",
      {
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 1,
        ease: "sine.InOut",
      },
      "kl"
    );
    tl.from(
      ".smallCardImg",
      {
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 1,
        ease: "sine.InOut",
      },
      "kl"
    );
  }

  serviceSectionAnim();
  smallCardAnim();
}

//!=================================SERVICE SECTION END======================================

//!=================================CONTACT SECTION START======================================

function mainContact() {
  function contactMainAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contactMainSection",
        start: "50% 60%",
        // markers: "true",
      },
    });

    tl.from(".contactCard", {
      y: 30,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: "sine.InOut",
    });
  }

  function contactFormAnim() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contactFormSection",
        start: "10% 60%",
        // markers: "true",
      },
    });
    tl.from(".formText", {
      opacity: 0,
      y: 30,
      stagger: 0.3,
      duration: 1,
      ease: "sine.InOut",
    });
  }

  contactMainAnim();
  contactFormAnim();
}

//!=================================CONTACT SECTION END======================================

//!COMMON SECTION

menuToggleActive();
navBar();
loadingAnim();
footerAnim();

//!MAIN INDEX  PAGE
if (document.querySelector(".indexMainFile")) {
  mainIndex();
}

//!ABOUT PAGE
if (document.querySelector(".aboutMainFile")) {
  mainAbout();
}

//!SERVICE PAGE
if (document.querySelector(".serviceMainFile")) {
  mainService();
}

//!CONTACT PAGE
if (document.querySelector(".contactMainFile")) {
  mainContact();
}
