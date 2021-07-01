import React, { useState } from "react";
import { CustomDialog, useDialog } from "react-st-modal";

function CustomDialogContent({ hideDialog, dialogData }) {
  // use this hook to control the dialog
  const dialog = useDialog();
  const [value, setValue] = useState();
  console.log(dialogData);

  return (
    <div className="dialog">
      <div className="dialog-header">
        <div className="">Test text</div>
        <svg
          onClick={hideDialog}
          width="24px"
          height="24px"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          ...
        </svg>
      </div>
      <div className="details">Test text</div>
      <div className="details">Test text</div>
      <div className="details">Test text</div>
    </div>
  );
}

export default function Dialog({ hideDialog, dialogData }) {
  if (!dialogData) {
    return null;
  }
  return (
    <div className="dialog">
      {(hideDialog, dialogData) =>
        CustomDialog(
          <CustomDialogContent
            hideDialog={hideDialog}
            dialogData={dialogData}
          />,
          {
            title: "Custom Dialog",
            showCloseIcon: true,
          }
        )
      }
    </div>
  );
}

//   <div className="dialog-header">
//     <div className="">{name}</div>
//     <svg
//       onClick={hideDialog}
//       width="24px"
//       height="24px"
//       viewBox="0 0 200 200"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       ...
//     </svg>
//   </div>
//   <div className="details">Gravity: {gravity} m/s²</div>
//   <div className="details">Orbital period: {orbitalPeriod} days</div>
//   <div className="details">Surface area: {surfaceArea} million km²</div>
