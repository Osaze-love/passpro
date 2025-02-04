import React, { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Link as LinkIcon,
  Text,
} from "lucide-react";

const RichTextEditor = ({ setEditorContent, editorContent }: { setEditorContent: (content: string) => void; editorContent: string }) => {


  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link.configure({ openOnClick: false }),
     
    ],
    content: editorContent || "<p>Enter Text</p>",
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
    },
  });

  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  

  return (
    <div className="border p-4 rounded-lg">
      <div className="flex gap-2 mb-4 flex-wrap bg-[#D9D9D9]">
        {/* Bold */}
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={`p-2 rounded ${editor?.isActive("bold") ? "bg-gray-200" : ""}`}
        >
          <Bold className="w-5 h-5" />
        </button>

        {/* Italic */}
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={`p-2 rounded ${editor?.isActive("italic") ? "bg-gray-200" : ""}`}
        >
          <Italic className="w-5 h-5" />
        </button>

        {/* Underline */}
        <button
          onClick={() => editor?.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded ${editor?.isActive("underline") ? "bg-gray-200" : ""}`}
        >
          <UnderlineIcon className="w-5 h-5" />
        </button>

        {/* Align Left */}
        <button
          onClick={() => editor?.chain().focus().setTextAlign("left").run()}
          className={`p-2 rounded ${editor?.isActive({ textAlign: "left" }) ? "bg-gray-200" : ""}`}
        >
          <AlignLeft className="w-5 h-5" />
        </button>

        {/* Align Center */}
        <button
          onClick={() => editor?.chain().focus().setTextAlign("center").run()}
          className={`p-2 rounded ${editor?.isActive({ textAlign: "center" }) ? "bg-gray-200" : ""}`}
        >
          <AlignCenter className="w-5 h-5" />
        </button>

        {/* Align Right */}
        <button
          onClick={() => editor?.chain().focus().setTextAlign("right").run()}
          className={`p-2 rounded ${editor?.isActive({ textAlign: "right" }) ? "bg-gray-200" : ""}`}
        >
          <AlignRight className="w-5 h-5" />
        </button>

        {/* Bullet List */}
        <button
  onClick={() => editor?.chain().focus().toggleList("bulletList", "listItem").run()}
  className={`p-2 rounded ${editor?.isActive("bulletList") ? "bg-gray-200" : ""}`}
>
  <List className="w-5 h-5" />
</button>

<button
  onClick={() => editor?.chain().focus().toggleList("orderedList", "listItem").run()}
  className={`p-2 rounded ${editor?.isActive("orderedList") ? "bg-gray-200" : ""}`}
>
  <ListOrdered className="w-5 h-5" />
</button>


      

        {/* <div className="flex items-center gap-2">
          <Text className="w-5 h-5" />
          <select
            className="p-1 border rounded"
            onChange={(e) => editor?.chain().focus().setMark("textStyle", { fontSize: e.target.value }).run()}
          >
            <option value="12px">12px</option>
            <option value="16px">16px</option>
            <option value="20px">20px</option>
          </select>
        </div> */}
      </div>

      <EditorContent
  editor={editor}
  value={editorContent}
  className="rounded p-4 min-h-[200px] "
/>


     
    </div>
  );
};

export default RichTextEditor;
