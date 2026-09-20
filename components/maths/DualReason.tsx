import { Children, Fragment, type ReactNode } from 'react';
import { reasonText, type ReasonUse } from '@/data/maths/reasons/reasonBank';

const style = {display:'block',minWidth:0,maxWidth:'100%',whiteSpace:'normal',overflowWrap:'anywhere',textAlign:'left',fontStyle:'normal',fontWeight:400,fontFamily:'Arial, sans-serif',lineHeight:1.55} as const;

export function DualReason(props: ReasonUse & {heading?: boolean}) {
  const text=reasonText(props);
  return <span data-geometry-reason="" data-reason-id={props.reasonId} style={style}>
    {props.reasonId==='congruence.asaFromAas' && <span data-aas-working="" style={{display:'block',marginBottom:8,color:'#24364b',fontSize:'1rem'}}>
      <strong>Working (GCSE)</strong><br/>
      Let the two known angle pairs be α = α′ and β = β′.<br/>
      The remaining angles are γ = 180° − α − β and γ′ = 180° − α′ − β′.<br/>
      <DualReason reasonId="triangle.angleSum"/>
      Therefore γ = γ′. Use the equal angles at the endpoints of the known equal side for ASA.
    </span>}
    {props.heading && <span style={{display:'block',fontWeight:700,color:'#24364b'}}>Reason</span>}
    <span style={{display:'block',fontSize:'1rem',color:'#24364b'}}>GCSE: {text.gcse}</span>
    <span style={{display:'block',fontSize:'0.875rem',color:'#52647a',marginTop:4}}>HKDSE: {text.hkdse}</span>
  </span>;
}

/** Render explicit Reason IDs in mixed working/reason strings. Plain calculations
 * and interactive React children pass through unchanged; text is never guessed. */
export function ReasonContent({children,heading=true}:{children:ReactNode;heading?:boolean}) {
  return <>{Children.map(children,child=>{
    if(typeof child!=='string')return child;
    const parts:ReactNode[]=[];let from=0;
    for(const match of child.matchAll(/⟦reason:(\{[^⟧]+\})⟧/g)){
      parts.push(child.slice(from,match.index));
      const use=JSON.parse(match[1]) as ReasonUse;
      parts.push(<DualReason key={match.index} {...use} heading={heading}/>);
      from=match.index!+match[0].length;
    }
    parts.push(child.slice(from));
    return <Fragment>{parts}</Fragment>;
  })}</>;
}
