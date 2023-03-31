import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from "@coreui/react";
import Carousel from "./Carousel";
import { ContinuedLearning } from "./ContinuedLearning";
import { EscapeRoom } from "./EscapeRoom";
import { LearningBlade } from "./LearningBlade";
import { Survey } from "./Survey";

export const Product = () => {
  return (
    <>
      <h1>Product Name</h1>
      <Carousel></Carousel>
      <CAccordion activeItemKey={1}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Escape Room</CAccordionHeader>
          <CAccordionBody>
            <EscapeRoom></EscapeRoom>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader>Survey</CAccordionHeader>
          <CAccordionBody>
            <Survey></Survey>
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={3}>
          <CAccordionHeader>Learning Blade</CAccordionHeader>
          <CAccordionBody>
            <LearningBlade />
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={4}>
          <CAccordionHeader>Continue at Home</CAccordionHeader>
          <CAccordionBody>
            <ContinuedLearning />
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    </>
  );
};
