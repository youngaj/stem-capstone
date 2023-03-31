import * as React from "react";
import { CButton, CCarousel, CCarouselItem } from "@coreui/react";
import { CarouselData } from "power54/data/types";
import styles from "../styles/Carousel.module.css";
const carouselData: CarouselData[] = [
  {
    title: "Power54",
    img: "/images/profile.jpg",
    blurb: ` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially.`,
  },
  {
    title: "Power54-Capstone Project",
    img: "/images/profile.jpg",
    blurb: ` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially.`,
  },
  {
    title: "ITSMF",
    img: "/images/profile.jpg",
    blurb: ` Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially.`,
  },
];

export const Carousel = () => {
  return (
    <CCarousel indicators dark transition="crossfade">
      {carouselData.map((item, i) => {
        return (
          <CCarouselItem key={`i`}>
            <div className={styles.carouselLayout}>
              <img src={item.img} alt={item.title} width="100%" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.blurb}</p>
                <div className={styles.buttonArea}>
                  <CButton color="light">Learn More</CButton>
                </div>
              </div>
            </div>
          </CCarouselItem>
        );
      })}
    </CCarousel>
  );
};

export default Carousel;
