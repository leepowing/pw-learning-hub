import S4FunctionLesson from "../S4FunctionLesson";
import {lessons} from "../lessonData";
export default function Page(){return <S4FunctionLesson lesson={lessons.find(x=>x.number==="3.2")!}/>}
