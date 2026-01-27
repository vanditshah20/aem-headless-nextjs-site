'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  value: string;
  onSave: (value: string) => void;
  className?: string;
};

export default function InlineEditableText({
  value,
  onSave,
  className,
}: Props) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      setText(value);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [editing, value]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      e.preventDefault();
      setEditing(false);
      if (text !== value) onSave(text);
    }
    if (e.key === 'Escape') {
      setEditing(false);
      setText(value);
    }
  }

  if (editing) {
    return (
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`bg-transparent outline-none border-b border-white/50 ${className}`}
      />
    );
  }

  return (
    <span
      onDoubleClick={() => setEditing(true)}
      className={`cursor-text ${className}`}
      title="Double click to edit"
    >
      {value}
    </span>
  );
}
