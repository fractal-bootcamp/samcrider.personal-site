import React from "react";

const SecretModal = () => {
  return (
    <div>
      <button
        className="btn btn-ghost"
        onClick={() =>
          (
            document.getElementById("my_modal_2") as HTMLDialogElement
          ).showModal()
        }
      ></button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Shhh, super secret modal</h3>
          <p className="py-4">
            I'm currently unemployed... maybe you can help? (assuming you're
            hiring)
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default SecretModal;
