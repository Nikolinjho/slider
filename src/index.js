import "@/styles/styles.css";


document.addEventListener("DOMContentLoaded", () => {


    class SliderCarousel {
        constructor({ main, wrapper, prev, next }) {
            this.main = document.querySelector(main);
            this.wrapper = document.querySelector(wrapper);
            this.sliders = this.wrapper.children;
            this.prev = document.querySelector(prev)
            this.next = document.querySelector(next)
            this.sliderToShow = this.main.offsetWidth / this.sliders[0].offsetWidth;
            this.options = {
                position: 0,
                slideWidth: this.main.offsetWidth / this.sliderToShow
            };

        }
        init() {
            this.control()

        }
        control() {
            this.prev.addEventListener('click', this.prevSlider.bind(this))
            this.next.addEventListener('click', this.nextSlider.bind(this))
        }

        prevSlider() {
            if (this.options.position > 0) {

                --this.options.position;
                this.wrapper.style.transform = `translateX(-${this.options.position * this.options.slideWidth}px)`
            } else {
                this.wrapper.style.transform = `translateX(${60}px)`
                setTimeout(() => {
                    this.wrapper.style.transform = `translateX(-${this.options.position * this.options.slideWidth}px)`
                }, 250);
            }
        }

        nextSlider() {
            if (this.options.position < this.sliders.length - this.sliderToShow) {
                ++this.options.position;
                console.log(this.options.position)
                console.log(this.sliders.length - this.sliderToShow)
                this.wrapper.style.transform = `translateX(-${this.options.position * this.options.slideWidth}px)`
            } else {
                this.wrapper.style.transform = `translateX(-${this.options.position * this.options.slideWidth + 60}px)`
                setTimeout(() => {
                    this.wrapper.style.transform = `translateX(-${this.options.position * this.options.slideWidth}px)`

                }, 250);
            }
        }
    }




    const carousel = new SliderCarousel({
        main: '.grid',
        wrapper: '.grid-row',
        prev: '.left',
        next: '.right'
    })
    carousel.init()

});