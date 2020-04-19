import React from "react";
import { Link } from "react-router-dom";

export default function FunctionsPage() {
  return (
    <div>
      <h2>Function</h2>
      <ul>
        <Link to="/functions/anagram">Anagram</Link>
      </ul>
    </div>
  );
}
