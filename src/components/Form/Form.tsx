import React from "react";
import styles from "./Form.module.scss";
import Input from "./Input/Input";

const Form = (props: {
  content: {
    title: string;
    titleMessage: string;
    imgMessage: {
      url: string;
      altText: string;
    };
    input1: {
      title: string;
      type: string;
      id: string;
      name: string;
      placeholder: string;
    };
    input2: {
      title: string;
      type: string;
      id: string;
      name: string;
      placeholder: string;
    };
    textareaTitle: string;
  };
}) => {
  const content = props.content;
  const input1 = content.input1;
  const input2 = content.input2;

  const [buttonState, setButtonState] = React.useState(true);
  // const [formData, setFormData] = React.useState({
  //   fullName: "",
  //   fruit: "",
  //   message: "",
  // });

  function handleClick(event: any) {
    event.preventDefault();
    setButtonState((prevBtnState) => !prevBtnState);
    // console.log({ fullName, fruit, message });
  }

  function handleChange(event: any) {
    const { name, value } = event.target;
    // setFormData({ ...formData, [name]: value });
    console.log(name, value);
  }
  return (
    <>
      <section
        style={{ display: buttonState ? "block" : "none" }}
        className={styles.form}
        id="form"
      >
        <div className={`container`}>
          <form className={styles.form__container} action="#">
            <h2 className={`${styles.form__title} green_title`}>
              {content.title}
            </h2>

            <Input
              handle={handleChange}
              title={input1.title}
              type={input1.type}
              id={input1.id}
              name={input1.name}
              placeholder={input1.placeholder}
              // value={formData.fullName}
            />

            <Input
              handle={handleChange}
              title={input2.title}
              type={input2.type}
              id={input2.id}
              name={input2.name}
              placeholder={input2.placeholder}
              // value={formData.fruit}
            />

            <div className={styles.form__field}>
              <label htmlFor="help">
                <h5>{content.textareaTitle}</h5>
              </label>
              <textarea
                onChange={handleChange}
                id="help"
                cols={30}
                rows={10}
                name="help"
                placeholder="Type in your message"
                // value={formData.message}
              ></textarea>
            </div>

            <input
              onClick={handleClick}
              type="submit"
              className={`btn btn_secondary`}
              id="submitBtn"
              value="Submit"
            ></input>
          </form>
        </div>
      </section>

      <section
        style={{ display: buttonState ? "none" : "block" }}
        className={`${styles.form} ${styles.form__message}`}
        id="submitMessage"
      >
        <div className={`container`}>
          <div className={styles.form__container}>
            <h2 className={`${styles.form__title} green_title`}>
              {content.titleMessage}
            </h2>
            <img
              src={content.imgMessage.url}
              alt={content.imgMessage.altText}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
