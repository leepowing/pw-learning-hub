# AI Marking Tests — A Midsummer Night’s Dream

Use the existing server-side trusted question lookup. The client submits only the trusted question ID and student answer.

## Short-answer cases

| Question | Test answer | Expected result |
|---|---|---|
| q009 | `Athens is control; the woods are freedom and love.` | 2/2; synonym accepted |
| q031 | `Hermia and her dad disagree.` | 0/2 or partly statuses only; isolated vague conflict is insufficient |
| q033 | `It might not be true love because he is still under magic.` | 2/2; reasonable interpretation accepted |
| q064 | `Dramatic irony makes tension.` | 0/2; keywords without knowledge-gap/how link rejected |
| q075 | `Women had less independence because men had more authority.` | 2/2; equivalent wording accepted |
| q048 | `Consent is freedom and autonomy is permission.` | 0/2; reversed definitions rejected |

## Long-answer cases

| Question | Case | Expected behaviour |
|---|---|---|
| q035 | Accurate knowledge but only lists names | No analysis marks beyond criteria actually expressed |
| q036 | Uses `dramatic irony` incorrectly while explaining fairy magic | Incorrect terminology does not earn or inflate a mark |
| q037 | Argues Demetrius’s ending is genuine with relevant reasoning | Alternative interpretation accepted if consistent with the enchantment facts |
| q066 | Applies the six named methods to an original magical setting | No quotation required; plausible applications accepted |
| q078 | Explains patriarchy but omits Hermia/Theseus/forest | Only satisfied criteria marked Met; all omissions identified |
| q079 | Balanced alternative judgement supported by KO | Judgement wording need not match the model answer |

## Invariants

- `awardedMarks` equals the count of `met` criteria.
- `partly_met` earns zero.
- Criteria IDs/order/count match the trusted question.
- No outside quotation, scene knowledge or unsupported plot fact is required.
- Feedback names every incomplete criterion and does not contradict the score.
- The improved answer covers all trusted criteria in Year 8 English.

