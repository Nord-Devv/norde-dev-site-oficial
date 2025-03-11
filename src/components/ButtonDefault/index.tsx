import LinkNext from "next/link";
interface ButtonDefaultProps {
  children: React.ReactNode;
  target: string,
  className: string,
}
export function ButtonDefault({ children, target, className }: ButtonDefaultProps) {
  return (
    <LinkNext
      href={target}
      target="true"
      className={`${className}`}
    >
      {children}
    </LinkNext>
  )

}