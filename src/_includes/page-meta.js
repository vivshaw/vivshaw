import React from "react";

//FIXME: format dates like original
const PageMeta = ({ date = null }) => {
  return (
    date && (
      <div className="page-meta">
        <p>
          Updated
          <time dateTime={date} itemProp="dateModified">
            {date}
          </time>
        </p>
      </div>
    )
  );
};

export default PageMeta;
