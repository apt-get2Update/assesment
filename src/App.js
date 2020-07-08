import React from "react";
import "tui-image-editor/dist/tui-image-editor.css";
import "./App.css";
import ImageEditor from "@toast-ui/react-image-editor";
const icona = require("tui-image-editor/dist/svg/icon-a.svg");
const iconb = require("tui-image-editor/dist/svg/icon-b.svg");
const iconc = require("tui-image-editor/dist/svg/icon-c.svg");
const icond = require("tui-image-editor/dist/svg/icon-d.svg");

const myTheme = {
  "menu.backgroundColor": "white",
  "common.backgroundColor": "#151515",
  "downloadButton.backgroundColor": "white",
  "downloadButton.borderColor": "white",
  "downloadButton.color": "black",
  "menu.normalIcon.path": icond,
  "menu.activeIcon.path": iconb,
  "menu.disabledIcon.path": icona,
  "menu.hoverIcon.path": iconc,
};
export default function App() {
  return (
    <div className="home-page">
      <div className="text-center pb-2 bg-dark">
        <h1 className="text-primary">Photo Editor</h1>
      </div>
      <ImageEditor
        includeUI={{
          loadImage: {
            path: "",
            name: "image",
          },
          theme: myTheme,
          menu: ["crop", "flip", "rotate", "draw", "shape", "text", "filter"],
          initMenu: "",
          uiSize: {
            height: `calc(100vh - 160px)`,
          },
          menuBarPosition: "bottom",
        }}
        cssMaxHeight={window.innerHeight}
        cssMaxWidth={window.innerWidth}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
      />
    </div>
  );
}
