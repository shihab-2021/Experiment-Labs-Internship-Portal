import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const DialogLayout = ({
  children,
  open,
  setOpen,
  title,
  bgColor,
  width,
  borderRadius,
  close,
}) => {
  return (
    <>
      {open && (
        <div
          className="relative z-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 z-10 hidden-scroll overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center w-full sm:p-0">
              <div
                style={{
                  maxWidth: `${width}px`,
                  width: "100%",
                }}
                className="relative transform overflow-hidden rounded-lg dark:bg-Dark bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              >
                <div>
                  {title}
                  {close !== true && (
                    <IconButton
                      aria-label="close"
                      onClick={() => setOpen(false)}
                      sx={{
                        position: "absolute",
                        right: 20,
                        top: 20,
                        color: (theme) => theme.palette.grey[500],
                      }}
                    >
                      <div className="bg-white rounded-full w-[35px] h-[35px] flex items-center justify-center">
                        <CloseIcon />
                      </div>
                    </IconButton>
                  )}
                </div>
                <div className="bg-white sm:flex sm:flex-row-reverse">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DialogLayout;
