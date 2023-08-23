import React from "react";
import { Modal, Button } from "antd";
import AddUser from "../forms/SelectForm";

export default function DataModal({ showModal, data, component }) {
  const [open, setOpen] = showModal;
  let comp = <></>;
  switch (component) {
    case "AddUser":
      comp = <AddUser showModal={showModal} />;
      break;
    default:
      break;
  }
  return (
    <div>
      <Modal
        width={"40%"}
        title={null}
        visible={open}
        footer={null}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        {comp}
      </Modal>
    </div>
  );
}
