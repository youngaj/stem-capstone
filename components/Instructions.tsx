import { CModal, CModalBody } from "@coreui/react";
import { Instruction } from "power54/data/types";

interface InstructionProps {
  instruction: Instruction;
  visible: boolean;
  onClose: (val: boolean) => void;
}

export const InstructionModal = (props: InstructionProps) => {
  const setVisible = (val: boolean) => {
    props.onClose(val);
  };
  const instruction = props.instruction;
  return (
    <>
      <CModal
        fullscreen="md"
        visible={props.visible}
        onClose={() => setVisible(false)}
      >
        <CModalBody>
          <h3>{instruction.title}</h3>
          <p>{instruction.description}</p>
        </CModalBody>
      </CModal>
    </>
  );
};
