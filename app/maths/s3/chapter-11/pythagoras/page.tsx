import {Card,Formula,Lesson,Triangle} from "../lesson";
export default function Pythagoras(){
  return <Lesson number="11.2" title="Using Pythagoras’ Theorem to Find Trigonometric Ratios" goal="Use one ratio of an acute angle to reconstruct a right triangle and find the other two ratios exactly.">
    <Card label="LEARNING CARD 1" title="Choose convenient lengths">
      <Triangle adj={4} opp={3} labels={["4","3","?"]}/>
      <p>If tan θ = 3/4, draw the opposite leg as 3 and the adjacent leg as 4. Doubling both legs would produce the same ratio. The hypotenuse is opposite the right angle.</p>
      <p>Find a hypotenuse by adding the leg squares. To find a leg, subtract the known leg square from the hypotenuse square. Take the positive square root because lengths are positive.</p>
    </Card>
    <Card label="WORKED EXAMPLE 1" title="Start with a cosine">
      <p>Given cos θ = 12/13, find sin θ and tan θ.</p><Triangle adj={12} opp={5} labels={["12","?","13"]}/>
      <p>Choose adjacent = 12 and hypotenuse = 13. The opposite leg is <Formula tex={String.raw`\sqrt{13^2-12^2}=\sqrt{25}=5`}/>.</p>
      <aside><Formula tex={String.raw`\sin\theta=\frac5{13},\quad\tan\theta=\frac5{12}`}/></aside>
    </Card>
    <Card label="WORKED EXAMPLE 2" title="Turn a decimal tangent into two legs">
      <p>Given tan α = 1.5, write it as 3/2. Choose opposite = 3 and adjacent = 2.</p><Triangle adj={2} opp={3} labels={["2","3","?"]}/>
      <p>The hypotenuse is <Formula tex={String.raw`\sqrt{2^2+3^2}=\sqrt{13}`}/>. Divide each leg by this hypotenuse.</p>
      <aside><Formula tex={String.raw`\sin\alpha=\frac3{\sqrt{13}},\quad\cos\alpha=\frac2{\sqrt{13}}`}/></aside>
    </Card>
    <Card label="WORKED EXAMPLE 3" title="Keep a surd exact">
      <p>Given <Formula tex={String.raw`\sin\beta=\sqrt5/3`}/>, find <Formula tex={String.raw`\tan^2\beta\cos\beta`}/>.</p><Triangle adj={2} opp={Math.sqrt(5)} labels={["?","√5","3"]}/>
      <p>The adjacent side is <Formula tex={String.raw`\sqrt{3^2-(\sqrt5)^2}=2`}/>. Thus tangent is √5/2 and cosine is 2/3.</p>
      <aside><Formula tex={String.raw`(\sqrt5/2)^2\times(2/3)=5/6`}/></aside>
    </Card>
    <Card label="COMMON MISTAKES" title="Check which side is missing"><p>For cos θ = 12/13, adding 12² and 13² would produce a leg longer than the hypotenuse. Subtraction gives 5, and 5² + 12² = 13² checks the result.</p>
      <details><summary>Try it · Given sin θ = 7/25, find cos θ and tan θ.</summary><p>Adjacent = √(625 − 49) = 24. Cosine is 24/25 and tangent is 7/24.</p></details>
      <details><summary>Try it · Given tan θ = 2, find sin² θ.</summary><p>Choose legs 2 and 1. The hypotenuse is √5, so sin² θ = 4/5.</p></details></Card>
    <Card label="SECTION SUMMARY" title="From one ratio to three"><p>Write the given ratio as a fraction, label its two sides, calculate the third side, then read off the required ratios from the same acute angle.</p></Card>
  </Lesson>;
}
