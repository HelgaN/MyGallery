class Gallery {
  constructor() {
    this.buttonPrev = document.querySelector(`.slider__button--prev`);
    this.buttonNext = document.querySelector(`.slider__button--next`);
    this.slides = document.querySelectorAll(`.slider__item`);
    this.ITEMS = [
      {
        name: `Лисий нос`,
        src: [`img/fox-nose-1.jpg`, `img/fox-nose-2.jpg`, `img/fox-nose-3.jpg`],
        background: `img/background-nose.jpg`
      },
      {
        name: `пр. Маршала Блюхера`,
        src: [`img/marshal.jpg`, `img/marshal.jpg`, `img/marshal.jpg`],
        background: `img/background-marshal.jpg`
      },
      {
        name: `ул. Долгоозерная`,
        src: [`img/dolgo.jpg`, `img/dolgo.jpg`, `img/dolgo.jpg`],
        background: `img/background-dolgo.jpg`
      },
      {
        name: `пр. Богатырский`,
        src: [`img/bogot.jpg`, `img/bogot.jpg`, `img/bogot.jpg`],
        background: `img/background-bogot.jpg`
      },
      {
        name: `пр. Коломяжский`,
        src: [`img/kolom.jpg`, `img/kolom.jpg`, `img/kolom.jpg`],
        background: `img/background-kolom.jpg`
      },
      {
        name: `Народного ополчения`,
        src: [`img/narod.jpg`, `img/narod.jpg`, `img/narod.jpg`],
        background: `img/background-narod.jpg`
      }
    ];

    this.galleryItems = document.querySelectorAll(`.gallery__item`);
    this.sliderImgs = document.querySelectorAll(`.slider__img`);
    this.sliderTitle = document.querySelector(`.slider__title`);
    this.background = document.querySelector(`.background`);
  }

  searchCurrent() {
    let current = 0;
    for (let i = 0; i < this.slides.length; i++) {
      if (this.slides[i].classList.contains("slider__item--current")) {
        break;
      } else {
        current++;
      }
    }
    return current;
  }

  init() {
    this.buttonPrev.addEventListener("click", () => {
      const num = this.searchCurrent();
      if (num > 0) {
        this.slides[num].classList.remove("slider__item--current");
        this.slides[num - 1].classList.add("slider__item--current");
        switch (num) {
          case 2:
            this.slides[num].classList.add("animation-slide--three-two");
            this.slides[num - 1].classList.add("animation-slide--three-two");
            this.slides[num].classList.remove("animation-slide--two-three");
            this.slides[num - 1].classList.remove("animation-slide--two-three");
            break;
          case 1:
            this.slides[num].classList.add("animation-slide--two-one");
            this.slides[num - 1].classList.add("animation-slide--two-one");
            if(this.slides[num].classList.contains("animation-slide--three-two") && this.slides[num + 1].classList.contains("animation-slide--three-two")) {
              this.slides[num].classList.remove("animation-slide--three-two");
              this.slides[num + 1].classList.remove("animation-slide--three-two");
            }
            break;
          default:
            break;
        }
      } else {
        return;
      }
    });

    this.buttonNext.addEventListener("click", () => {
      var num = this.searchCurrent();
      if (num < this.slides.length - 1) {
        this.slides[num].classList.remove("slider__item--current");
        this.slides[num + 1].classList.add("slider__item--current");
        switch (num) {
          case 0:
            this.slides[num].classList.add("animation-slide--one-two");
            this.slides[num + 1].classList.add("animation-slide--one-two");
            if(this.slides[num].classList.contains("animation-slide--two-one") && this.slides[num + 1].classList.contains("animation-slide--two-one")) {
              this.slides[num].classList.remove("animation-slide--two-one");
              this.slides[num + 1].classList.remove("animation-slide--two-one");
            }
            break;
          case 1:
            this.slides[num].classList.add("animation-slide--two-three");
            this.slides[num + 1].classList.add("animation-slide--two-three");
            this.slides[num].classList.remove("animation-slide--one-two");
            this.slides[num - 1].classList.remove("animation-slide--one-two");
            break;
          default:
            break;
        }
      } else {
        return;
      }
    });

    this.galleryItems.forEach((item, i) => {
      let num = i;
      item.addEventListener(`click`, () => {
        const background = this.background;
        this.sliderImgs.forEach((item, i) => {
          item.src = this.ITEMS[num].src[i];
          background.style.backgroundImage = `url("${this.ITEMS[num].background}`;
          this.sliderTitle.textContent = this.ITEMS[num].name;
        });
      });
    });
  }

}

const gallery = new Gallery();
