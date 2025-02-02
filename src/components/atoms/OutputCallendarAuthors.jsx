import { Fragment } from "react";

import { authorsData } from "@/data/mockFormData.jsx";

const OutputCallendarAuthors = () => (
  <p className="min-w-max text-center text-[0.97rem] font-light leading-snug tracking-wide">
    foto
    {authorsData.map((author, id) => (
      <Fragment key={id}>
        <br />
        {author}
      </Fragment>
    ))}
  </p>
);

export default OutputCallendarAuthors;
