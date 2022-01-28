//! Styles
import questionTypeStyles from "../styles/questiontype.module.scss";

export default function QuestionTypes() {
  return (
    <div className={questionTypeStyles.container}>
      {/* math */}
      <div className={questionTypeStyles.radio}>
        <label htmlFor="">Math</label>
        <input
          type="radio"
          name="question"
          id="math"
          value="math"
          className={questionTypeStyles.input}
        />
      </div>

      {/* reading */}
      <div className={questionTypeStyles.radio}>
        <label className={questionTypeStyles.reading} htmlFor="">
          Reading
        </label>
        <input
          type="radio"
          name="question"
          id="reading"
          value="reading"
          className={questionTypeStyles.input}
        />
      </div>

      {/* logic */}
      <div className={questionTypeStyles.radio}>
        <label className={questionTypeStyles.logic} htmlFor="">
          Logic
        </label>
        <input
          type="radio"
          name="question"
          id="logic"
          value="logic"
          className={questionTypeStyles.input}
        />
      </div>
    </div>
  );
}
