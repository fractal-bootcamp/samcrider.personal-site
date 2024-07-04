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
            If you've gotten this far, you're clearly interested ; )
            <br />
            Say hello at{" "}
            <a className="text-[blue] underline" href="mailto:sam@crider.dev">
              samrobertcrider@gmail.com
            </a>
            <br />
            Some things you could say:
            <br />
            - Hey Sam! I've got a job for you!
            <br />
            - Hey Sam! My daughter would love you!
            <br />
            ... thats all the ideas I have for now.
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
