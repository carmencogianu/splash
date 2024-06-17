import React, { useState, useEffect } from "react";
import styles from "./Testimonials.module.scss";
import parse from "html-react-parser";
import TestimonialsItem from "./TestimonialsItem/TestimonialsItem";

const Testimonials = (props: {
  content: {
    title: string;
    testimonialItems: {
      indicator: number;
      image1: {
        url: string;
        altText: string;
      };
      image2: {
        url: string;
        altText: string;
      };
      text: string;
    }[];
  };
}) => {
  // const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setActiveIndex((prevActiveIndex) => );
  //   }, 2000);
  // });

  const active = true;
  const { testimonialItems } = props.content;
  const [testimonial] = useState(testimonialItems);
  const [index1, setIndex1] = useState(0);

  const testimonialItem = testimonialItems.map((item, index) => (
    <TestimonialsItem
      key={index}
      id={index}
      indicator={item.indicator}
      image1={item.image1}
      image2={item.image2}
      text={item.text}
      active={active}
      activeIndex={index1}
    />
  ));

  useEffect(() => {
    const lastIndex = testimonial.length - 1;
    if (index1 < 0) {
      setIndex1(lastIndex);
    } else if (index1 > lastIndex) {
      setIndex1(0);
    }
  }, [index1, testimonial]);

  useEffect(() => {
    const testimonialItem = setInterval(() => {
      setIndex1(index1 + 1);
    }, 10000);
    return () => {
      clearInterval(testimonialItem);
    };
  }, [index1]);

  return (
    <section className={styles.testimonials}>
      <div className={`container`}>
        <h2 className={styles.testimonials__title}>
          {parse(props.content.title)}
        </h2>
        {testimonialItem.filter((item, index) => index === index1)}
      </div>
    </section>
  );
};

export default Testimonials;
