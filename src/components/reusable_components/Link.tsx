import { ReactNode } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    children: ReactNode,
    className: string,
    href: string
}

function Link({ children, className, href }: Props) {

//   const href: string = children.toLowerCase().split(" ").join("-");
  

  return (
    <AnchorLink
        href={`#${href}`}
        // onClick={}
        className={className}
    >
        {children}
    </AnchorLink>
  )
}

export default Link