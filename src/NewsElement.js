import React from "react";

export default function NewsElement(props) {
  return (
    <div>
      <div className="inline-flex items-center mx-10 my-1 border-b-2">
        <img className="rounded-full w-14" src={props.url} alt="pic" />

        <div className="mx-2">
          <h4 className="text-base font-bold">{props.author}</h4>
          <p className="text-sm text-gray-500">{props.socialMedia}</p>
        </div>
        <p className="mx-4">{props.article}</p>
        <p className="underline underline-offset-1">{props.date}</p>
      </div>
    </div>
  );
}
