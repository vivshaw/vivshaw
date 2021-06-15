import React from "react";

//FIXME: format dates like original
const PageMeta = ({ date = null, modified = null }) => {
  return (
    (date || modified) && (
      <div className="page-meta">
        <p>
          Updated
          <time dateTime={modified || date} itemProp="dateModified">
            {modified || date}
          </time>
        </p>
      </div>
    )
  );
};

export default PageMeta;
