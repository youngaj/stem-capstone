import { CButton } from "@coreui/react";
import { Instruction } from "power54/data/types";
import { useState } from "react";
import { InstructionModal } from "./Instructions";

export const EscapeRoom = () => {
  const instructions: Instruction = {
    title: "Escape Room Instructions",
    videoUrl: "https://www.youtube.com/watch?v=k3yoJ04GNmg",
    description: "Do the thing with the thing to make it look good.",
  };
  const [instructionsVisible, setInstructionsVisible] = useState(false);
  const openInstructions = () => {
    setInstructionsVisible(true);
  };
  return (
    <>
      <h2>Hello From Escape Room</h2>
      <CButton onClick={openInstructions}>Escape Room Instructions</CButton>
      <p>
        <strong>This is the Escape Room area accordion body.</strong> It is
        hidden by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control the
        overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding
        our default variables. It&apos;s also worth noting that just about any
        HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
      </p>
      <InstructionModal
        instruction={instructions}
        visible={instructionsVisible}
        onClose={(val: boolean) => {
          setInstructionsVisible(val);
        }}
      ></InstructionModal>
    </>
  );
};
