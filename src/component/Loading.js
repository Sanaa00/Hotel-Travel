import React from "react";

export default function Loading() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center opacity-50 w-full align-middle  place-content-center">
          <div className="lds-ring flex items-center justify-center h-full w-full">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
