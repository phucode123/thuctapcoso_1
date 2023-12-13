import React from "react"
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider"

//------------
import Wrapper from "./component_slider/Wrapper/Wrapper";
import Title from "./component_slider/Title/Title";
import Subtitle from "./component_slider/Subtitle/Subtitle";

const bogliasco = "https://i.ytimg.com/vi/o6IS1PVXu7g/maxresdefault.jpg";
const countyClare = "https://i.pinimg.com/originals/b9/9a/ba/b99abae7720101372dfa87a90566ccf6.jpg";
const craterRock = "https://i.pinimg.com/originals/27/e3/50/27e350ea787e41947f4ca118e7f45c54.jpg";
const giauPass = "https://image.adsoftheworld.com/rnnetcpp5jgb0c7x674txikn8xa3";
//------------

export default function BasicSlider() {
    return (
        <HeroSlider height={"550px"}

            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 50,
                slidingDelay: 10,
                onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),
                onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide)
            }}>
            <Overlay>
                <Wrapper >
                    <div className="container_title_sub">
                        <Title >Hãy tin tưởng chúng tôi</Title>
                        <Subtitle >
                            Thương hiệu đặc biệt, nâng niu bàn chân Việt.
                        </Subtitle>
                    </div>
                </Wrapper>
            </Overlay>

            <Slide
                shouldRenderMask
                label="Giày Vans"
                background={{
                    backgroundImageSrc: giauPass
                }}
            />

            <Slide
                shouldRenderMask
                label="Bogliasco - Italy"
                background={{
                    backgroundImageSrc: bogliasco
                }}
            />

            <Slide
                shouldRenderMask
                label="County Clare - Ireland"
                background={{
                    backgroundImageSrc: countyClare
                }}
            />

            <Slide
                shouldRenderMask
                label="Crater Rock, OR - United States"
                background={{
                    backgroundImageSrc: craterRock
                }}
            />

            <MenuNav />

        </HeroSlider>
    )
}