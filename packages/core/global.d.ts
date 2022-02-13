import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      xml: React.DetailedHTMLProps<
        React.HTMLAttributes<XMLDocument>,
        XMLDocument
      > & {
        xmlns: string;
      };
      block: React.DetailedHTMLProps<
        React.HTMLAttributes<XMLDocument>,
        XMLDocument
      >;
      category: React.DetailedHTMLProps<
        React.HTMLAttributes<XMLDocument>,
        XMLDocument
      >;
      value: React.DetailedHTMLProps<
        React.HTMLAttributes<XMLDocument>,
        XMLDocument
      >;
      shadow: React.DetailedHTMLProps<
        React.HTMLAttributes<XMLDocument>,
        XMLDocument
      >;
      field: React.DetailedHTMLProps<
        React.HTMLAttributes<XMLDocument>,
        XMLDocument
      >;
    }
  }
}
