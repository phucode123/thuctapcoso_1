import React from "react"
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider"

//------------
import Wrapper from "./component_slider/Wrapper/Wrapper";
import Title from "./component_slider/Title/Title";
import Subtitle from "./component_slider/Subtitle/Subtitle";

const bogliasco = "https://www.vuabongda.club/wp-content/uploads/2023/06/1200x800-GIF-W.gif";
const countyClare = "http://3.bp.blogspot.com/-WjP5I2Z3UJU/U1kjHAGgleI/AAAAAAAArjY/x712zJ6I_NE/s1600/0-change24h+(4).jpg";
const craterRock = "https://galaxyme.vn/data/upload/images/tin%20noi%20bo/sau%20c%C6%A1n%20m%C6%B0a%20tr%E1%BB%9Di%20l%E1%BA%A1i%20s%C3%A1ng/sau-con-mua-troi-lai-sang-co-dien-galaxy.jpg";
const giauPass = "https://img4.thuthuatphanmem.vn/uploads/2019/12/28/anh-mua-roi-tren-chiec-o-cau-vong_113308183.jpg";
//------------

export default function BasicSlider() {
    return (
        <HeroSlider height={"350px"}
        
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
                <Wrapper>
                    <Title>Basic Setup</Title>
                    <Subtitle>
                        Check out the documentation for more advanced examples.
                    </Subtitle>
                </Wrapper>
            </Overlay>

            <Slide
                shouldRenderMask
                label="Giau Pass - Italy"
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