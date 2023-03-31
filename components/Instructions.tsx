import { CModal, CModalBody } from "@coreui/react";
import { Instruction } from "power54/data/types";
import ReactPlayer from "react-player/youtube";

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
          <div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=w9G1nz4UlyU"
              width="100%"
              playing={true}
              controls={true}
            />
            ;
          </div>
          <p>{instruction.description}</p>
        </CModalBody>
      </CModal>
    </>
  );
};
