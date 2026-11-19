import Link from "next/link";
import katex from "katex";
import type { ReactNode } from "react";

export const root = "/maths/s3/chapter-10";
export function Back(){return <Link href={root}>← Back to Chapter 10</Link>}
export function Header({tag,title,children}:{tag:string,title:string,children:ReactNode}){
  return <header><small>{tag}</small><h1>{title}</h1><p>{children}</p></header>;
}
export function Card({tag,title,image,caption,children}:{tag:string,title:string,image:string,caption:string,children:ReactNode}){
  return <article><small>{tag}</small><h2>{title}</h2><div className="illustrated"><div>{children}</div><figure><img src={'/maths/s3/ch10/'+image+'.svg'} alt={caption}/><figcaption>{caption}</figcaption></figure></div></article>;
}
export function MathLine({tex}:{tex:string}){
  return <span dangerouslySetInnerHTML={{__html:katex.renderToString(tex)}}/>;
}
export function Reason({full,short}:{full:string,short:string}){
  return <p className="why"><b>GCSE:</b> {full}<br/><b>HKDSE:</b> {short}</p>;
}
