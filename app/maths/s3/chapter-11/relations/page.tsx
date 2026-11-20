import { Card, Formula, Lesson, Triangle } from "../lesson";

export default function Relations() {
  return <Lesson number="11.3" title="Trigonometric Relations" goal="Connect the three ratios of an acute angle, prove identities and solve equations without a calculator.">
    <Card label="RIGHT TRIANGLE" title="Why does dividing sine by cosine give tangent?">
      <Triangle adj={4} opp={3} labels={["a","b","c"]}/>
      <p>Relative to θ, the opposite leg is b, the adjacent leg is a and the hypotenuse is c. Divide the two ratios. Their common scale cancels.</p>
      <Formula tex={String.raw`\frac{\sin\theta}{\cos\theta}=\frac{b/c}{a/c}=\frac ba=\tan\theta`}/>
      <details><summary>Simplify 3 cos θ tan θ.</summary><p>Replace tan θ by sin θ / cos θ. Cancelling cos θ leaves 3 sin θ.</p></details>
    </Card>
    <Card label="KEY FORMULA" title="Why do the squares add to one?">
      <p>Pythagoras’ theorem gives a² + b² = c². Divide each term by c².</p>
      <Formula tex={String.raw`\cos^2\theta+\sin^2\theta=\frac{a^2+b^2}{c^2}=1`}/>
      <p>The exponent applies to the ratio. Squaring the sum of the ratios also produces a cross term, 2 sin θ cos θ.</p>
      <details><summary>Simplify 7 − 4 sin²θ − 4 cos²θ.</summary><p>Group the last two terms to get 7 − 4(sin²θ + cos²θ) = 3.</p></details>
    </Card>
    <Card label="WORKED EXAMPLES" title="Recover a ratio or simplify a fraction">
      <p><b>Given cos θ = 7/25, find tan θ.</b> Subtraction gives sin²θ = 1 − 49/625 = 576/625. An acute angle has positive sine, so sin θ = 24/25. Dividing by 7/25 gives tan θ = 24/7.</p>
      <p><b>Given tan θ = 4, evaluate the fraction below.</b> Divide the numerator and denominator by cos θ.</p>
      <Formula tex={String.raw`\frac{2\sin\theta-\cos\theta}{\sin\theta+3\cos\theta}=\frac{2\tan\theta-1}{\tan\theta+3}=1`}/>
    </Card>
    <Card label="COMPLEMENTARY ANGLES" title="What changes when you use the other acute angle?">
      <Triangle adj={4} opp={3} labels={["4","3","5"]}/>
      <p>The angle at the top is 90° − θ. Its adjacent leg is the side of length 3, which is opposite θ. The hypotenuse stays the same. This exchanges sine and cosine and reverses the tangent ratio.</p>
      <p>sin θ = cos(90° − θ)<br/>cos θ = sin(90° − θ)<br/>tan θ × tan(90° − θ) = 1</p>
      <details><summary>Find acute x if tan x = 1 / tan 34°.</summary><p>The right side equals tan 56°. Tangent takes each value once among acute angles, so x = 56°.</p></details>
      <details><summary>Evaluate sin²28° + sin²62°.</summary><p>Replace sin 62° by cos 28°. The sum of the squares is 1.</p></details>
    </Card>
    <Card label="PROOF" title="Transform one side of an identity">
      <p>Show that (1 − cos θ)(1 + cos θ) / sin θ = sin θ for every acute θ.</p>
      <ol><li>Expand the numerator as a difference of squares, 1 − cos²θ.</li><li>Replace it with sin²θ.</li><li>Divide by sin θ to obtain the right side. The division is valid because sin θ is positive.</li></ol>
      <details><summary>Try a proof using two identities. Why does tan θ sin(90° − θ) equal sin θ?</summary><p>Replace sin(90° − θ) by cos θ and tan θ by sin θ / cos θ. The cosine factors cancel.</p></details>
    </Card>
  </Lesson>;
}
