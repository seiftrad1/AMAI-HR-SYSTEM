import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic"; // (if using Next.js or use own dynamic loader)
import draftToHtml from "draftjs-to-html";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

export default class EditorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    // console.log(editorState);

    setState({ editorState }, () => {
      const currentContent = editorState.getCurrentContent();
      const contentRaw = convertToRaw(currentContent);
      const value = currentContent.hasText() ? draftToHtml(contentRaw) : "";

      const fakeEvent = {
        target: {
          name: this.props.name,
          value,
        },
      };

      this.props.onChange(fakeEvent);
    });
  };

  render() {
    const { editorState } = this.state;

    return (
      <div className="page-content-wrapper">
        <div className="page-content" style={{ minHeight: 1500 }}>
          <div className="editor">
            <Editor
              editorState={editorState}
              onChange={this.onEditorStateChange}
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
